<template>
	<div class="mapBox">
		<div class="map" id="cesiumContainer"></div>
		<router-view/>
	</div>
</template>
<script>
export default {
	data() {
		return {
			viewer:{},
			imageryLayers:{},
			scene:{},
			showObj:false,
			obj1:{},
			czml:[]
		}
	},
	mounted(){
		Cesium.BingMapsApi.defaultKey = 'ArucOjRQCPXY7qrklhKLCkWG2M8JVDdSM8-1YcfjjJDDFHpNqwCiiTXo76-Sgjy4';
    	let viewer = new Cesium.Viewer('cesiumContainer', //创建地图实例
			{
				animation: false,
				baseLayerPicker: false,
				homeButton: false,
				geocoder: false,
				timeline: false,
				sceneModePicker: false,
				navigationHelpButton: false,
				infoBox: false,
				scene3DOnly: true,
				selectionIndicator: false,
				imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
					url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"
				})
			});
		this.viewer = viewer
		this.viewer._cesiumWidget._creditContainer.style.display="none"; //隐藏版权信息
		this.$store.commit('viewerFun', viewer)
		this.firstEnter()
		let scene = this.viewer.scene;
		let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
		let _this = this
		handler.setInputAction(function (movement) {
			var pick = scene.pick(movement.position);
			if(pick){
				if (pick.id._id) {
					let pickId = pick.id._id
					_this.$store.commit('pickIdFun', pickId)
				}
			}
			_this.$store.commit('clickTypeFun', true)
		}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
	},
	watch: {
		$route() {
			// this.getPath();
			// console.log(window.location.hash,46)
			// 		// this.clearMap()
			
			// switch (window.location.hash) {
			// 	case '#/map/cyjc':
			// 		// this.clickFun()
			// 		break;
			// 	case '#/map/lyzy':
			// 		// this.clickFun2()

			// 		break;
				
			// 	default:
			// 		break;
			// }
		}
	},
	methods:{
		//实时客流量 地图打点
		clickFun(){
			this.$axios.get('./static/json/cyjc.json').then(res=>{
				let data = res.data
				this.addPointFun(data)
				// if(flag == 1){
					
				// }else if(flag == 2){
				// 	this.addPointFun2(data)
				// }
				
			})
		},
		clickFun2(){
			this.$axios.get('./static/json/lyzy.json').then(res=>{
				let data = res.data
				this.addPointFun2(data,
				[
					'./static/img/lyzy/mapIcon/jd1.png',
					'./static/img/lyzy/mapIcon/xjjd1.png',
					'./static/img/lyzy/mapIcon/cy1.png',
					'./static/img/lyzy/mapIcon/gw1.png',
					'./static/img/lyzy/mapIcon/yl1.png',
					'./static/img/lyzy/mapIcon/cs1.png',
					'./static/img/lyzy/mapIcon/jk1.png'
				])
				// if(flag == 1){
					
				// }else if(flag == 2){
				// 	this.addPointFun2(data)
				// }
				
			})
		},
		//清除所有图层
		clearMap() {
			var layer = this.imageryLayers.get(3);
			if (layer !== undefined) {
				this.imageryLayers.remove(layer);
			}
			this.firstEnter();
			this.viewer.entities.removeAll();
			this.viewer.dataSources.removeAll()
		},
		tranCoor(x, y) { //坐标转换
			var m = coordtransform.bd09togcj02(x, y);
			var n = coordtransform.gcj02towgs84(m[0], m[1]);
			return n;
		},
		//画区域
		getNewbodery() {
			this.viewer.dataSources.add(Cesium.GeoJsonDataSource.load(
				"./static/json/Guangan.json",
				{
					// stroke: Cesium.Color.fromBytes(63, 239, 251, 255),
					stroke: Cesium.Color.fromBytes(255, 0, 0, 255),
					fill: Cesium.Color.fromBytes(38, 255, 21, 50),
				}
			))
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
					if (obj.type == '0') {
						imgurl = './static/img/fp/tn1_' + obj.picC + ".png";
					} else if (obj.type == '1') {
						imgurl = './static/img/fp/tn2_' + obj.picC + ".png";
					} else {
						imgurl = './static/img/fp/tn3_' + obj.picC + ".png";
					}
					this.offsetByDistance(jnTran, xiangmubiaohao, '', imgurl);
				}
			});
		},
		//打点方法二
		addPointFun2(data, imgarr, x = 255, y = 0, z = 0, size = 50, speed = 4000){
			var str = "";
			var xiangmubiaohao;
			var jnData;
			var jnTran;
			var imgurl;
			var text;
			data.forEach(obj => {
				xiangmubiaohao = obj.项目编号;
				str = obj.地图坐标;
				text = "";
				if (str != "") {
					jnData = str.split(/[\n,]/g);
					jnTran = this.tranCoor(parseFloat(jnData[0]), parseFloat(jnData[1])); 
					imgurl = imgarr[obj.type];
					this.offsetByDistance(jnTran, xiangmubiaohao, text, imgurl);
				}
			});
		},
		//第一次进入
		firstEnter(){
			let jnTran2 = this.tranCoor(106.57958,29.091797)
			
			this.viewer.camera.flyTo({
				destination: Cesium.Cartesian3.fromDegrees(jnTran2[0], jnTran2[1], 100000),
				orientation: {
					heading: 0.0,
					// pitch: -Cesium.Math.PI_OVER_TWO,
					pitch: -0.6,
					roll: 0.0
				},
				duration: 3
			});
			this.getNewbodery();
			setTimeout(() => {
				var xxxx = this.viewer.dataSources;
				console.log(this.viewer.dataSources);
			}, 5000);
		},
		// pointCick(movement, list, num) {
		// 	var pick = this.scene.pick(movement.position);

		// 	if (list.length > 0) {
		// 		if (pick.id._id) {
		// 			var pickId = pick.id._id;
		// 		}
		// 		this.showObj = false;
		// 		list.forEach(obj=>{
		// 			var str = [];
		// 			str = obj.地图坐标;
		// 			var xiangmubiaohao = obj.项目编号;
		// 			if (pickId) {
		// 				var xmmc = obj.项目名称;
		// 				if (pickId == xiangmubiaohao) {
		// 					if (this.czml) {
		// 						viewer.dataSources.removeAll();
		// 					}
		// 					var jnData;
		// 					var jnTran;
		// 					$scope.colorTitle = obj.color;
		// 					jnData = str.split(/[\n,]/g);
		// 					jnTran = this.tranCoor(parseFloat(jnData[0]), parseFloat(jnData[1]));
		// 					this.czml = [{
		// 						"id": "document",
		// 						"name": "建筑节能",
		// 						"version": "1.0",
		// 						"clock": {
		// 							"interval": "2012-08-04T10:00:00Z/2012-08-04T10:00:08Z",
		// 							"currentTime": "2012-08-04T10:00:00Z",
		// 							"multiplier": 3
		// 						}
		// 					}, {
		// 						"id": "some-unique-id",
		// 						"name": xmmc,
		// 						"availability": "2012-08-04T10:00:00Z/2012-08-04T10:00:08Z",
		// 						"position": {
		// 							"epoch": "2012-08-04T10:00:00Z",
		// 							"cartographicDegrees": [
		// 								0, jnTran[0], jnTran[1], 0,
		// 								1, jnTran[0], jnTran[1], 0,
		// 								2, jnTran[0], jnTran[1], 0,
		// 								3, jnTran[0], jnTran[1], 0,
		// 								4, jnTran[0], jnTran[1], 0,
		// 								5, jnTran[0], jnTran[1], 0,
		// 								6, jnTran[0], jnTran[1], 0,
		// 								7, jnTran[0], jnTran[1], 0
		// 							]
		// 						},
		// 						"billboard": {
		// 							"image": "",
		// 							"scale": 1,
		// 							"verticalOrigin": "BOTTOM"
		// 						}
		// 					}, {
		// 						"id": "some-unique-id2",
		// 						"polyline": {
		// 							"show": true,
		// 							"solidColor": {
		// 								"rgba": [255, 37, 77, 153]
		// 							},
		// 							"width": 5
		// 						}
		// 					}];
		// 					this.viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));
		// 					this.viewer.camera.flyTo({
		// 						destination: Cesium.Cartesian3.fromDegrees(jnTran[0], jnTran[1] + num, 10000),
		// 						orientation: {
		// 							heading: 0.0,
		// 							// pitch: -Cesium.Math.PI_OVER_TWO,
		// 							pitch: -0.6,
		// 							roll: 0.0
		// 						}
		// 					});
		// 					this.obj1 = obj;

		// 					// $(".infotitle").css("color", $scope.colorTitle);
		// 					// $(".st0").css("fill", $scope.colorTitle);
		// 				}
		// 			}
		// 		})
		// 	} else {
		// 		this.showObj = true;
		// 		this.obj1 = list;
		// 	}
		// 	// setTimeout(function () {
		// 	// 	singleinfomation.css({
		// 	// 		"left": "1035px",
		// 	// 		"top": "335px"
		// 	// 	});
		// 	// 	singleinfomation.animate({
		// 	// 		"width": "263px"
		// 	// 	}, 500, 'linear', function () {
		// 	// 		$(".infocontent").fadeIn();
		// 	// 		$(".closeicon").fadeIn();
		// 	// 	});

		// 	// }, 2000); //延迟出现
		// },
		click111(){
			let handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
			handler.setInputAction(function (movement) {
				$scope.closeDialog();
				switch ($scope.getCurrentPageName) {
					case 'cyyxjc':
						break;
					case 'lyzy':
						$scope.djDdfunc(movement, $scope.sgycList, -0.15);
						break;
					default:
						break;
				}
			}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
			viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
		}
	}
}
</script>
<style lang="stylus" scoped>
.mapBox
	width 100%
	height 100%
	.map
		width 100%
		height 100%
		background-color #111aaa
		position relative
		z-index 2
</style>