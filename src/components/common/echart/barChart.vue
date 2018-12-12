<template>
    <div class="barChartBox" :id="id"> </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
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
            let color = this.dataList.color
            let data = this.dataList.data
            option.color = color
            let data1 = []
			data.y[0].data.forEach((element, e) => {
                if(type != "solid"){
                    data1.push({
                        value: element,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0.1,
                                        color: "rgba(255,255,255,0.1)"
                                    },
                                    {
                                        offset: 1,
                                        color: color[e]
                                    }
                                ])
                            }
                        }
                    })
                }else{
                    data1.push({
                        value: element,
                        itemStyle: {
                            normal: {
                                // barBorderRadius: 5,
                                color: color[e]
                            }
                        }
                    })
                }
    
			});
			if(this.locale == "zh"){
				option.yAxis.data = data.x1
			}else{
				option.yAxis.data = data.x2
			}
			option.yAxis.inverse = true
			option.xAxis.axisLabel.show = false
			let unit = this.unit||''
			option.series=[
				{
					data: data1,
					type: "bar",
					barCategoryGap: "55%",
					label: {
						normal: {
							show: true,
							position: "right",
							formatter: '{c}' + unit,
							color: function (params) {
								return color[params.dataIndex];
							}
						}
					},
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

