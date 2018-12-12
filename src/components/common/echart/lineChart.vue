<template>
    <div class="lineChart" :id="id"></div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props:["data", 'aid', 'areatype', 'smooth'],
    data(){
        return{
            id: this.aid,
            dataList: copyAndClear(this.data),
            chart:'',
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
                        fontSize: 20
                    },
                    icon: 'circle',
                    selectedMode: false,
                    left: "center",
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
                        show: false,
                        fontSize: "14"
                    }
                },
                grid:{
                    left: "5%",
                    top: "10%",
                    width: '90%',
                    height: '85%',
                    containLabel: true
                },
                series: []
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
			this.lineChartFun()
		}
	},
	mounted(){
        this.lineChartFun()
	},
	methods:{
		lineChartFun(){
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
            let legend = []
            if(this.locale == 'zh'){
                option.xAxis.data = data.x1
                legend = data.legend1 || []
            }else{
                option.xAxis.data = data.x2
                legend = data.legend2 || []
            }
            option.legend.data = legend
            let series = []
            let areatype = this.areatype
            let smooth = this.smooth || false
            data.y.forEach((element, e) => {
                let obj = {
                    type: 'line',
                    name: legend[e],
                    data: element.data,
                    smooth: smooth
                }
                if(areatype == "area"){
                    obj.areaStyle = {
                        normal: {
                            color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, 
                                [
                                    {
                                        offset: 0,
                                        color: color[e]
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(251,101,51, 0)"
                                    }
                                ],
                                false
                            ),
                            shadowColor: "rgba(0, 0, 0, 0.1)",
                            shadowBlur: 10
                        }
                    }
                }
                series.push(obj)
            });
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
.lineChart
    width 100%
    height 100%
</style>
