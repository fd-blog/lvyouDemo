<template>
	<div id="app">
		<!-- <Header></Header> -->
		<Sidebar></Sidebar>
		<router-view/>
	</div>
</template>

<script>
import {mapState} from 'vuex';
// import Header from './components/common/header'
import Sidebar from './components/common/sidebar'
export default {
	name: 'App',
	components:{
		// Header,
		Sidebar
	},
	computed:{
		...mapState({
			chartList: state => state.chartList
		})
	},
	mounted(){
		let _this = this
		window.onresize = function (){
			_this.chartList.forEach(element => {
				element.resize()
			});
		}
	}
}
</script>

<style lang="stylus">
html,
body,
#app
	width 100%
	height 100%
	margin 0
	padding 0
	box-sizing border-box
	font-size 14px
	color #fff
	font-family 'Avenir', Helvetica, Arial, sans-serif
	position relative
</style>
