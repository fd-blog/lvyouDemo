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
				text: '',
				left: 'center',
				top: '10%',
				textStyle: {
					align: 'center',
					fontSize: 16,
					color: '#fff'
				},
				subtextStyle: {
					align: 'center',
					fontSize: 14,
					color: '#fff'
				}
				},
				series: [
				{
					name: '',
					type: 'gauge',
					data: [{value: '19', name: ''}],
					radius: '75%',
					center: ['50%', '60%'],
					min: 0,
					max: 100,
					splitNumber: 10,
					axisLine: {            // 坐标轴线
						lineStyle: {       // 属性lineStyle控制线条样式
							width: 20,
							color: [[0.33, '#2fc25b'], [0.38, '#1890ff'], [0.5, '#facc14'], [0.86, '#de8800'], [1, '#f0470c']]
						}
					},
					axisTick: {            // 坐标轴小标记
						length: 25,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					splitLine: {           // 分隔线
						length: 30,        // 属性length控制线长
						lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					axisLabel: {
						color: 'auto',
						show: true,
						fontSize: 14
					},
					detail: {
					formatter:'{value}%',
					fontSize: 26,
					offsetCenter: [0, '45%']
					},
					title: {
					fontSize: 26,
					color: '#00e3d0',
					offsetCenter: [0, '-35%']
					},
					pointer: {
						width: 3            // 指针大小
					}
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
			this.echartsGaugeFun()
		}
	},
	mounted(){
		this.echartsGaugeFun()
	},
	methods:{
		echartsGaugeFun(){
			let _this = this
            let id = this.id
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
			}
            let option = copyAndClear(this.option)
            let color = this.dataList.color
            let data = this.dataList.data
            if(this.locale == 'zh'){
                option.title.text = this.dataList.title1.text
                option.title.subtext = this.dataList.title1.subtext
            }else{
                option.title.text = this.dataList.title2.text
                option.title.subtext = this.dataList.title2.subtext
            }
            option.series[0].axisLine.lineStyle.color = color
            option.series[0].data = data
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

