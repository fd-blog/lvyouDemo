<template>
    <div class="pageBox">
        <Left></Left>
        <Right></Right>
        <ul class="legendBox">
            <li :class="{active: (i) == active}" v-for="(item, i) in locale == 'zh' ? list1 : list2" :key="i" :style="{width: 100/(list1.length) + '%'}" @click="activeFun(item.type, i)">
                <i :style="{'background-image': 'url('+imgList[i-1]+')'}"></i>
                <span class="name">{{item.name}}</span>
            </li>
        </ul>
        <div class="tankuang" v-show="show">
            <i class="close" @click="closeFun" :style="{'color': color}">X</i>
            <div class="lvkuang">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 287.5 37.2" style="enable-background:new 0 0 287.5 37.2;" xml:space="preserve">
                    <g :style="{'fill': color}">
                        <rect x="12.7" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="271.9" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="12.8" y="11.8" class="st0" width="262" height="2.9" />
                    </g>
                </svg>
            </div>
            <div class="contBox">
                <p class="TKtitle" :style="{'color': color}">{{obj.项目名称}}</p>
                <div class="dizhi">
                    <span class="name">{{locale == 'zh' ? '地址：' : 'address:'}} </span>
                    <!-- <span class="value">的疯狂的女的看来得快是看风景的发动机的角度看大口大口都看看大是大非不懂得</span> -->
                    <span>{{obj.地址}}</span>
                </div>
                <div class="img" :style="{'background-image': 'url('+obj.imgSrc+')'}"></div>
            </div>
            <div class="lvrote">
                <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 287.5 37.2" style="enable-background:new 0 0 287.5 37.2;" xml:space="preserve">
                    <g :style="{'fill': color}">
                        <rect x="12.7" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="271.9" y="11.6" class="st0" width="2.9" height="10.9" />
                        <rect x="12.8" y="11.8" class="st0" width="262" height="2.9" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
// import { copyAndClear } from '../../assets/common/js/copyAndClear.js'
import Left from './lyzy/left'
import Right from './lyzy/right'
export default {
    data(){
        return{
            show: false, 
            active: 0,
            data: [],
            data2: [],
            obj: '',
            color: '',
            list1: [
                {
                    name: '全部'
                },
				{
					name:'景点',
					type:0
				},
				{
					name:'饭店',
					type:1
				},
				{
					name:'餐馆',
					type:2
				},
				{
					name:'购物场所',
					type:3
				},
				{
					name:'星级农家乐',
					type:4
				},
				{
					name:'乡村旅游',
					type:5
				}
            ],
            list2: [
                {
                    name: 'all'
                },
				{
					name:'Scenic spot',
					type:0
				},
				{
					name:'Hotel',
					type:1
				},
				{
					name:'Restaurant',
					type:2
				},
				{
					name:'Shopping place',
					type:3
				},
				{
					name:'Star farm music',
					type:4
				},
				{
					name:'rural tourism',
					type:5
				}
            ],
            imgList: [
                './static/img/lyzy/mapIcon/jd1.png',
                './static/img/lyzy/mapIcon/xjjd1.png',
                './static/img/lyzy/mapIcon/cy1.png',
                './static/img/lyzy/mapIcon/gw1.png',
                './static/img/lyzy/mapIcon/yl1.png',
                './static/img/lyzy/mapIcon/cs1.png',
                './static/img/lyzy/mapIcon/jk1.png'
            ]
        }
    },
    components:{
        Left,
        Right
    },
    computed: {
        ...mapState({
            viewer: state => state.viewer,
            pickId: state => state.pickId,
            clickType: state => state.clickType,
        }),
        locale(){
			return this.$i18n.locale
		}
    },
    watch:{
        viewer(){
            console.log(this.viewer, 66)
            this.clickFun()
        },
        clickType(){
            if(this.clickType){
                let pickId = this.pickId
                this.show = true
                let data = this.locale == 'zh' ? this.data : this.data2
                data.forEach((item, i) =>{
                    if(pickId == item.项目编号){
                        console.log(item, 102)
                        this.color = item.color
                        this.obj=item
                        let jnData = item.地图坐标.split(/[\n,]/g);
                        this.firstEnter(jnData[0], jnData[1], 50000, -Cesium.Math.PI_OVER_TWO)

                    }
                })
                console.log(pickId, 97)
                this.$store.commit('clickTypeFun', false)
                this.$store.commit('pickIdFun', '')
            }   
        },
        locale(){
            this.activeFun()
            this.closeFun()
        }
        // pickId(){
        //     if(this.clickType){
        //         let pickId = this.pickId
        //         this.show = true
        //         console.log(pickId, 97)
        //         this.$store.commit('clickTypeFun', false)
        //         this.$store.commit('pickIdFun', '')
        //     } 
        // }
    },
    mounted(){
        console.log(this.viewer, 666)
        if(this.viewer !=''){
            this.clickFun()
        }
    },
    methods:{
        activeFun(val, i){
            let data = this.locale == 'zh' ? this.data : this.data2

            this.$store.commit('clearMap', 3)
            if(!val){
                this.active = 0
                this.addPointFun2(data, this.imgList)
            }else{
                this.active = i
                let adata = []
                data.forEach(item =>{
                    if(item.type == val){
                        adata.push(item)
                    }
                })
                this.addPointFun2(adata, this.imgList)
            }
        },
        clickFun(){
            let _this = this
            
			this.$axios.get('./static/json/lyzy.json').then(res=>{
                let data = res.data
                this.data = data
                // this.addPointFun2(data, this.imgList)
                this.activeFun()
            })
            this.$axios.get('./static/json/lyzy_en.json').then(res=>{
                let data = res.data
                this.data2 = data
                // this.addPointFun2(data, this.imgList)
                // this.activeFun()
			})
        },
        //打点方法二
		addPointFun2(data, imgarr, x = 255, y = 0, z = 0, size = 50, speed = 4000){
			data.forEach(obj => {
				let xiangmubiaohao = obj.项目编号;
				let str = obj.地图坐标;
				let text = "";
				if (str != "") {
					let jnData = str.split(/[\n,]/g);
					let jnTran = this.tranCoor(parseFloat(jnData[0]), parseFloat(jnData[1])); 
					let imgurl = imgarr[obj.type]
					this.offsetByDistance(jnTran, xiangmubiaohao, text, imgurl);
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
        closeFun(){
            this.firstEnter(106.57958,29.091797, 100000, -0.6)
            this.show = false
        },
        firstEnter(lng, lat, height, pitch){
			let jnTran2 = this.tranCoor(lng, lat)
			
			this.viewer.camera.flyTo({
				destination: Cesium.Cartesian3.fromDegrees(jnTran2[0], jnTran2[1], height),
				orientation: {
					heading: 0.0,
					// pitch: -Cesium.Math.PI_OVER_TWO,
					pitch: pitch,
					roll: 0.0
				},
				duration: 3
			});
			// this.getNewbodery();
			setTimeout(() => {
				var xxxx = this.viewer.dataSources;
				console.log(this.viewer.dataSources);
			}, 5000);
		}
    },
    beforeDestroy(){
        this.$store.commit('clearMap', 3)
    }
}
</script>
<style lang="stylus" scoped>
.legendBox
    position absolute
    left 20%
    bottom 10px
    width 60%
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
        i
            float left
            width 40px
            height @width 
            background-position 50% 50%
            background-repeat no-repeat
    .active
        color #ffd425
.tankuang
    width 300px
    height 350px
    z-index 30
    position absolute
    top 50%
    left 50%
    display flex
    justify-content center
    align-items cebter 
    flex-wrap wrap
    .close
        color #000
        font-size 30px
        cursor pointer
        position absolute
        right 0
        top 0
    .lvkuang
        width 100%
        height 5%
    .lvrote
        width 100%
        height 5%
        transform rotate(-180deg)
    .contBox
        width 80%
        height 80%
        background-color rgba(0,12,32,0.7)
        padding 0 10px
        display flex
        flex-direction column 

        .TKtitle
            width 100%
            height 40px
            font-size 18px
            text-align center
            flex-shrink 0
            display flex
            align-items center
        .dizhi
            flex-shrink 0
            display flex
            font-size 14px
            height 40px
            overflow hidden
            .name
                width 25%
                flex-shrink 0
            .value
                width 75%
                display flex
        .img
            width 100%
            height 100%
            background-position 50%
            background-size 100%
            background-repeat no-repeat
</style>