<template>
    <div class="scatterMap" :id="id">

    </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props:["data", 'type', 'aid'],
    data(){
        return{
            id: this.aid,
            mapType: this.type,
			dataList: copyAndClear(this.data),
			chart: '',
			option:{
				visualMap: {
				// min: 0,
				max: 18,
				calculable: true,
				left:'right',
				bottom:'bottom',
				color: ['#ff3b2f', '#ff9501', '#ffd425', '#51ecf1', '#4fda63'],
				textStyle: {
					color: '#fff'
				}
				},
				legend: {
				orient: 'vertical',
				top: 'bottom',
				left: 'right',
				selectedMode: 'single'
				},
				geo: {
				map: 'china',	
				label: {
					emphasis: {
					show: false
					}
				},
				roam: false,
				itemStyle: {
					normal: {
					areaColor: '#151f4f',
					borderColor: '#395aee'
					},
					emphasis: {
					areaColor: '#2a333d'
					}
				}
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
			this.echartsMapFun()
		}
	},
	mounted(){
		this.echartsMapFun()
	},
	methods:{
		echartsMapFun(){
			let _this = this
            let id = this.id
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
			}
            let option = copyAndClear(this.option)
            let color = this.dataList.color
            let data = this.dataList.data
            option.geo.map = this.mapType
			option.geo.itemStyle = color
			let list
            if(this.locale == 'zh'){
				list = data.y1.data
			}else{
				list = data.y2.data			
			}
			option.visualMap.max = list[0].value[2]
            option.series= [{
				// name: '各省市营销ROI分布',
				type: 'scatter',
				coordinateSystem: 'geo',
				data: list,
				symbolSize: function (val) {
					return val[2] / 1.5;
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						offset: [5, 0],
						formatter: function (param) {
							if (param.value[2] > 20) {
								return param.name
							} else {
								return ''
							}
						},
					},
					emphasis: {
						show: true
					}
				},
				itemStyle: {
					emphasis: {
						borderColor: '#fff',
						borderWidth: 1
					}
				}
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
.scatterMap
    width 100%
    height 100%
</style>
