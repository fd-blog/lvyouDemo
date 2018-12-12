<template>
    <div class="pieChart" :id="id">

    </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props:["data", 'aid', 'roseType'],
    data(){
        return{
            id: this.aid,
            dataList: copyAndClear(this.data),
            chart: '',
            option: {
                series: [
                    {
                    name: '评价',
                    type: 'pie',
                    center: ["50%", "50%"],
                    radius: ['0%', '70%'],
                    avoidLabelOverlap: false,
                    legendHoverLink: false,
                    selectedOffset: 10,
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: '20'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 5,
                            length2: 5,
                        }
                    },
                    selectedMode: 'single',
                    z: 3
                }
                ]
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
			this.pieChartFun()
		}
	},
	mounted(){
        this.pieChartFun()
	},
	methods:{
		pieChartFun(){
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
            let value = data.value
            let legend
            if(this.locale == 'zh'){
                legend = data.legend1
            }else{
                legend = data.legend2
            }
            value.forEach((element, e) => {
                element.name = legend[e]
            })
            option.series[0].data = value
            option.series[0].roseType = this.roseType || false
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
.pieChart
    width 100%
    height 100%
</style>
