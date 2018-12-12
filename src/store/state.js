export default {
  viewer: '',
  pickId: '',
  clickType: false,
  chartList: [],
  lineOption:{
    title:{
      text:'',
      textStyle:{
        color: '#ffffff',
        fontSize: 24,
        align: "center"
      },
      borderRadius: 10,
      left: "center"
    },
    legend:{
      data: [],
      textStyle:{
         color: "#ffffff",
         fontSize: 24
      },
      icon: 'circle',
      selectedMode: false,
      left: "right",
      selectedMode: false
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLine: {
        lineStyle:{
          color: "#dbe9ff",
          width: 2
        }
      },
      axisLabel:{
        fontSize: "14"
      },
      axisTick:{
        show: false,
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle:{
          color: "#dbe9ff"
        }
      },
      axisTick:{
        show: false,
      },
      axisLabel:{
        fontSize: "14"
      }
    },
    grid:{
      left: 0,
      right: 0,
      top: "10%",
      width: '100%',
      height: '85%',
      containLabel: true
    },
    series: []
  },
}
