<template>
    <div class="pictorialBarChartBox" :id="id"> </div>
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
                grid: {
                    bottom: '2%',
                    containLabel: true,
                    // left: "0%"
                },
                xAxis: {
                    data: ['军人', '农名', '学生', '其他', '企事业单位', '公务员', '工人', '文教科技人员', '服务销售人员'],
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: { show: false }
                },
                yAxis: {
                    splitLine: { show: false },
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: { show: false }
                },
                series: [{
                    name: 'hill',
                    type: 'bar',
                    barCategoryGap: '-1%',
                    itemStyle: {
                        normal: {
                            color: '#188cf3'
                        }
                    },
                    data: [4, 4, 4, 12, 20, 24, 40, 40, 40],
                    z: 10
                }, {
                    name: 'glyph',
                    type: 'pictorialBar',
                    barGap: '-100%',
                    symbolPosition: 'end',
                    symbolSize: 50,
                    symbolOffset: [0, '-120%'],
                    z: 10,
                    data: [
                        {
                            value: 5,
                            symbol: 'image://./image/tubiao1.png',
                            symbolSize: [40, 58],
        
                        }, {
                            value: 5,
                            symbol: 'image://./image/tubiao2.png',
                            symbolSize: [42, 57],
                            label: {
                                normal: {
                                    show: true,
                                    position: [25, 75],
                                    color: '#fff',
                                    formatter: function (p) {
                                        return '4%';
                                    }
                                }
                            },
                        }, {
                            value: 5,
                            symbol: 'image://./image/tubiao3.png',
                            symbolSize: [42, 56],
                        }, {
                            value: 13,
                            symbol: 'image://./image/tubiao4.png',
                            symbolSize: [42, 57],
                            label: {
                                normal: {
                                    show: true,
                                    position: [10, 80],
                                    color: '#fff',
                                    formatter: function (p) {
                                        return '12%';
                                    }
                                }
                            },
                        }, {
                            value: 21,
                            symbol: 'image://./image/tubiao5.png',
                            symbolSize: [44, 74],
                            label: {
                                normal: {
                                    show: true,
                                    position: [10, 100],
                                    color: '#fff',
                                    formatter: function (p) {
                                        return '20%';
                                    }
                                }
                            },
                        }, {
                            value: 25,
                            symbol: 'image://./image/tubiao6.png',
                            symbolSize: [44, 59],
                            label: {
                                normal: {
                                    show: true,
                                    position: [10, 80],
                                    color: '#fff',
                                    formatter: function (p) {
                                        return '24%';
                                    }
                                }
                            },
                        }, {
                            value: 41,
                            symbol: 'image://./image/tubiao7.png',
                            symbolSize: [42, 67]
                        }, {
                            value: 41,
                            symbol: 'image://./image/tubiao8.png',
                            symbolSize: [59, 74],
                            label: {
                                normal: {
                                    show: true,
                                    position: [15, 100],
                                    color: '#fff',
                                    formatter: function (p) {
                                        return '40%';
                                    }
                                }
                            },
                        }, {
                            value: 41,
                            symbol: 'image://./image/tubiao9.png',
                            symbolSize: [59, 75]
                        }
        
                    ]
                }]
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
			this.pictorialBarChartFun()
		}
	},
	mounted(){
        this.pictorialBarChartFun()
        let _this = this
	},
	methods:{
		pictorialBarChartFun(){
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
            let imgList
            let unit
            let labelshow = data.y[0].labelshow
            if(this.locale == "zh"){
                option.xAxis.data = data.x1
                imgList = data.y[0].imgList1
                unit = data.unit1
			}else{
                option.xAxis.data = data.x2
                imgList = data.y[0].imgList2  
                unit = data.unit2
			}
            let data1 = []
            data.y[0].value.forEach((item, i) =>{
                let obj = {
                    value: item,
                    symbol: 'image://' + imgList[i],
                    symbolSize: [40, 58],
                }
                if(labelshow[i]){
                    obj.label = {
                        normal: {
                            show: true,
                            position: [15, 70],
                            color: '#fff',
                            formatter: '{c}' + unit
                        }
                    }
        }
                data1.push(obj)

            })
			option.series=[
				{
                    name: 'hill',
                    type: 'bar',
                    barCategoryGap: '-1%',
                    itemStyle: {
                        normal: {
                            color: '#188cf3'
                        }
                    },
                    data: data.y[0].value,
                    z: 10
                },
                {
                    name: 'glyph',
                    type: 'pictorialBar',
                    barGap: '-100%',
                    symbolPosition: 'end',
                    symbolSize: 50,
                    symbolOffset: [0, '-120%'],
                    z: 10,
                    data: data1
                }
			]
			option.grid = {
				bottom: '4%',
				top: "40%",
				containLabel: true,
                left: "0%",
                width: "100%"
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
.pictorialBarChartBox
    width 100%
    height 100%
</style>

