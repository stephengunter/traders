import Helper from '@/common/helper';
import Strategy from './strategy';

class Charts {
   strategy = null;

   priceSeriesName = '報價';

   prices = [];
   times = [];

   indicatorSeries = [];

   constructor(strategy, indicators, quotes) {
      this.strategy = new Strategy(strategy, indicators);

      for (let i = 0; i < quotes.length; i++) {
         this.addQuote(quotes[i]);
      }

      this.strategy.calculate(quotes);

      let mainIndicators = this.strategy.getMainIndicators();
      let subIndicators = this.strategy.getSubIndicators();
      this.xAxis = this.initXAxis(subIndicators, this.times);
      this.yAxis = this.initYAxis(subIndicators);
      this.grids = this.initGrids(subIndicators);
      this.series = this.initSeries(mainIndicators, subIndicators);
        
   }

   addQuote(item){
      
      this.times.push(Helper.timeString(item.time));  
      this.prices.push(this.mapQuote(item));

      this.strategy.addDataList(item.dataList);
      
   }

   mapQuote(item) {
      return [item.open, item.price, item.low, item.high];
   }

   getColor(signal){
      if(signal > 0) return '#FD1050';
      else if(signal == 0) return '#FFFFFF';
      else return '#0CF49B';
   }
   

   initXAxis(subIndicators){
      let xAxis = [{
            type: 'category',
            data: this.times,
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
            data: this.times,
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
            axisLine: { onZero: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false }
          });
       
      }

      return yAxis;
   }

   initSeries(mainIndicators, subIndicators){
      
      let mainSignals = this.strategy.signals;

      let series = [{
         type: 'candlestick',
         name: this.priceSeriesName,
         itemStyle: {
            normal: {
               color: '#FD1050',
               color0: '#0CF49B',
               borderColor: '#FD1050',
               borderColor0: '#0CF49B'
            }
         },
         data: this.prices,
         markPoint: {
            // label: {
            //     normal: {
            //         formatter: function (param) {
            //             return param != null ? Math.round(param.value) : '';
            //         }
            //     }
            // },
            data: [
                {
                    name: 'Damn',
                    coord: ['10:45:00', 9900],
                    value: 9900,
                    itemStyle: {
                        normal: { color: '#FD1050'}
                    }
                }
            ],
            tooltip: {
                formatter: function (param) {
                    return param.name + '<br>' + (param.data.coord || '');
                }
            }
         },
      }];

      let seriesIndex = 1;
     
      for(let i = 0; i < mainIndicators.length; i++)
      {
         let indicator = mainIndicators[i];
         series.push({
               type: 'line',
               name: indicator.name,
               data: indicator.data,
               smooth: true,
               lineStyle: {
                  width: 3
            }
         });

         this.indicatorSeries.push({
            index: seriesIndex,
            entity: indicator.entity
         });

         seriesIndex++;
      }

      for(let i = 0; i < subIndicators.length; i++)
      {
         let indicator = subIndicators[i];
         
         let vals = indicator.data.map(item => {
            return item.val;
         })
         
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

         this.indicatorSeries.push({
            index: seriesIndex,
            entity: indicator.entity
         });

         seriesIndex++;

         if(indicator.withAvg){
            let avgs = indicator.data.map(item => {
               return item.avg;
            })
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

            this.indicatorSeries.push({
               index: seriesIndex,
               entity: indicator.entity
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

      let strategy = this.strategy;
      let indicatorSeries = this.indicatorSeries;
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
      

      return {
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
         xAxis: this.xAxis,
         yAxis: this.yAxis,
         grid: this.grids,
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
         series: this.series,
      };
   }


   

}


export default Charts;