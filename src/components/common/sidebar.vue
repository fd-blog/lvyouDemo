<template>
	<div>
		<div class="header" :class="{'BKC': !show}">
			<div class="box">
				<div class="buttom" @click="returnFun" v-show="!show">
					<i class="iconfont icon-54"></i>
					<span>返回</span>
				</div>
				<p class="title">{{ $t('navbar.title') }} <i class="shuiyin"></i></p>
				<div class="dqkl">
					<p class="name">{{ $t('navbar.dqkl') }}</p>
					<countUp :value="dqkl"  aid="dqkl" class="value" :time="1.5" :xs="0" :timeG="5"></countUp>
				</div>
				<ul class="klListBox Box">
					<li v-for="(item, i) in klList" :key="i">
						<p>{{ $t('navbar.'+ item.type) }}</p>
						<p>{{item.value}}</p>
					</li>
				</ul>
				<div class="runListBox">
					<LeftRun :data="locale == 'zh' ? runList1 : runList2" :time="60"></LeftRun>
				</div>
				<Weather class="weatherBox Box"></Weather>
			</div>
			<p @click="changeLocale" class="lanCh" :style="{'background-image': 'url('+ (locale == 'zh' ? en : cn) +')'}">
			</p>
		</div>
		<ul class="sidebar changed" v-show="show">
			<li v-for="(item, i) in list" :key="i" :class="{active: i == active }" @click="routerFun(item, i)">
				<i :style="{'background-image': 'url('+item.src+')'}"></i>
				<p class="name">{{ $t(item.name + '.name') }}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import countUp from './countUp'
import LeftRun from './LeftRun'
import Weather from './weather'
import { setInterval } from 'timers';
export default {
	data(){
		return{
			cn: './static/img/sidebar/cn.png',
			en: './static/img/sidebar/en.png',
			show: true,
			dqkl: 10000,
			timer: '',
			klList: [
				{
					type: 'zrkl',
					value: 18000
				},
				{
					type: 'qrkl',
					value: 135000
				},
				{
					type: 'ljyk',
					value: 5950000
				}
			],
			runList1: [
				{
					titlt: '微信公众号',
					icon: './static/img/sidebar/run/weixin.png',
					list: [
						{
							name: '关注人数',
							value: '5.3万',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: '阅读量',
							value: '191.4万',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: '阅读人数',
							value: '411.9万',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: '发布量',
							value: '13.7万',
							icon: './static/img/sidebar/run/xia.png'					 
						}
					]
				},
				{
					titlt: '官网',
					icon: './static/img/sidebar/run/guanwang.png',
					list: [
						{
							name: '访问量',
							value: '5039人次',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: '发布量',
							value: '3.53万',
							icon: './static/img/sidebar/run/shang.png'
						}
					]
				},
				{
					titlt: '微博',
					icon: './static/img/sidebar/run/weibo.png',
					list: [
						{
							name: '粉丝量',
							value: '51.52万',
							icon: './static/img/sidebar/run/shang.png',
						},
						{
							name: '阅读量',
							value: '25.31万',
							icon: './static/img/sidebar/run/xia.png',
						}
					]
				},
				{
					titlt: '电商平台',
					icon: './static/img/sidebar/run/dianshang.png',
					list: [
						{
							name: '订单数',
							value: '1.93万',
							icon: './static/img/sidebar/run/xia.png',
						},
						{
							name: '总金额',
							value: '146.9万元',
							icon: './static/img/sidebar/run/shang.png',
						}
					]
				}
			],
			runList2: [
				{
					titlt: 'Wecharts Public Account',
					icon: './static/img/sidebar/run/weixin.png',
					list: [
						{
							name: 'Followers',
							value: '5.3myriad',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: 'Reading',
							value: '191.4myriad',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: 'Readers',
							value: '411.9myriad',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: 'Publishing Volume',
							value: '13.7myriad',
							icon: './static/img/sidebar/run/xia.png'					 
						}
					]
				},
				{
					titlt: 'Official Website',
					icon: './static/img/sidebar/run/guanwang.png',
					list: [
						{
							name: 'Visits',
							value: '5039人myriad',
							icon: './static/img/sidebar/run/shang.png'
						},
						{
							name: 'Publishing Volume',
							value: '3.53myriad',
							icon: './static/img/sidebar/run/shang.png'
						}
					]
				},
				{
					titlt: 'Weibo',
					icon: './static/img/sidebar/run/weibo.png',
					list: [
						{
							name: 'Amount of fans',
							value: '51.52myriad',
							icon: './static/img/sidebar/run/shang.png',
						},
						{
							name: 'Reading',
							value: '25.31myriad',
							icon: './static/img/sidebar/run/xia.png',
						}
					]
				},
				{
					titlt: 'Electronic Business Platform',
					icon: './static/img/sidebar/run/dianshang.png',
					list: [
						{
							name: 'Order',
							value: '1.93myriad',
							icon: './static/img/sidebar/run/xia.png',
						},
						{
							name: 'Aggregate Amount',
							value: '146.9myriad yuan',
							icon: './static/img/sidebar/run/shang.png',
						}
					]
				}
			],
			list: [
				{
					name: 'cyjc',
					path: '/map/cyjc',
					src: './static/img/sidebar/navItem1.png'
				},
				{
					name: 'lyzy',
					path: '/map/lyzy',
					src: './static/img/sidebar/navItem2.png'
				},
				{
					name: 'ylhx',
					path: '/chart/ylhx',
					src: './static/img/sidebar/navItem3.png'
				},
				{
					name: 'ykly',
					path: '/chart/ykly',
					src: './static/img/sidebar/navItem4.png'
				},
				{
					name: 'xffx',
					path: '/chart/xffx',
					src: './static/img/sidebar/navItem5.png'
				},
				{
					name: 'ykmy',
					path: '/chart/ykmy',
					src: './static/img/sidebar/navItem6.png'
				},
				{
					name: 'jqhd',
					path: '/chart/jqhd',
					src: './static/img/sidebar/navItem7.png'
				},
				{
					name: 'yxpg',
					path: '/chart/yxpg',
					src: './static/img/sidebar/navItem8.png'
				},
				// {
				// 	name: 'ptjk',
				// 	path: '',
				// 	src: './static/img/sidebar/navItem9.png'
				// }
			],
			active: ''
		}
	},
	components:{
		countUp,
		LeftRun,
		Weather
	},
	computed:{
		locale(){
			return this.$i18n.locale
		}
	},
	watch:{
		$route(to,from){
			if(to.path.indexOf("chart") > -1){
				this.show = false
			}else{
				this.show = true
				if('/map/lyzy' == to.path){
					this.active = 1
				}else if('/map/cyjc' == to.path){
					this.active = 0
				}else{
					this.active = this.list.length
				}
			}
		}
	},
	methods:{
		routerFun(val, i){
			this.$router.push(val.path)
			this.active = i
		},
		returnFun(){
			this.$router.push('/map')
			this.active = this.list.length
		},
		changeLocale(){
			let locale = this.$i18n.locale
			locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
		}
	},
	mounted(){
		let _this = this
		this.active = this.list.length
		// this.timer = setInterval(function(){
		//	 _this.dqkl1 += Math.floor(Math.random()*100)
		// },5000)
	},
	beforeDestroy(){
		clearInterval(this.timer)
	}
}
</script>
<style lang="stylus" scoped>
.header
	width 100%
	height 70px
	position absolute 
	z-index 30
	line-height 70px
	display flex
	justify-content space-around
	background-color rgba(0, 12, 32, 0.7)
	color #ffffff
	overflow hidden
	padding-left 10px
	.box
		display flex
		width 100%
		justify-content space-between
		.buttom
			width 75px
			height 40px
			line-height 20px
			padding 10px
			margin 15px 10px
			cursor pointer
			flex-grow 0
			flex-shrink 0
			border 1px solid #14f7fd
			border-radius 5px
			color #14f7fd
		.title
			flex-shrink 0
			font-size 26px
			position relative
			.shuiyin
				position absolute
				top 4px
				right -62px
				float left
				width 62px
				height 22px
				background url('../../assets/img/common/shuiyin.png') 50% 50% /100% 100% 
		.dqkl
			display flex
			.name
				padding-left 20px
				padding-right 20px
				font-size 20px
				width 130px
			.value
				font-family 'LED'
				font-size  58px
				color #13f6fd
				width 180px
		.Box
			display flex
			margin 15px 0
		.klListBox
			li
				padding 0 10px
				p
					line-height 20px
					text-align center
		.runListBox
			width 560px
			overflow hidden
			display flex
			align-items center
	.lanCh
		flex-grow 0
		flex-shrink 0
		width 40px
		height @width value
		text-align center
		cursor pointer
		background-position 50% 50%
		background-repeat no-repeat
.BKC
	background-color rgba(63, 239, 251, 0.2)
.sidebar
	width 110px
	background-color rgba(0, 12, 32, 0.7)
	position absolute
	z-index 30
	top 53%
	left 10px
	transform translateY(-50%)
	color #ffffff
	border-radius 5px
	overflow hidden
	li
		display flex
		justify-content center
		flex-wrap wrap
		border-bottom 1px dotted #ffffff
		padding 10px 5px
		cursor pointer
		i 
			float left
			width 30px
			height @width
			background-position 50% 50%
			background-size 100% 100%
			background-repeat no-repeat
		p
			width 100%
			text-align center
		&:hover
			background-color rgba(0, 12, 32, 1)
		&.active
			background-color rgba(73, 179, 247, 0.7)
</style>


