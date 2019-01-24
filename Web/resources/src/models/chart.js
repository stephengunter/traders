import Helper from '@/common/helper';

class Charts {
   colorRed = '#FD1050';
   colorGreen = '#0CF49B';
   prices = [];
   times = [];
   indicators = [];


   constructor(quotes, indicators) {
      this.indicators = indicators.map(item => this.mapIndicator(item));

      quotes.forEach(qoute => {
         this.addQuote(qoute);
      });

      let mainIndicators = this.getMainIndicators();
      let subIndicators = this.getSubIndicators();
      this.xAxis = this.initXAxis(subIndicators, this.times);
      this.yAxis = this.initYAxis(subIndicators);
      this.grids = this.initGrids(subIndicators);
      this.series = this.initSeries(mainIndicators, subIndicators);
        
   }

   addQuote(item){
      this.times.push(Helper.timeString(item.time));  
      this.prices.push(this.mapQuote(item));
      item.dataList.forEach(data => {
         let indicator = this.indicators.find(i => i.entity == data.indicator);
         indicator.data.push(data);
      })
      
   }

   mapQuote(item) {
      return [item.open, item.price, item.low, item.high];
   }

   mapIndicator(item) {
      return {
         name: item.name,
         type: item.type,
         entity: item.entity,
         main: item.main,
         data:[]
      }
   }

   getMainIndicators(){
      return this.indicators.filter(item => item.main);
   }

   getSubIndicators(){
      return this.indicators.filter(item => !item.main);
   }
   

   initXAxis(subIndicators){
      let interval = 60 - 1;
      let xAxis = [{
            type: 'category',
            data: this.times,
            axisLine: {
               lineStyle: {
                  color: '#8392A5'
               }
            },
            axisLabel: {
               interval: interval,
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
      
      let series = [{
         type: 'candlestick',
         name: '報價',
         itemStyle: {
            normal: {
               color: this.colorRed,
               color0: this.colorGreen,
               // borderColor:this.colorRed,
               // borderColor0: this.colorGreen
            }
         },
         data: this.prices,
         //smooth: true,
         //symbol: 'none',
         //sampling: 'average',
         // markPoint: {
         //    label: {
         //       normal: {
         //          formatter: function (param) {
         //             return param != null ? Math.round(param.value) : '';
         //          }
         //       }
         //    },
         //    data: markPointData
         // }
      }];
     
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
       
      }

      

      for(let i = 0; i < subIndicators.length; i++)
      {
         let indicator = subIndicators[i];

         let colorRed = this.colorRed;
         let colorGreen = this.colorGreen;
         series.push({
               type: 'bar',
               name: indicator.name,
               xAxisIndex: i+1,
               yAxisIndex: i+1,
               data: indicator.data,
               itemStyle: {
                  normal: {
                     color: function(params) {
                        var col;
                        if (params.data >= 0) {
                           col = colorRed;
                        } else {
                           col = colorGreen;
                        }
                        return col;
                     }
                  }
               }
          });
       
      }
     
      return series;
   }

   initGrids(subIndicators){
      let mainHeight = 50;
      let sliderHeight = 12;
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
         top: '3%',
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

   defaultOptions() {
      
      return {
         backgroundColor: '#21202D',
         tooltip: {
            trigger: 'axis',
            axisPointer: {            
               type: 'line'       
            },
            formatter: function (params) {
               params = params.sort(function (a, b) {
                  return a.componentIndex > b.componentIndex ? 1 : -1;
               });
               
               let tip = params[0].name + '<br/>';
               for (let i = 0; i < params.length; i++) {
                  tip += `${params[i].marker + params[i].seriesName} : ${params[i].value}<br/>`;
               }
               return tip;         
            }
         },
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
            y: '94%',
         }],
         animation: false,
         series: this.series,
      };
   }


   

}


export default Charts;