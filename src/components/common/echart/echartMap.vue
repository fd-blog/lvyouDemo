<template>
	<div class="echartMap">
		<div class="left">
			<div class="charttitle"><span>|</span>{{$t(dataList.title)}}</div>
			<div :id="aid" class="mapBox"></div>
		</div>
		<div class="right">
			<p class="title">{{$t(dataList.title1)}}</p>
			<div class="border"></div>
			<ul class="list">
				<li v-for="(item, i) in dataList.list" :key="i">
					<span>{{$t('ykly.' + item.name)}}</span>
					<span>{{item.value}}%</span>
				</li>
			</ul>
		</div>
		
	</div>
		
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
	props: ['data', 'type', 'aid'],
	data(){
		return {
			mapType: this.type,
			id: this.aid,
			dataList: copyAndClear(this.data),
			color: ['#ff3b2f', '#ff9501', '#ffd425', '#51ecf1', '#4fda63'],
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
			this.echartMapFun()
		}
	},
	mounted(){
		if(this.aid == "province"){
			this.$axios.get('./static/json/sichuan.json')
			.then(res =>{
				echarts.registerMap('sichuan', res.data);
				this.echartMapFun()

			})
		}else{
			this.echartMapFun()
		}
	},
	methods:{
		echartMapFun(data){
			let _this = this
			let id = this.id
			let option = copyAndClear(this.option)
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
			}
			option.geo.map = this.mapType
			option.visualMap.max = this.dataList.list[0].value
			let color = this.color
			let data1 = []
			let data2 = []
			let data3 = [
				{
					name: _this.$t('ykly.' + _this.dataList.name),
					value: this.dataList.point
				}
			]
			this.dataList.list.forEach((item, i) =>{
				data1.push({
					name: _this.$t('ykly.' + item.name),
					value: [item.point[0], item.point[1], item.value]
				})
				data2.push({
					value: item.value,
					"coords": [
						item.point,
						this.dataList.point,
					],
					"lineStyle": {
						"normal": {
							"width": 1
						}
					}
				})
			})
			option.series = [
				{
					data: data1,
					"type": "effectScatter",
					"coordinateSystem": "geo",
					"rippleEffect": {
						"brushType": "stroke"
					},
					"label": {
						"normal": {
							"show": true,
							"position": "right",
							"formatter": "{b}"
						}
					},
					"itemStyle": {
						"normal": {}
					}
				},
				{
					data: data3,
					"type": "effectScatter",
					"coordinateSystem": "geo",
					"rippleEffect": {
						"brushType": "stroke"
					},
					"label": {
						"normal": {
							"show": true,
							"position": "right",
							"formatter": "{b}"
						}
					},
					"itemStyle": {
						"normal": {}
					}
				},
				{
					"type": "lines",
					data: data2,
					"symbolSize": 6,
					"effect": {
						"show": true,
						"period": 3,
						"trailLength": 0,
						"symbolSize": 2
					},
					"lineStyle": {
						"normal": {
							// "color": "#1af9ff",
							"width": 1,
							"opacity": 0.6,
							"curveness": 0.2
						}
					}
				},
			]
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
.echartMap
	width 100%
	height 100%
	display flex
	border 2px solid borderColor
	.left
		width 100%
		height 100%
		position relative
		.mapBox
			width 100%
			height 100%
			padding-top 40px
	.right
		width 200px
		height 100%
		flex-grow 0
		flex-shrink 0
		position relative
		padding-top 40px
		.title
			width 100%
			height 40px
			text-align center
			line-height 50px
			font-weight 100
			font-size 18px
			color #ffffff
			position absolute
			top 0
			background-color borderColor
		.border
			width 10px
			height 100%
			margin-left 10px
			background-image url(../../../assets/img/common/yxlydline.png)
			background-repeat no-repeat
			background-size 100% 95%
			background-position 50% 50%
			float left
		.list
			float left
			width 180px
			height 100%
			color #ffffff
			padding 0 20px
			display flex
			flex-wrap wrap 
			align-items center 
			li
				width 100%
				display flex
				justify-content space-between
</style>
