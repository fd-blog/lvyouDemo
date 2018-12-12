<template>
    <div class="gaugeChartBox" :id="id"> </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props: ['data', 'aid'],
    data() {
        return {
			id: this.aid,
            dataList: copyAndClear(this.data),
            chart: '',
            option:{
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
                yAxis: [
                    {
                        type: 'value',
                        minInterval: 1,
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
                            show: false,
                            fontSize: "14"
                        }
                    },
                    {
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
                            show: false,
                            fontSize: "14"
                        }
                    }
                ],
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
    },
    computed:{
		locale(){
			return this.$i18n.locale
		}
	},
	watch:{
		locale(){
			this.echartsBiaxialFun()
		}
	},
	mounted(){
        this.echartsBiaxialFun()
	},
	methods:{
		echartsBiaxialFun(){
			let _this = this
            let id = this.id
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
			}
            let option = copyAndClear(this.option)
            let color = this.dataList.color
            let data = this.dataList.data
            option.color = color
            option.xAxis.data = data.x
            let series = [
                {
                    type: 'bar',
                    data: data.y[0].data,
                    yAxisIndex: 0,
                    barWidth: "40%",
                    label:{
                        show: true,
                        position: 'top',
                        formatter: '{c}'
                    }
                },
                {
                    type: 'line',
                    data: data.y[1].data,
                    yAxisIndex: 1,
                    label:{
                        show: true,
                        formatter: '{c}%'
                    }
                }
            ]
            option.series = series
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
.gaugeChartBox
    width 100%
    height 100%
</style>