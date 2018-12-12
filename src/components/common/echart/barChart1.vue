<template>
    <div class="barChartBox" :id="id"> </div>
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
				yAxis: {
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
				xAxis: {
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
					top: "5%",
					width: '100%',
					height: '80%',
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
			this.echartsbarFun()
		}
	},
	mounted(){
		this.echartsbarFun()
	},
	methods:{
		echartsbarFun(){
			let _this = this
            let id = this.id
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
            }
            let type = this.type
            let option = copyAndClear(this.option)
            let color1 = this.dataList.color1
            let color2 = this.dataList.color2
            let data = this.dataList.data
            let unit
			if(this.locale == "zh"){
                option.yAxis.data = data.x1
                unit = data.unit1 ||''
			}else{
                option.yAxis.data = data.x2
                unit = data.unit12||''
			}
			option.yAxis.inverse = true
			option.xAxis.axisLabel.show = false
            let data1 = []
            data.y[1].data.forEach((element, e) => {
                data1.push({
                    value: element,
                    itemStyle: {
                        normal: {
                            color: color2[e],
                            barBorderRadius: [0, 10, 10, 0]
                        }
                    }
                })
            });
			option.series=[
				{
                    name: ' ',
                    type: 'bar',
                    barWidth: 20,
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: color1,
                            barBorderRadius: [0, 10, 10, 0]
                        }
                    },
                    barGap: '-100%',
                    barCategoryGap: '50%',
                    data: [100, 100],
                }, 
                {
                    name: ' ',
                    type: 'bar',
                    barWidth: 20,
                    label: {
                        normal: {
                            show: true,
                            position: data.position,
                            formatter: '{c}'+ unit,
                        }
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0]
                        }
                    },
                    data: data1,
                }
			]
			option.grid = {
				bottom: '4%',
				top: "2%",
				right: '17%',
				containLabel: true,
				left: "2%"
            }
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
.barChartBox
    width 100%
    height 100%
</style>

