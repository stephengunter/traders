import Helper from '@/common/helper';

class Charts {

   constructor(strategy) {
      this._strategy = strategy;
      this._priceSeriesName = '報價';
      this._kLineStyle = {
         color: '#FD1050',
         color0: '#0CF49B',
         borderColor: '#FD1050',
         borderColor0: '#0CF49B'
      };
      this._indicatorSeries = [];

      let quotes = strategy.quotes;
      this._prices = quotes.map(item => this.mapQuote(item));
      this._times = quotes.map(item => Helper.timeString(item.time));
      
   }

   get quotes() {
      return this._strategy.quotes;
   }

   get options() {
      return this.defaultOptions();
   }

   init(){
      
      return new Promise((resolve, reject) => {
         let mainIndicators = this._strategy.getMainIndicators();
         let subIndicators = this._strategy.getSubIndicators();
         
         this._xAxis = this.initXAxis(subIndicators, this._times);
         this._yAxis = this.initYAxis(subIndicators);
         
         this._grids = this.initGrids(subIndicators);
         
         this._series = this.initSeries(mainIndicators, subIndicators);
         
         resolve(true);         
      });  
   }

   addUpdateQuote(item){
      let index = this.quotes.findIndex(q => q.time == item.time);
      if(index > this._times.length - 1){
         this._times.push(Helper.timeString(item.time));
         this._prices.push(this.mapQuote(item));
         
         this._strategy.addDataList(item.dataList);
      }else{
         this._prices[index] = this.mapQuote(item);
         this._strategy.updateDataList(item);
      }
      
   }

   updateRealTimeQuotes(newQuotes){
      for (let i = 0; i < newQuotes.length; i++) {
         this.addUpdateQuote(newQuotes[i]);
      }
      
      let startIndex = this.quotes.length - newQuotes.length ;
      
      return new Promise((resolve, reject) => {
         this._strategy.calculate(startIndex)
         .then(() => {
            let mainIndicators = this._strategy.getMainIndicators();
            let subIndicators = this._strategy.getSubIndicators();

            for (let i = 0; i < this._xAxis; i++) {
               this._xAxis[i].data = this._times;
            }
            this._series[0].data = this._prices;

            this._series[0].itemStyle = this._kLineStyle;
            let mainSignals = this.resolveMainSignals();
           
            let markPoints = mainSignals.map(item => this.convertToMarkPoint(item));
            this._series[0].markPoint.data = markPoints;


            let seriesIndex = 1;
            for(let i = 0; i < mainIndicators.length; i++)
            {
               let indicator = mainIndicators[i];
               let vals = indicator.mapChartResult(startIndex);
               vals.forEach(item => {
                  if(item.index > this._series[seriesIndex].data.length - 1){
                     this._series[seriesIndex].data.push(item.result);
                  }else{
                     this._series[seriesIndex].data[item.index] = item.result;
                  }
               });
               seriesIndex++;
            }

            for(let i = 0; i < subIndicators.length; i++)
            {
               let indicator = subIndicators[i];
               let vals = indicator.mapChartResult(startIndex);
               vals.forEach(item => {
                  if(item.index > this._series[seriesIndex].data.length - 1){
                     this._series[seriesIndex].data.push(item.result);
                  }else{
                     this._series[seriesIndex].data[item.index] = item.result;
                  }
               });
               let colorUp = this.getColor(1);
               let colorDown = this.getColor(-1);
               let colorZero = this.getColor(0);
               this._series[seriesIndex].itemStyle = {
                  normal: {
                     color: function(params) {
                        if(indicator.buySignalIndexes.includes(params.dataIndex)){
                           return colorUp;
                        }else if (indicator.sellSignalIndexes.includes(params.dataIndex)){
                           return  colorDown;
                        }else return colorZero;
                     }
                  }
               }
               seriesIndex++;

               if(indicator.withAvg){
                  let avgs = indicator.mapChartAvg(startIndex);
                  avgs.forEach(item => {
                     if(item.index > this._series[seriesIndex].data.length - 1){
                        this._series[seriesIndex].data.push(item.avg);
                     }else{
                        this._series[seriesIndex].data[item.index] = item.avg;
                     }
                  });
                  
                  seriesIndex++;
               }

            }
            
            resolve(true);
         })
         .catch(error => { 
            reject(error); 
         })
         
      });

   }

   mapQuote(item) {
      return [item.open, item.price, item.low, item.high];
   }

   getPrice(index){
      return this._prices[index][1];    
   }

   getTradePrice(index){
      return this.getPrice(index);
   }

   getColor(signal){
      if(signal > 0) return '#FD1050';
      else if(signal == 0) return '#FFFFFF';
      else return '#0CF49B';
   }
   

   initXAxis(subIndicators){
      let xAxis = [{
            type: 'category',
            data: this._times,
            axisLine: {
               lineStyle: {
                  color: '#8392A5'
               }
            },
            axisLabel: {
               interval: function(index, value) {
                  let vals = value.split(':');
                  if(vals.length){
                     let minutes = parseInt(vals[1]);
                     if(minutes == 0 || minutes == 30){
                        return true;
                     }else  return false;
                     
                  }else{
                     return false;
                  }                  
               }
            }
      }];

      for(let i = 0; i < subIndicators.length; i++)
      {
         xAxis.push({
            type: 'category',
            data: this._times,
            gridIndex: i + 1,
            axisTick: {
               show: false
            },
            axisLabel: {
               show: false
            }
          });
       
      }

      return xAxis;
   }

   initYAxis(subIndicators){
     
      let yAxis = [{
         scale: true,
         axisLine: {
            lineStyle: {
               color: '#8392A5'
            }
         },
         splitLine: {
            show: false
         }
      }];

      for(let i = 0; i < subIndicators.length; i++)
      {
         yAxis.push({
            gridIndex: i+1,
            name: subIndicators[i].name,
            nameTextStyle:{
               color: '#8392A5'
            },
            nameLocation: 'middle',
            axisLine: { onZero: false},
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false }
          });
       
      }

      return yAxis;
   }

   

   resolveMainSignals(){
      let signals = [];
      let trades = this.resolveTrades();
      
      for(let i = 0; i < trades.length; i++){
         let trade = trades[i];
         let exist = signals.find(item => item.index === trade.index);
         if(exist){
            exist = Object.assign(exist, trade);
         }else{
            signals.push(trade);
         }
      }
      return signals;
   }

   resolveTrades(){
      let tradeItems = this._strategy.getTradeItems();
      return tradeItems.map(item => {
         return {
            ...item , time: this._times[item.index]
         }
      });
      
      
   }

   convertToMarkPoint(signal){
      let labelColor = '#fff';
      let text = signal.price;
      if(signal.stp > 0 ){
         text = '停利';
         labelColor = this.getColor(1);
      }else if(signal.stp < 0 ){
         text = '停損';
         labelColor = this.getColor(-1);
      }
      return {
         coord: [signal.time, signal.price],
         value: text,
         label: {
            color: labelColor,
         },
         itemStyle: {
            color: this.getColor(signal.val)
            
         }
      }
   }

   initSeries(mainIndicators, subIndicators){
      
      let mainSignals = this.resolveMainSignals();
      let markPoints = mainSignals.map(item => this.convertToMarkPoint(item));

      let series = [{
         type: 'candlestick',
         name: this._priceSeriesName,
         itemStyle: this._kLineStyle,
         data: this._prices,
         markPoint: {
            data: markPoints
         },
      }];

      let seriesIndex = 1;
     
      for(let i = 0; i < mainIndicators.length; i++)
      {
         let indicator = mainIndicators[i];
         let vals = indicator.mapChartResult();

         series.push({
               type: 'line',
               name: indicator.name,
               data: vals,
               smooth: true,
               lineStyle: {
                  width: 3
            }
         });

         this._indicatorSeries.push({
            index: seriesIndex,
            entity: indicator.entity,
            grid: 'main',
            data: 'val'
         });

         seriesIndex++;
      }

      for(let i = 0; i < subIndicators.length; i++)
      {
         let indicator = subIndicators[i];
         
         let results = indicator.mapChartResult();
         let vals = results.map(item => item.result);
         
         let colorUp = this.getColor(1);
         let colorDown = this.getColor(-1);
         let colorZero = this.getColor(0);

         series.push({
               type: 'bar',
               name: indicator.name,
               xAxisIndex: i+1,
               yAxisIndex: i+1,
               data: vals,
               itemStyle: {
                  normal: {
                     color: function(params) {
                        if(indicator.buySignalIndexes.includes(params.dataIndex)){
                           return colorUp;
                        }else if (indicator.sellSignalIndexes.includes(params.dataIndex)){
                           return  colorDown;
                        }else return colorZero;
                     }
                  }
               }
         });

         this._indicatorSeries.push({
            index: seriesIndex,
            entity: indicator.entity,
            grid: 'sub',
            data: 'val'
         });

         seriesIndex++;

         if(indicator.withAvg){
            let avgResults = indicator.mapChartAvg();
            let avgs = avgResults.map(item => item.avg);
            let avgName =`${indicator.name}(MA${indicator.param})` ;
            
            series.push({
               type: 'line',
               smooth: true,
               sampling: 'average',
               name: avgName,
               xAxisIndex: i+1,
               yAxisIndex: i+1,
               data: avgs,
               lineStyle: {
                  opacity: 0.5 , 
                  color: '#FFD700' 
               }
            });

            this._indicatorSeries.push({
               index: seriesIndex,
               entity: indicator.entity,
               grid: 'sub',
               data: 'avg'
            });

            seriesIndex++;

            
         }
       
      }
     
      return series;
   }

   initGrids(subIndicators){
      let mainHeight = 50;
      let sliderHeight = 15;
      let padding = 3;
      
      let subHeight = 100 - mainHeight - sliderHeight; 

      let heights = [];
    
      let count = subIndicators.length;
      let canUse = subHeight - (count * padding);
      let heightEach = Math.floor(canUse / count);
      subIndicators.forEach(() => {
         heights.push(heightEach)
      });
      
      let grids =[{
         top: '5%',
         left: '5%',
         right: '3%',
         height: `${mainHeight}%`
      }];

      let marginTop = mainHeight + 5;
      for(let i = 0; i < heights.length; i++)
      {
        
         grids.push({
            top: `${ marginTop + padding }%`,
            left: '5%',
            right: '3%',
            height: `${heights[i]}%`
         });
         marginTop += heights[i] + padding;
      }
      
      return grids;
   }

   

   getTootip(){

      let strategy = this._strategy;
      let indicatorSeries = this._indicatorSeries;
      let getColor = this.getColor;

      return {
         trigger: 'axis',
            axisPointer: {            
               type: 'cross'     
            },
            formatter: function (params) {
               params = params.sort(function (a, b) {
                  return a.componentIndex > b.componentIndex ? 1 : -1;
               });
               
               let tip = params[0].name + '<br/>';
               for (let i = 0; i < params.length; i++) {
                  let item = params[i];
                  if(item.componentSubType === 'candlestick')
                  {
                     tip +=  `${item.marker}開${item.value[1]} 高${item.value[4]} 低${item.value[3]} 收${item.value[2]}<br/>`;
                  }
                  else{
                     let indicator = indicatorSeries.find(i => i.index == item.seriesIndex);
                     let signal = strategy.getIndicatorSignal(indicator.entity, item.dataIndex);
                     let color = getColor(signal);
                     let marker = item.marker;

                     marker = item.marker.replace(item.color, color);

                     tip += `${marker + item.seriesName} : ${item.value}<br/>`;
                  }
                  
               }
               
               return tip;         
            }

      }
   }

   defaultOptions() {
      
     return  {
      
         backgroundColor: '#21202D',
         tooltip: this.getTootip(),
         axisPointer: {
            link: {
               xAxisIndex: 'all'
            },
            label: {
               backgroundColor: '#777'
            }
         },
         xAxis: this._xAxis,
         yAxis: this._yAxis,
         grid: this._grids,
         dataZoom: [{
            type: 'inside',
            xAxisIndex: [0, 1],
         },{
            type: 'slider',
            textStyle: {
               color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
               color: '#fff',
               shadowBlur: 3,
               shadowColor: 'rgba(0, 0, 0, 0.6)',
               shadowOffsetX: 2,
               shadowOffsetY: 2
            },
            dataBackground: {
               areaStyle: {
                  color: '#8392A5'
               },
               lineStyle: {
                  opacity: 0.8,
                  color: '#8392A5'
               }
            },
            xAxisIndex: [0, 1],
            y: '92%',
         }],
         animation: false,
         series: this._series,
      };

     
   }

}


export default Charts;