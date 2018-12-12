<template>
    <div class="pageBox">
        <Left></Left>
        <!-- <Right></Right> -->
		<ul class="legendBox">
			<li v-for="(item, i) in typeList" :key="i" :style="{width: 100/typeList.length +'%'}">
				<i class="iconfont icon-renyuan" :style="{'background-color': item.color}"></i>
				<span>{{locale == 'zh' ? item.name1 : item.name2}}</span>
			</li>
		</ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
// import { copyAndClear } from '../../assets/common/js/copyAndClear.js'
import Left from './cyjc/left'
import Right from './cyjc/right'
export default {
    components:{
        Left,
        Right
	},
	data(){
		return{
			typeList:[
				{
					name1:"舒适",
					name2:"Comfortable",
					type:0,
					color:'#5bd87b'
				},
				{
					name1:"适中",
					name2:"moderate",
					type:1,
					color:'#007aff'
				},
				{
					name1:"拥挤",
					name2:"Crowding",
					type:2,
					color:'#fe3a2a'
				}
			],
			data1: [],
			data2: []
		}
	},
    computed: {
        ...mapState({
            viewer: state => state.viewer
        }),
        locale(){
			return this.$i18n.locale
		}
    },
    watch:{
        viewer(){
            console.log(this.viewer, 55)
            this.clickFun()
        },
        locale(){
			this.$store.commit('clearMap', 3)
			let data = this.locale == 'zh' ? this.data1 : this.data2
			this.addPointFun(data)
		}
    },
    mounted(){
        console.log(this.viewer, 555)
        if(this.viewer !=''){
            this.clickFun()
        }
    },
    methods:{
        clickFun(){
			this.$axios.get('./static/json/cyjc.json').then(res=>{
				let data = res.data
				this.data1 = data
				this.addPointFun(data)
			})
			this.$axios.get('./static/json/cyjc_en.json').then(res=>{
				let data = res.data
				this.data2 = data
			})
		},
		//打点方法一   
		addPointFun(data) {
			var str = "";
			var xiangmubiaohao;
			var jnData;
			var jnTran;
			var imgurl;
			var text;
			data.forEach(obj => {
				xiangmubiaohao = obj.项目编号;
				str = obj.地图坐标;
				// text = obj.项目名称;
				if (str != "") {
					jnData = str.split(/[\n,]/g);
					jnTran = this.tranCoor(parseFloat(jnData[0]), parseFloat(jnData[1]));
					// debugger
					imgurl = obj.picC;
					console.log(obj,jnData,str,imgurl, 106)
	
					this.offsetByDistance(jnTran, xiangmubiaohao, '', imgurl);
				}
			});
		},
        tranCoor(x, y) { //坐标转换
			var m = coordtransform.bd09togcj02(x, y);
			var n = coordtransform.gcj02towgs84(m[0], m[1]);
			return n;
        },
        offsetByDistance(jnTran, xiangmubiaohao, text, imgurl, r = 255, g = 255, b = 255) {
			var image = new Image();
			let _this = this
			image.onload = _this.imageOnload(xiangmubiaohao,jnTran,image,text);
			image.src = imgurl;
        },
        imageOnload(xiangmubiaohao,jnTran,image,text){
			this.viewer.entities.add({
				id: xiangmubiaohao,
				position: Cesium.Cartesian3.fromDegrees(jnTran[0], jnTran[1], 0),
				billboard: {
					scale: 1,
					image: image,
					verticalOrigin: Cesium.VerticalOrigin.BOTTOM
				},
				label: {
					text: text,
					font: '16px sans-serif',
					backgroundColor: "rgba(0,0,0,0)",
					// backgroundColor:Cesium.Color.BLANK,
					// outlineWidth :3,
					// outlineColor :Cesium.Color.WHITE,
					showBackground: true,
					// font : '24px Helvetica',
					// fillColor : Cesium.Color.WHITE,
					outlineColor: Cesium.Color.WHITE,
					outlineWidth: 0.0,
					style: Cesium.LabelStyle.FILL,
					// style : Cesium.LabelStyle.FILL_AND_OUTLINE,
					fillColor: Cesium.Color.WHITE,
					horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
					pixelOffset: new Cesium.Cartesian2(0.0, -image.height + 17),
					scale: 1,
					sizeInMeters: true
				}	
			});
		},
    },
    beforeDestroy(){
        this.$store.commit('clearMap', 3)
    }
    
}
</script>
<style lang="stylus" scoped>
.legendBox
	position absolute
	left 35%
	bottom 10px
	width 30%
	height 50px
	border-radius 5px
	color #ffffff
	z-index 30
	padding 20px
	justify-content center
	align-items center
	background-color rgba(0,12,32,0.7)
	display flex
	li
		display flex
		align-items center
		font-size 20px
		cursor pointer
		justify-content center
		i
			float left
			width 40px
			height @width 
			background-position 50% 50%
			background-repeat no-repeat
			font-size 30px
			border-radius 50%
			display flex
			justify-content center
			align-items center
			margin-right 5px
</style>
