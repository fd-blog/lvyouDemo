<template>
	<div class="right">
		<div class="top">
			<p class="chartTitle">—— {{$t('lyzy.right.top.title')}} ——</p>
			<div class="chartBox">
				<div class="box">
					<p class="chartTitles">{{$t('lyzy.right.top.title1')}}</p>
					<heighchart-bar2 class="barchart" :data="option1" aid="barchart1"></heighchart-bar2>
				</div>
				
				<div class="box">
					<p class="chartTitles">{{$t('lyzy.right.top.title2')}}</p>
					<heighchart-bar2 class="barchart" :data="option2" aid="barchart2"></heighchart-bar2>
				</div>
				<div class="box">
					<p class="chartTitles">{{$t('lyzy.right.top.title3')}}</p>
					<heighchart-bar2 class="barchart" :data="option3" aid="barchart3"></heighchart-bar2>
				</div>
				<div class="box">
					<p class="chartTitles">{{$t('lyzy.right.top.title4')}}</p>
					<heighchart-bar2 class="barchart" :data="option4" aid="barchart4"></heighchart-bar2>
				</div>
			</div>
				
		</div>
		<div class="bottom">
			<p class="chartTitle">—— {{$t('lyzy.right.bottom.title')}} ——</p>
			<heighchart-bar2 class="barchart5" :data="option5" aid="barchart5"></heighchart-bar2>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
import heighchartBar2 from '../../common/highchart/heighchartBar2'
export default {
	components:{
		heighchartBar2
	},
	data() {
		return {
			baroption:{
				chart: {
					type: "column",
					backgroundColor: 'rgba(0,0,0,0)',
					options3d: {
						enabled: true,
						alpha: 5,
						beta: 2,
						depth: 30,
						viewDistance: 100,
						frame: {
							side: {
								size: 3,
								color: "transparent"
							},
							bottom: {
								size: 1,
								color: "rgba(255,255,255,0.5)"
							},
							back: {
								size: 1,
								color: "transparent"
							}
						}
					}
				},
				title: null,
				// tooltip: {
				//	 pointFormat: '饭店数量: <b>{point.y} 家 </b>'
				// },
				plotOptions: {
					column: {
						depth: 65,
						showInLegend: false,
						dataLabels: {
							// x: 15,
							y: -7,
							style:{
								textOutline: 'none',
								color:'#fff'
							},
							enabled: true,
							formatter: function () {
								return this.y;
							}
						}
					}
				},
				yAxis: {
					visible: false,
				},
				xAxis: {
					gridLineColor: "transparent",
					labels: {
						style: {
							color: "#fff",
							fontSize: 12
						}
					},
					categories: ["星级饭店", "非星级住宿单位"],
				},
				credits: {
					enabled: false
				},
				series: [
					{
						name:'酒店数',
						data:[2,126],
						color: "#007aff",
					},
					{
						name:'客房数',
						data:[146,2131],
						color: "#51eaf0",
					},
					 {
						name:'床位数',
						data:[270,4104],
						color: "#feca04",
					}
				]
			},
			pieoption:{
				chart: {
				type: "pie",
				backgroundColor: "transparent",
				options3d: {
					enabled: true,
					alpha: 55
				}
				},
				title: null,
				tooltip: {
				headerFormat: '{series.name}<br>',
				pointFormat: '{point.name}: <b>{point.y}</b>'
				},
				plotOptions: {
				pie: {
					size: 150,
					depth: 28,
					showInLegend: false,
					dataLabels: {
					formatter: function (p) {
						// return this.key + " " + this.y;
						return this.y +'%';
					}
					}
				}
				},
				credits: {
				enabled: false
				},
				legend: {
				itemStyle: {
					color: "#fff",
					fontSize: "12px"
					// itemMarginTop: 20
				},
				itemMarginTop: 10
				},
				series: [{
				type: "pie",
				name: '第3季度星级饭店出租率',
				data: [
				{
					name: "星级饭店",
					y: 84.42,
					color: "#007aff",
					dataLabels: {
					enabled: true,
					style:{
						textOutline: 'none',
						color: "#007aff"
					}
					}
				},
				{
					name: "非星级住宿单位出租率",
					y: 84,
					color: "#25db53",
					dataLabels: {
					enabled: true,
					style:{
						textOutline: 'none',
						color: "#25db53"
					}
					}
				}
				]
				}]
			},
			option1:{
				color: ["#188cf3"],
				unit1: "",
				unit2: "",
				data:{
					x1: ["星级饭店", "非星级住宿单位"],
					x2: ["Hotel", "Non-star accommodation"],
					y: [
						{
							value: [2, 126]
						}
					]
				}
			},
			option2:{
				color: ["#188cf3"],
				unit1: "",
				unit2: "",
				data:{
					x1: ["星级饭店", "非星级住宿单位"],
					x2: ["Hotel", "Non-star accommodation"],
					y: [
						{
							value: [146, 2131]
						}
					]
				}
			},
			option3:{
				color: ["#188cf3"],
				unit1: "",
				unit2: "",
				data:{
					x1: ["星级饭店", "非星级住宿单位"],
					x2: ["Hotel", "Non-star accommodation"],
					y: [
						{
							value: [270, 4104]
						}
					]
				}
			},
			option4:{
				color: ["#188cf3"],
				unit1: "",
				unit2: "",
				data:{
					x1: ["星级饭店", "非星级住宿单位"],
					x2: ["Hotel", "Non-star accommodation"],
					y: [
						{
							value: [84.42, 84]
						}
					]
				}
			},
			option5:{
				color: ['#51ecf1'],
				unit1: "",
				unit2: "home",
				data:{
					x1: ["一星级", "二星级", "三星级", "四星级", "五星级"],
					x2: ["One-star", "Two-star", "Three-star", "Four-star", "Five-star"],
					y: [
						{
							value: [16, 4, 7, 7, 2]
						}
					]
				}
			},
			
		}
	},
	computed:{
		...mapState({

		}),
		locale(){
			return this.$i18n.locale
		}
	},
	watch:{
		locale(){

		}
	},
	mounted() {
	},
	methods:{
		
	}
}
</script>
<style lang="stylus" scoped>
.right
	width 466px
	height 800px
	position absolute
	top 52%
	right 15px
	transform translateY(-50%)
	z-index 30
	padding 30px
	background-image url(../../../assets/img/common/border2.png)
	background-position 50% 50%
	background-size 100% 100%
	.top
		width 100%
		height 70%
		display flex
		flex-direction column 
		.chartBox
			width 100%
			height 100%
			display flex
			flex-direction column 
			.box
				width 100%
				height 25%   
				display flex
				flex-direction column 
				.chartTitles
					height 30px
					width 100%
					text-align center
				.barchart
					width 100%
					height 100% 
	.bottom
		width 100%
		height 30%
		display flex
		flex-direction column 
		.barchart5
			height 100%
</style>