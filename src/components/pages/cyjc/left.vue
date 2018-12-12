<template>
	<ul class="left">
		<li class="top">
			<p class="chartTitle">—— {{$t('cyjc.yklph')}} ——</p>
			<barChart aid="topBarChart" class="chartBox" :data="potion"></barChart>
		</li>
		<li class="center" id="">
			<p class="chartTitle">—— {{$t('cyjc.jrfskll')}} ——</p>
			<div id="klLineChart" class="chartBox"></div>
		</li>
	</ul>
</template>
<script>
import {mapState} from 'vuex'
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
import barChart from '../../common/echart/barChart.vue'
export default {
	data() {
		return {
			color: ["#007aff", "#51eaf0", "#feca04", "#fd9404", "#4cd762"],
			potion:{
				color: ["#007aff", "#51eaf0", "#feca04", "#fd9404", "#4cd762"],
				data:{
					x1: ["白坪-飞龙新村示范区", "宝箴塞旅游区", "龙女湖旅游区", "太极湖旅游区", "沿口古镇文化旅游区"],
					x2: ["Baiping - feilong new \n village demonstration area", "Bao zhen plug the \n tourist area", "Longnu lake tourist area", "Tai chi lake tourist area", "Yankou ancient town \n cultural tourism area"],
					y:[
						{
							data: [5000, 4000, 3500, 2800, 1500]
						}
					]
				}
			},
			klLineChart: '',
			klLineOption:{
				x: ["8",  "9", "10",  "11", "12", "13", "14", "15", "16", "17", "18", "19"],
				y: [2500, 3300, 4300, 4600, 4900, 5000, 5200, 5500, 5800, 6000, 5500, 5000]
			},
		}
	},
	components:{
		barChart
	},
	computed:{
		...mapState({
			barOption: state => state.barOption,
			lineOption: state => state.lineOption
		}),
		locale(){
			return this.$i18n.locale
		}
	},
	watch:{
		locale(){
			this.klLineChartFun(this.klLineOption, 'klLineChart')
		}
	},
	mounted() {
		this.klLineChartFun(this.klLineOption, 'klLineChart')
	},
	methods:{
		klLineChartFun(val, id){
			let option = copyAndClear(this.lineOption)
			if (this[id] != '' && this[id]  != undefined) {
				this[id] .dispose()
				this[id]  = ''
			}
			let color = this.color
			option.color = color
			option.xAxis.data = val.x
			if(this.locale == "zh"){
				option.xAxis.name = '时间\n (时)'
			}else{
				option.xAxis.name = 'TIME\n (HOUR)'
			}
			let hour = (new Date()).getHours() + ''
			let index = val.x.indexOf(hour)
			// console.log(index, 131)
			let value = val.y[index]
			let data = []
			val.y.forEach((item, i) =>{
				if(i <= index){
					data.push(item)
				}
			})
			option.yAxis.axisLabel.show = false
			option.series=[
				{
					data: data,
					type: "line",
					symbol: 'circle',
					symbolSize: '8',
					label: {
						normal: {
							show: true,
							position: "top",
							color: "#188DF4",
							formatter: function (params) {
								console.log(value, params.value, 244)
								return params.value == value ? params.value + "" : "";
							}
						}
					},
				}
			]

			if(document.getElementById(id)){
				this[id] = echarts .init(document.getElementById(id))
				this[id].setOption(option)
			}
		},
	}
}
</script>
<style lang="stylus" scoped>
.left
	width 466px
	height 700px
	position absolute
	left 145px
	top 50%
	transform translateY(-50%)
	z-index 30
	padding 30px
	background-image url(../../../assets/img/common/border1.png)
	background-position 50% 50%
	background-size 100% 100%
	.top
		width 100%
		height 320px
		.chartBox
			width 100%
			height 280px
	.center
		width 100%
		height 320px
		.chartBox
			width 100%
			height 280px
</style>