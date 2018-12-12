<template>
    <div class="radarChartBox" :id="id"> </div>
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
            option: {
                radar: {
                    name: {
                        textStyle: {
                            color: '#fff',
                            padding: [3, 5]
                        }
                    },
                    indicator: [],
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                            width: 2
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(238, 197, 102, 0.1)'
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(238, 197, 102, 0.1)'
                        }
                    }
                },
                tooltip: {},
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
			this.echartsradarFun()
		}
	},
	mounted(){
        this.echartsradarFun()
	},
	methods:{
		echartsradarFun(){
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
            if(this.locale == 'zh'){
                option.radar.indicator = this.dataList.indicator1
            }else{
                option.radar.indicator = this.dataList.indicator2
            }
            data.forEach(element => {
                if(this.locale == 'zh'){
                    element.name = element.name1
                }else{
                    element.name = element.name2
                }
            });
            option.series = [{
                type: 'radar',
                data: data
            }]
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
.radarChartBox
    width 100%
    height 100%
</style>

