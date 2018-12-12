<template>
    <ul class="pageBox">
        <li class="smallBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.bili')}}</div>
                <ul class="box">
                    <li class="biliBox" v-for="(item, i) in blList" :key="i">
                        <i :class="item.icon" :style="{color: item.option.color}"></i>
                        <span>{{locale == 'zh' ? item.name1: item.name2}}</span>
                        <echartsLiquidfill  :data="item.option" :aid="item.id"></echartsLiquidfill>
                    </li>
                </ul>
            </div>
        </li>
        <li class="smallBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.lymd')}}</div>
                <blockList class="box" :data="lymdList"></blockList>
            </div>
        </li>
        <li class="smallBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.gtbl')}}</div>
                <div class="box">
                    <ul class="gtblBar" :style="{width: '15%'}">
                        <li v-for="(item, i) in option1.icon" :key="i" :style="{color: option1.color2[i]}">
                            <i :class="item"></i>
                        </li>
                    </ul>
                    <barChart1 :style="{width: '85%'}" :data="option1" aid="gtblBar"></barChart1>
                </div>
            </div>
        </li>
        <li class="largeBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.yknlfb')}}</div>
                <heighchartColumn class="box" :data="option2" aid="yknlfbChart" type="seriesColor"></heighchartColumn>
            </div>
        </li>
        <li class="largeBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.jqbh')}}</div>
                <scatterChart class="box" :data="option3" aid="jqphScatter"></scatterChart>
            </div>
        </li>
        <li class="largeBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.ykxqah')}}</div>
                <heighchartColumn class="box" :data="option4" aid="ykxqahChart"></heighchartColumn>
            </div>
        </li>
        <li class="largeBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.jtfs')}}</div>
                <div class="box jtfsBox">
                    <blockList :data="lymdList" :time="5"></blockList>
                </div>
            </div>
        </li>
        <li class="largeBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.lyappph')}}</div>
                <heighchartPie class="box" :data="option5" aid="lyappPie"></heighchartPie>
            </div>
        </li>
        <li class="largeBox">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ylhx.zyfb')}}</div>
                <pictorialBar class="box" :data="option6" aid="zyfbPBar"></pictorialBar>
            </div>
        </li>
    </ul>
</template>
<script>
import echartsLiquidfill from '../common/echart/echartsLiquidfill'
import blockList from '../common/blockList'
import barChart1 from '../common/echart/barChart1'
import scatterChart from '../common/echart/scatterChart'
import heighchartColumn from '../common/highchart/heighchartColumn'
import heighchartPie from '../common/highchart/heighchartPie'
import pictorialBar from '../common/echart/pictorialBar'
export default {
    data(){
        return {
            blList:[
                {
                    icon: 'iconfont icon-nan5',
                    id: "nanbiLiquidfill",
                    name1: '男性',
                    name2: 'Male',
                    option: {
                        color: "#007aff",
                        data:[{
                            value: 0.51
                        }]
                    }
                },
                {
                    icon: 'iconfont icon-nv5',
                    id: "nvbiLiquidfill",
                    name1: '女性',
                    name2: 'Female',
                    option: {
                        color: "#ff9501",
                        data:[{
                            value: 0.49
                        }]
                    }
                }
            ],
            lymdList: [
                {
                    icon: 'iconfont icon-menpiao_chengshiguanguang',
                    name1: '观光旅游',
                    name2: 'Sightseeing',
                    value: '58',
                    unit1: '%',
                    unit2: '%',
                    color1: 'rgba(1, 122, 252, 1)',
                    color2: 'rgba(1, 122, 252, 0.2)'
                },
                {
                    icon: 'iconfont icon-shangwu',
                    name1: '商务型',
                    name2: 'Business trip',
                    value: '16',
                    unit1: '%',
                    unit2: '%',
                    color1: 'rgba(251, 202, 1, 1)',
                    color2: 'rgba(251, 202, 1, 0.2)'
                },
                {
                    icon: 'iconfont icon-huiyikaihuitaolun',
                    name1: '会议型',
                    name2: 'Meetings',
                    value: '20',
                    unit1: '%',
                    unit2: '%',
                    color1: 'rgba(20, 247, 254, 1)',
                    color2: 'rgba(20, 247, 254, 0.2)'
                },
                {
                    icon: 'iconfont icon-7',
                    name1: '访亲探友',
                    name2: 'Visiting families and friends',
                    value: '6',
                    unit1: '%',
                    unit2: '%',
                    color1: 'rgba(247, 100, 48, 1)',
                    color2: 'rgba(247, 100, 48, 0.2)'
                }
            ],
            option1:{
                icon: ['iconfont icon-20150714033359378easyiconnet', 'iconfont icon-tubulvxing'],
                color1: '#323230',
                color2: ["#14f7fe", "#fdca01"],
				data:{
					x1: ["跟团", "自由行"],
					x2: ['', ''],
					y:[
                        // 底
                        {
							data: [100, 100]
                        },
                        // 表
						{
							data: [48, 52]
                        }
                    ],
                    position: [300, 3],
                    unit1: '%',
                    unit2: '%'
				}
            },
            option2:{
				color: ["#188cf3", '#51ecf1', '#ffd425', '#ffd425', '#ff9501', '#4fda63', '#ff3b2f',],
				unit1: "%",
				unit2: "%",
				data:{
					x1: ["60前", "60后", "70后", "80后", "90后", "00后"],
					x2: ["Pre-60", "Post-60", "Post-70", "Post-80", "Post-90", "Post-00"],
					y: [
						{
							value: [1, 4, 14, 45, 35, 1]
						}
					]
				}
            },
            option3:{
                baseOption: {
                    timeline:{
                        data1: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        data2: ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov"," Dec"]
                    },
                    tooltip: {
                        formatter1: function(data) {
                            var value = data.value;
                            return "景区" + '：' + value[2] + '<br>' +
                                "客流量" + '：' + value[1] + "人次" + '<br>' +
                                "停留时长" + '：' + value[0] + "小时" + '<br>'
                        },
                        formatter2: function(data) {
                            var value = data.value;
                            return "scenic" + '：' + value[2] + '<br>' +
                                "tourist amount" + '：' + value[1] + '<br>' +
                                "Residence Time" + '：' + value[0] + "hour" + '<br>'
                        }
                    },
                    x1:{
                        name: '停留时长（小时）',
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    },
                    x2:{
                        name: 'Residence Time',
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    },
                    y1:{
                        name: '客流量（人次）',
                    },
                    y2:{
                        name: 'tourist amount',
                    }
                },
                 options1: [
                    {"series":{"type":"scatter","data":[[5.1,4000,"白坪-飞龙新村示范区"],[4.2,3800,"宝箴塞旅游区"],[5.3,2000,"龙女湖旅游区"],[4.2,1500,"太极湖旅游区 "],[3.1,1000,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.3,4300,"白坪-飞龙新村示范区"],[5.3,3500,"宝箴塞旅游区"],[5.5,2500,"龙女湖旅游区"],[5.3,2500,"太极湖旅游区 "],[3.3,2400,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.35,4100,"白坪-飞龙新村示范区"],[6.1,4500,"宝箴塞旅游区"],[4.6,3000,"龙女湖旅游区"],[5.4,3000,"太极湖旅游区 "],[3.35,2600,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.8,4200,"白坪-飞龙新村示范区"],[5.2,3500,"宝箴塞旅游区"],[5.3,2300,"龙女湖旅游区"],[5.5,2200,"太极湖旅游区 "],[3.8,2000,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[6,4500,"白坪-飞龙新村示范区"],[6.5,4500,"宝箴塞旅游区"],[5.3,2900,"龙女湖旅游区"],[4.3,2300,"太极湖旅游区 "],[4,2500,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[6.1,4600,"白坪-飞龙新村示范区"],[6.2,3800,"宝箴塞旅游区"],[5.4,2700,"龙女湖旅游区"],[3.9,1800,"太极湖旅游区 "],[3.1,1600,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.4,4500,"白坪-飞龙新村示范区"],[5.5,3800,"宝箴塞旅游区"],[5.5,2500,"龙女湖旅游区"],[4.3,2900,"太极湖旅游区 "],[4,1500,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[7.2,5000,"白坪-飞龙新村示范区"],[6.2,3900,"宝箴塞旅游区"],[4.5,3500,"龙女湖旅游区"],[4.2,1900,"太极湖旅游区 "],[3.2,3000,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.5,4900,"白坪-飞龙新村示范区"],[4.2,4000,"宝箴塞旅游区"],[5.9,2200,"龙女湖旅游区"],[3.5,1500,"太极湖旅游区 "],[4.5,2000,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[4,4200,"白坪-飞龙新村示范区"],[5.6,3600,"宝箴塞旅游区"],[5.3,3000,"龙女湖旅游区"],[4.3,3000,"太极湖旅游区 "],[4,2200,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[4.2,4200,"白坪-飞龙新村示范区"],[5.2,3900,"宝箴塞旅游区"],[4.7,2100,"龙女湖旅游区"],[5.5,1600,"太极湖旅游区 "],[3.2,2000,"沿口古镇文化旅游区 "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}}
                ],
                options2: [
                    {"series":{"type":"scatter","data":[[5.1,4000,"Baiping - feilong new \n village demonstration area"],[4.2,3800,"Bao zhen plug the \n tourist area"],[5.3,2000,"Longnu lake tourist area"],[4.2,1500,"Tai chi lake tourist area "],[3.1,1000,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.3,4300,"Baiping - feilong new \n village demonstration area"],[5.3,3500,"Bao zhen plug the \n tourist area"],[5.5,2500,"Longnu lake tourist area"],[5.3,2500,"Tai chi lake tourist area "],[3.3,2400,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.35,4100,"Baiping - feilong new \n village demonstration area"],[6.1,4500,"Bao zhen plug the \n tourist area"],[4.6,3000,"Longnu lake tourist area"],[5.4,3000,"Tai chi lake tourist area "],[3.35,2600,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.8,4200,"Baiping - feilong new \n village demonstration area"],[5.2,3500,"Bao zhen plug the \n tourist area"],[5.3,2300,"Longnu lake tourist area"],[5.5,2200,"Tai chi lake tourist area "],[3.8,2000,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.9,4300,"Baiping - feilong new \n village demonstration area"],[5.4,4000,"Bao zhen plug the \n tourist area"],[4.8,3300,"Longnu lake tourist area"],[4.8,2500,"Tai chi lake tourist area "],[3.9,1500,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[6,4500,"Baiping - feilong new \n village demonstration area"],[6.5,4500,"Bao zhen plug the \n tourist area"],[5.3,2900,"Longnu lake tourist area"],[4.3,2300,"Tai chi lake tourist area "],[4,2500,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[6.1,4600,"Baiping - feilong new \n village demonstration area"],[6.2,3800,"Bao zhen plug the \n tourist area"],[5.4,2700,"Longnu lake tourist area"],[3.9,1800,"Tai chi lake tourist area "],[3.1,1600,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.4,4500,"Baiping - feilong new \n village demonstration area"],[5.5,3800,"Bao zhen plug the \n tourist area"],[5.5,2500,"Longnu lake tourist area"],[4.3,2900,"Tai chi lake tourist area "],[4,1500,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[7.2,5000,"Baiping - feilong new \n village demonstration area"],[6.2,3900,"Bao zhen plug the \n tourist area"],[4.5,3500,"Longnu lake tourist area"],[4.2,1900,"Tai chi lake tourist area "],[3.2,3000,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[5.5,4900,"Baiping - feilong new \n village demonstration area"],[4.2,4000,"Bao zhen plug the \n tourist area"],[5.9,2200,"Longnu lake tourist area"],[3.5,1500,"Tai chi lake tourist area "],[4.5,2000,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[4,4200,"Baiping - feilong new \n village demonstration area"],[5.6,3600,"Bao zhen plug the \n tourist area"],[5.3,3000,"Longnu lake tourist area"],[4.3,3000,"Tai chi lake tourist area "],[4,2200,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}},
                    {"series":{"type":"scatter","data":[[4.2,4200,"Baiping - feilong new \n village demonstration area"],[5.2,3900,"Bao zhen plug the \n tourist area"],[4.7,2100,"Longnu lake tourist area"],[5.5,1600,"Tai chi lake tourist area "],[3.2,2000,"Yankou ancient town \n cultural tourism area "]],"itemStyle":{"normal":{"shadowBlur":10,"shadowColor":"rgba(120, 36, 50, 0.5)","shadowOffsetY":5}}}}
                ]
            },
            option4:{
				color: ["#14f7fe"],
				unit1: "%",
				unit2: "%",
				data:{
					x1: ["影音", "生活实用", "新闻阅读", "图像", "效率办公", "旅游", "生活服务", "汽车", "教育", "丽人母婴"],
					x2: ["Video & music", "Daily life", "News", "Photographs", "Office", "Tourism", "Life service", "Automobile", "Education", "Fashion & Maternal-Child"],
					y: [
						{
							value: [87, 64, 64, 57, 55, 38, 32, 25, 23, 22]
						}
					]
				}
            },
            option5:{
                color: ['#f86531', '#fdca01', '#14f7fe', '#007aff', '#5ac8fb', '#23dc53'],
                data:{
                    legend1: ['携程', '阿里旅游', '百度地图', '同程旅游', '高德地图', '去哪儿'],
                    legend2: ['Ctrip', 'Ali tourism', 'Baidu map', 'City tourism', 'Scott map', 'Qunar'],
                    y: [15, 5, 30, 10, 16, 20]
                }
            },
            option6:{
                color: [],
                data:{
                    x1: ['军人', '农名', '学生', '其他', '企事业单位', '公务员', '工人', '文教科技人员', '服务销售人员'],
                    x2: ['军人', '农名', '学生', '其他', '企事业单位', '公务员', '工人', '文教科技人员', '服务销售人员'],
                    y:[
                        {
                            value: [4, 4, 4, 12, 20, 24, 40, 40, 40],
                            labelshow: [false, true, false, true, true, true, false, true, false],
                            imgList1: ['./static/img/tubiao/tubiao1.png', './static/img/tubiao/tubiao2.png', './static/img/tubiao/tubiao3.png', './static/img/tubiao/tubiao4.png', './static/img/tubiao/tubiao5.png', './static/img/tubiao/tubiao6.png', './static/img/tubiao/tubiao7.png', './static/img/tubiao/tubiao8.png', './static/img/tubiao/tubiao9.png'],
                            imgList2: ['./static/img/tubiao/tubiao11.png', './static/img/tubiao/tubiao22.png', './static/img/tubiao/tubiao33.png', './static/img/tubiao/tubiao44.png', './static/img/tubiao/tubiao55.png', './static/img/tubiao/tubiao66.png', './static/img/tubiao/tubiao77.png', './static/img/tubiao/tubiao88.png', './static/img/tubiao/tubiao99.png']
                        }
                    ],
                    unit1: '%',
                    unit2: '%'
                }
            }
        }
    },
    components:{
        echartsLiquidfill,
        blockList,
        barChart1,
        scatterChart,
        heighchartColumn,
        heighchartPie,
        pictorialBar
    },
    computed:{
        locale(){
			return this.$i18n.locale
		}
    }
}
</script>
<style lang="stylus" scoped>
.pageBox
    padding 90px 20px 20px 20px
    display flex
    flex-wrap wrap
    .smallBox
        width 33%
        height 26%
        padding 10px
    .largeBox
        width 33%
        height 37%
        padding 10px
    .contBox
        width 100%
        height 100%
        position relative
        border 2px solid borderColor
        .jtfsBox
            padding 90px 0 50px
        .box
            width 100%
            height 100%
            padding 50px 50px 10px
            display flex
            .gtblBar
                color #ffffff
                width 100%
                height 100%
                display flex
                align-items center 
                flex-wrap wrap
                li
                    width 100%
                    // height 50%
                    i 
                        font-size 40px
            .biliBox
                width 50%
                height 100%
                display flex
                justify-content center
                align-items center 
                i 
                    font-size 70px
                span 
                    font-size 20px
                    color #ffffff
                    flex-shrink 0
        .jtfsBox
            padding 90px 50px 50px
</style>
