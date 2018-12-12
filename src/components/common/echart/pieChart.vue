<template>
    <div class="pieChart" :id="id">

    </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props:["data", 'aid', 'areatype', 'smooth'],
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
                    radius: ['60%', '80%'],
                    avoidLabelOverlap: false,
                    legendHoverLink: false,
                    selectedOffset: 10,
                    label: {
                        normal: {
                            position: 'center',
                            show: false,
                            formatter: '{b}\n{c}',
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
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
            let value 
            if(this.locale == 'zh'){
                value = data.value1
            }else{
                value = data.value2
            }
            value.forEach((element, e) => {
                if(e == 0){
                    element.label= {
                        normal: {
                            show: true
                        }
                    }
                    element.selected = true
                }else{
                    element.label= {
                        normal: {
                            show: false
                        }
                    }
                }
            })
            option.series[0].data = value
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
