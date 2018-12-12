<template>
    <div class="scatterChartBox" :id="id"> </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
import { types } from 'util';
export default {
    props: ['data', 'aid', 'type', 'unit'],
    data() {
        return {
			id: this.aid,
            dataList: copyAndClear(this.data),
			chart: '',
			option:{
                baseOption: {
                    timeline: {
                        // show:false,
                        axisType: 'category',
                        orient: 'vertical',
                        autoPlay: true,
                        inverse: true,
                        playInterval: 2000,
                        left: null,
                        right: 0,
                        top: 20,
                        bottom: 20,
                        width: 55,
                        data: [],
                        symbol: 'none',
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        controlStyle: {
                            normal: {
                                color: '#fff',
                                borderColor: '#fff'
                            },
                            emphasis: {
                                color: '#fff',
                                borderColor: '#fff'
                            }
                        },
                    },
                    visualMap: {
                        show: false,
                        dimension: 0,
                        min: 0,
                        max: 7.5,
                        inRange: {
                            symbolSize: [10, 40],
                            color: ['#ff3b2f', '#ff9501', '#ffd425', '#51ecf1', '#4fda63']
                        }
                    },
                    grid: {
                        right: '28%',
                        bottom: '15%',
                        top: '15%'
                    },
                    tooltip: {
                        padding: 5,
                        backgroundColor: '#222',
                        borderColor: '#777',
                        borderWidth: 1,
                        formatter: function(data) {
                            var value = data.value;
                            return "景区" + '：' + value[2] + '<br>' +
                                "客流量" + '：' + value[1] + "人次" + '<br>' +
                                "停留时长" + '：' + value[0] + "小时" + '<br>'
                        }
                    },
                    xAxis: {
                        boundaryGap: true,
                        type: 'category',
                        name: '停留时长（小时）',
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '客流量（人次）',
                        nameTextStyle: {
                            color: '#fff'
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    }
                },
                options: []

            }
		}
    },
    computed:{
		locale(){
			return this.$i18n.locale
		}
	},
	watch:{
		locale(){
			this.scatterChartFun()
		}
	},
	mounted(){
        this.scatterChartFun()
	},
	methods:{
		scatterChartFun(){
			let _this = this
            let id = this.id
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
            }
            let type = this.type
            let option = copyAndClear(this.option)
            let color = this.dataList.color
            let data = this.dataList.baseOption
            let timelineData
            let tooltipFor 
            let xAxis
            let yAxis
            let options 
            if(this.locale == "zh"){
                options = this.dataList.options1
                timelineData = data.timeline.data1
                tooltipFor = data.tooltip.formatter1
                xAxis = data.x1
                yAxis = data.y1
            }else{
                options = this.dataList.options2
                timelineData = data.timeline.data2
                tooltipFor = data.tooltip.formatter2
                xAxis= data.x2
                yAxis = data.y2
            }
            option.baseOption.timeline.data = timelineData
            option.baseOption.tooltip.formatter = tooltipFor
            option.baseOption.xAxis.name = xAxis.name
            option.baseOption.xAxis.data = xAxis.data
            option.baseOption.yAxis.name = yAxis.name
            option.options = options
            if(document.getElementById(id)){
				this.chart = echarts .init(document.getElementById(id))
                this.chart.setOption(option)
                this.$store.commit('chartListFun', this.chart)
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
.scatterChartBox
    width 100%
    height 100%
</style>

