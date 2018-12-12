<template>
	<div class="left">
		<div class="top">
			<p class="chartTitle">—— {{$t('lyzy.left.top.title')}} ——</p>
			<ul class="iconBoxGroup">
				<li class="iconBox" v-for="(item,i) in iconBoxList" :key='i' :style="{width: 200/iconBoxList.length + '%'}">
					<i :class="['iconfont','icon-'+ item.icon]" :style="{'font-size':item.fontSize + 'px'}"></i>
					<div class="name">{{locale == 'zh' ? item.name1: item.name2}}</div>
					<div class="num">{{item.number}}</div>
				</li>
			</ul>
		</div>
		<div class="center">
			<p class="chartTitle">—— {{$t('lyzy.left.center.title')}} ——</p>
			<div class="carouselBox">
				<el-carousel height="100%" indicator-position="none">
					<el-carousel-item v-for="(item,i) in carouselList" :key="i">
						<!-- <img :src="item.img" alt=""> -->
						<i :style="{'background-image': 'url('+item.img+')'}"></i>
						<div class="imgTitle">{{ locale == 'zh' ? item.title1 : item.title2}}</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="bottom">
			<p class="chartTitle">—— {{$t('lyzy.left.bottom.title')}} ——</p>
			<div class="BOX">
				<barChart aid="bottomBarChart" :data="potion"></barChart>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
import barChart from '../../common/echart/barChart.vue'
export default {
	data() {
		return {
			iconBoxList:[
				{
					icon:'lvhang',
					name1:'旅行社',
					name2:'Travel agency',
					number:'23',
					fontSize:'68',
				},
				{
					icon:'jiudian',
					name1:'酒店',
					name2:'Hotel',
					number:'128',
					fontSize:36,
				},
				{
					icon:'wenhua',
					name1:'星级农家乐',
					name2:'Star farm music',
					number:'36',
					fontSize:36,
				},
				{
					icon:'canyin1',
					name1:'餐馆',
					name2:'The restaurant',
					number:'750',
					fontSize:36,
				},
				{
					icon:'zirantansuo',
					name1:'乡村旅游',
					name2:'Rural tourism',
					number:'36',
					fontSize:36,
				},
				{
					icon:'gouwu',
					name1:'购物场所',
					name2:'Shopping places',
					number:'22',
					fontSize:36,
				},
				{
					icon:'jingdian',
					name1:'景区景点',
					name2:'Scenic spots',
					number:'28',
					fontSize:36,
				},
				{
					icon:'lishi',
					name1:'特产',
					name2:'Specialty',
					number:'9',
					fontSize:36,
				},
			],
			carouselList:[
				{
					img:'./static/img/lyzy/pic1.jpg',
					title1:'白坪-飞龙乡村旅游度假区',
					title2: 'Baiping - feilong rural tourism resort'
				},
				{
					img:'./static/img/lyzy/pic2.jpg',
					title1:'宝箴塞',
					title2:'Treasure pro plug',
				}
			],
			potion:{
				color: ["#007aff", "#51eaf0", "#feca04", "#fd9404", "#4cd762",'rgb(255, 126, 74)'],
				data:{
					x1: ["四川省乡村旅游创客示范基地", "四川省乡村旅游精品村寨", "四川省乡村旅游特色乡镇", "四川省乡村旅游示范村", "四川省乡村旅游示范乡镇","全国休闲农业与乡村旅游示范点"],
					x2: [
						"Sichuan rural tourism \n maker demonstration base", 
						"Sichuan rural tourism \n boutique villages", 
						"Rural tourism characteristic towns \n and villages in sichuan province", 
						"Sichuan rural tourism \n demonstration village",
						"Demonstration town of rural \n tourism in sichuan province",
						"National leisure agriculture and \n rural tourism demonstration points"
					 ],
					y:[
						{
							data: [1, 4, 2, 6, 2, 1]
						}
					]
				}
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
		
	},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>
<style lang="stylus" scoped>
.left
	width 466px
	height 800px
	position absolute
	left 145px
	top 52%
	transform translateY(-50%)
	z-index 30
	padding 30px
	background-image url(../../../assets/img/common/border1.png)
	background-position 50% 50%
	background-size 100% 100%
	.top
		width 100%
		height 40%
		position relative
		.iconBoxGroup
			width 100%
			height 100%
			position absolute
			top 0
			padding-top 40px
			padding-bottom 10px
			display flex
			flex-wrap wrap
			.iconBox
				height 50%
				text-align center
				display flex
				flex-wrap wrap
				justify-content center
				align-items center
				i
					float left
					border-radius 5px
					width 55px
					height @width
					flex-shrink 0
					line-height 65px
					border 1px solid #007aff
					background rgba(0, 121, 254, 0.2)
					// margin-left 5px
				.name
					width 100%
					height 30px
					flex-shrink 0
					display flex
					flex-wrap wrap
					justify-content center
					align-items center
				.num
					width 100%
					color #007aff
					display flex
					flex-wrap wrap
					justify-content center
					align-items center
	.center
		width 100%
		height 30%
		position relative
		.carouselBox
			width 100%
			height 100%
			padding-top 40px
			position absolute
			top 0
			.el-carousel
				height 100%
			i
				width 100%
				height 100%
				float left
				background-position 50% 50%
				background-size 100% 100%
			.imgTitle
				position absolute
				bottom 0
				left 0	
				width 100%
				height 30px
				line-height 30px
				font-size 16px
				text-align center
				background rgba(0,0,0,0.5)
	.bottom
		width 100%
		height 30%
		position relative
		padding-top 20px
		.BOX
			width 100%
			height 100%
			padding-top 40px
			position absolute
			top 0
</style>