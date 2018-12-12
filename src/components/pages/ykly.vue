<template>
	<div class="pageBox">
		<ul class="left">
			<li class="leftTop"><echartMap :data="option1" type="sichuan"  aid="province"></echartMap></li>
			<li class="leftTop"><echartMap :data="option2" type="china" aid="china"></echartMap></li>
			<li class="leftBottom"><echartMap :data="option3" type="world" aid="world"></echartMap></li>
		</ul>
		<div class="right">
			<div class="TopBox">
				<div class="box">
					<div class="charttitle"><span>|</span>{{$t('ykly.yklydtop5')}}</div>
					<ul class="contBox">
						<li :style="{width: 100/topList.length + '%'}" v-for="(item, i) in topList" :key="i">
							<i v-if="item.icon" class="icon" :class="item.icon" :style="{color: item.color}"></i>
							<i v-else :style="{'background-image': 'url('+item.src+')'}"><span>{{i+1}}</span></i>
							<span>{{locale == 'zh'? item.name1 : item.name2}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="chartBox"><heighchartBar :data="option4" aid="ykxfBar"></heighchartBar></div>
			<div class="chartBox"><heighchartBar :data="option5" aid="rjxfBar"></heighchartBar></div>
		</div>
	</div>
</template>
<script>
import echartMap from '../common/echart/echartMap'
import heighchartBar from '../common/highchart/heighchartBar'
export default {
	data(){
		return{
			option1: {
				title: 'ykly.snkyd',
				title1: 'ykly.rmkyd',
				list: [
					{
						name: 'nanchong',
						value: 17.1,
						point: [106.090483,30.815502]
					},
					{
						name: 'suining',
						value: 14.6,
						point: [105.5908,30.54482, 14.6]
					},
					{
						name: 'dazhou',
						value: 13.8,
						point: [107.467693,31.217519, 13.8]
					},
					{
						name: 'chengdu',
						value: 12.2,
						point: [104.067732,30.66303, 12.2]
					},
					{
						name: 'yibing',
						value: 11.9,
						point: [104.655727,28.75826, 11.9]
					},
					{
						name: 'mianyang',
						value: 9.4,
						point: [104.689584,31.474895, 9.4]
					},
					{
						name: 'guangyuan',
						value: 8.8,
						point: [105.807875,32.430647, 8.8]
					},
					{
						name: 'leshan',
						value: 6.1,
						point: [103.755293,29.557689, 6.1]
					},
					{
						name: 'yaan',
						value: 3.4,
						point: [103.027117,30.007535, 3.4]
					},
					{
						name: 'bazhong',
						value: 2.7,
						point: [106.757906,31.87755, 2.7]
					}
				],
				point: [106.30074,30.354747],
				name: 'wusheng'
			},
			option2: {
				title: 'ykly.gnkyfbt',
				title1: 'ykly.rmkyd',
				list: [
					{
						name: 'yunnan',
						value: 8.3,
						point: [102.729643,25.035849]
					},
					{
						name: 'guizhou',
						value: 6.8,
						point: [106.694926,26.602478]
					},
					{
						name: 'shaanxi',
						value: 5.6,
						point: [108.949466,34.300622]
					},
					{
						name: 'ganshu',
						value: 4.9,
						point: [103.822127,36.065933]
					},
					{
						name: 'chongqing',
						value: 3.8,
						point: [106.558437,29.571006]
					},
					{
						name: 'shanghai',
						value: 2.6,
						point: [121.472491,31.239387]
					},
					{
						name: 'hubei',
						value: 2.2,
						point: [114.281753,30.604829]
					},
					{
						name: 'heinan',
						value: 1.7,
						point: [113.670268,34.754632]
					},
					{
						name: 'shanxi',
						value: 1.4,
						point: [112.553853,37.877097]
					},
					{
						name: 'qinghai',
						value: 1.2,
						point: [101.781859,36.625768]
					}
				],
				point: [106.30074,30.354747],
				name: 'wusheng'
			},
			option3: {
				title: 'ykly.gjkyfbt',
				title1: 'ykly.rmkyd',
				list: [
					{
						name: 'taiwan',
						value: 13.4,
						point: [120.930633,23.708185]
					},
					{
						name: 'xiangguang',
						value: 12.8,
						point: [114.170956,22.283294]
					},
					{
						name: 'hanguo',
						value: 12.6,
						point: [126.875902,37.575363]
					},
					{
						name: 'meiguo',
						value: 10.5,
						point: [-95.952158,37.955105]
					},
					{
						name: 'riben',
						value: 6.1,
						point: [139.606831,35.857314]
					},
					{
						name: 'aodaliya',
						value:  3.4,
						point: [134.30841,-24.777214]
					},
					{
						name: 'jianada',
						value: 3.3,
						point: [-109.198211,56.763766]
					},
					{
						name: 'deiguo',
						value: 2.5,
						point: [9.869094,51.362117]
					}
				],
				point: [106.30074,30.354747],
				name: 'wusheng'
			},
			option4: {
				title: 'ykly.ykxftop10',
				color: ["#14f7fe"],
				unit1: "亿元",
				unit2: "hundred million yuan",
				data:{
					x1: ["北京", "上海", "浙江","辽宁", "广东","山西","内蒙",'陕西','河北','吉林'],
					x2: ["Beijing", "Shanghai", "Zhejiang","Liaoning", "Guangdong","Shanxi","Inner Mongolia",'Shaanxi','Hebei','Jilin'],
					y: [
						{
							value: [21.4,20,13.8,12.3,12.1,10.2,9.8,3.6,3.5,3.2]
						}
					]
				}
			},
			option5: {
				title: 'ykly.rjxftop10',
				color: ["#188cf3"],
				unit1: "元",
				unit2: "yuan",
				data:{
					x1: ["新加坡", "中国香港", "上海", "广东", "浙江", "山西","日本",'北京','鄂尔多斯','辽宁'],
					x2: ["Singapore", "Hong Kong, China", "Shanghai", "Guangdong", "Zhejiang", "Shanxi","Japanese",'Beijing','Erdos','Liaoning'],
					y: [
						{
							value: [5000,4800,4500,4000,3900,3600,3500,3000,2500,2200]
						}
					]
				}
			},
			topList:[
				{
					name1: '云南',
					name2: 'Yunnan',
					icon: 'iconfont icon-jiangpai-1',
					color: '#ffe034'
				},
				{
					name1: '贵州',
					name2: 'Guizhou',
					icon: 'iconfont icon-jiangpai-',
					color: '#d3e1ea'
				},
				{
					name1: '陕西',
					name2: 'Shaanxi',
					icon: 'iconfont icon-jiangpai-2',
					color: '#d69982'
				},
				{
					name1: '甘肃',
					name2: 'Gansu',
					src: './static/img/top5/yxlyd04.png'
				},
				{
					name1: '重庆',
					name2: 'Chongqing',
					src: './static/img/top5/yxlyd05.png'
				}
			]
		}
	},
	computed:{
		locale(){
			return this.$i18n.locale
		}
	},
	components: {
		echartMap,
		heighchartBar
	}
}
</script>

<style lang="stylus" scoped>
.pageBox
	padding 90px 20px 20px 20px
	.left
		width 70%
		height 100%
		float left
		.leftTop
			width 50%
			height 50%
			float left
			padding 10px
		.leftBottom
			width 100%
			height 50%
			float left
			padding 10px
	.right
		width 30%
		height 100%
		float left
		.TopBox
			width 100%
			height 24%
			padding 10px
			.box
				width 100%
				height 100%
				position relative
				border 2px solid borderColor
				.contBox
					width 100%
					height 100%
					padding-top 40px
					li
						float left
						height 100%
						i 
							float left
							width 100%
							height 110px
							font-size 90px
							line-height 120px
							text-align center
							background-position 50% 50%
							background-repeat no-repeat
							background-size 55%
							span	
								color #ffffff
								font-size 20px
								line-height 86px
						span 
							float left
							width 100%
							text-align center
							color #ffffff
		.chartBox
			width 100%
			height 38%
			padding 10px
</style>
