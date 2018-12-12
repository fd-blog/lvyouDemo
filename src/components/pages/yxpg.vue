<template>
    <ul class="pageBox">>
        <li class="contBox">
            <div class="box">
				<div class="charttitle"><span>|</span>{{$t('yxpg.ndmb')}}</div>
                <div class="chartBox">
                    <gaugeChart class="gaugeChart" :data="option1" aid="ndmbklGauge"></gaugeChart>
                    <gaugeChart class="gaugeChart" :data="option2" aid="ndmbsrGauge"></gaugeChart>
                </div>
            </div>
        </li>
        <li class="contBox">
            <div class="box">
				<div class="charttitle"><span>|</span>{{$t('yxpg.ROIfenbu')}}</div>
                <div class="chartBox">
                    <scatterMap :data="option3" type="china" aid="gsyxMapChart"></scatterMap>
                </div>
            </div>
        </li>
        <li class="contBox">
            <div class="box">
				<div class="charttitle"><span>|</span>{{$t('yxpg.ROIduibi')}}</div>
                <div class="chartBox">
                    <barChart :data="option4" type="solid" aid="yxfsROIbar"></barChart>
                </div>
            </div>
        </li>
        <li class="contBox">
            <div class="box">
				<div class="charttitle"><span>|</span>{{$t('yxpg.yxxgdb')}}</div>
                <div class="chartBox">
                    <radarChart :data="option5" aid="zyhdyxfxRadar"></radarChart>
                </div>
            </div>
        </li>
        <li class="contBox">
            <div class="box">
				<div class="charttitle"><span>|</span>{{$t('yxpg.yxROIqsfx')}}</div>
                <div class="chartBox">
                    <biaxialChart :data="option6" aid="yxqsbiaxial"></biaxialChart>
                </div>
            </div>
        </li>
        <li class="contBox">
            <div class="box">
				<div class="charttitle"><span>|</span>{{$t('yxpg.yxtryklglfx')}}</div>
                <div class="chartBox">
                    <biaxialChart :data="option7" aid="yxklbiaxial"></biaxialChart>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import gaugeChart from '../common/echart/gaugeChart.vue'
import scatterMap from '../common/echart/scatterMap.vue'
import barChart from '../common/echart/barChart.vue'
import biaxialChart from '../common/echart/biaxialChart.vue'
import radarChart from '../common/echart/radarChart.vue'
export default {
    data(){
        return {
            option1: {
                color: [[0.2, '#188cf3'], [0.8, '#51ecf1'], [1, '#ffd425'] ],
                title1:{
                    text: '年度目标客流量',
                    subtext: '1800万人次'
                },
                title2:{
                    text: 'Annual target passenger flow',
                    subtext: '1800 hundred million'
                },
                data: [{value: '20', name: ''}],
            },
            option2: {
                color: [[0.2, '#ff9501'], [0.8, '#4fda63'], [1, '#ff3b2f']],
                title1:{
                    text: '年度目标收入',
                    subtext: '300亿元'
                },
                title2:{
                    text: 'Annual target revenue',
                    subtext: '300 hundred million yuan'

                },
                data: [{value: '25', name: ''}],
            },
            option3: {
                color: {
                    normal: {
                        color: 'rgba(0, 122, 255, 0.5)',
                        borderColor: '#008dcb'
                    },
                    emphasis: {
                        color: '#2B91B7'
                    }
                },
                data:{
                    y1:{
                        data: [
                            {"name":"北京","value":[116.46,39.92,40]},
                            {"name":"广东","value":[113.23,23.16,32]},
                            {"name":"辽宁","value":[123.38,41.8,30]},
                            {"name":"浙江","value":[120.19,30.26,25]},
                            {"name":"上海","value":[121.48,31.22,24]},
                            {"name":"山西","value":[112.53,37.87,20]},
                            {"name":"天津","value":[117.2,39.13,12]},
                            {"name":"吉林","value":[125.35,43.88,18]},
                            {"name":"陕西","value":[108.95,34.27,15]},
                            {"name":"四川","value":[104.06,30.67,10]},
                            {"name":"湖南","value":[110.479191,29.117096,9]},
                            {"name":"广西","value":[110.28,25.29,16]},
                            {"name":"拉萨","value":[91.11,29.97,6]},
                            {"name":"齐齐哈尔","value":[123.97,47.33,15]},
                            {"name":"大庆","value":[125.03,46.58,10]},
                            {"name":"泰安","value":[117.13,36.18,13]},
                            {"name":"九江","value":[115.97,29.71,9]},
                            {"name":"贵阳","value":[106.71,26.57,18]},
                            {"name":"重庆","value":[106.54,29.59,12]},
                            {"name":"三亚","value":[109.511909,18.252847,11]},
                            {"name":"苏州","value":[120.62,31.32,15]},
                            {"name":"海口","value":[110.35,20.02,10]},
                            {"name":"昆明","value":[102.73,25.04,9]},
                            {"name":"连云港","value":[119.16,34.59,16]},
                            {"name":"厦门","value":[118.1,24.46,6]},
                            {"name":"鄂尔多斯","value":[109.781327,39.608266,15]},
                            {"name":"乌鲁木齐","value":[87.68,43.77,10]},
                            {"name":"克拉玛依","value":[84.77,45.59,9]},
                            {"name":"西宁","value":[101.74,36.56,16]},
                            {"name":"嘉峪关","value":[98.289152,39.77313,6]}
                        ] 
                    },
                    y2: {
                        data: [
                            {"name":"Beijing","value":[116.46,39.92,40]},
                            {"name":"guangdong","value":[113.23,23.16,32]},
                            {"name":"liaoning","value":[123.38,41.8,30]},
                            {"name":"zhejiang","value":[120.19,30.26,25]},
                            {"name":"Shanghai","value":[121.48,31.22,24]},
                            {"name":"shanxi","value":[112.53,37.87,20]},
                            {"name":"tianjin","value":[117.2,39.13,12]},
                            {"name":"jilin","value":[125.35,43.88,18]},
                            {"name":"shaanxi","value":[108.95,34.27,15]},
                            {"name":"sichuan","value":[104.06,30.67,10]},
                            {"name":"hunan","value":[110.479191,29.117096,9]},
                            {"name":"guangxi","value":[110.28,25.29,16]},
                            {"name":"Lhasa","value":[91.11,29.97,6]},
                            {"name":"qiqihar","value":[123.97,47.33,15]},
                            {"name":"daqing","value":[125.03,46.58,10]},
                            {"name":"taian","value":[117.13,36.18,13]},
                            {"name":"jiujiang","value":[115.97,29.71,9]},
                            {"name":"guiyang","value":[106.71,26.57,18]},
                            {"name":"chongqing","value":[106.54,29.59,12]},
                            {"name":"sanya","value":[109.511909,18.252847,11]},
                            {"name":"suzhou","value":[120.62,31.32,15]},
                            {"name":"haikou","value":[110.35,20.02,10]},
                            {"name":"kunming","value":[102.73,25.04,9]},
                            {"name":"lianyungang","value":[119.16,34.59,16]},
                            {"name":"xiamen","value":[118.1,24.46,6]},
                            {"name":"ordos","value":[109.781327,39.608266,15]},
                            {"name":"urumqi","value":[87.68,43.77,10]},
                            {"name":"karamay","value":[84.77,45.59,9]},
                            {"name":"xining","value":[101.74,36.56,16]},
                            {"name":"jiayuguan","value":[98.289152,39.77313,6]}
                        ]   
                    }
                }
            },
            option4: {
                color: ['#188cf3', '#51ecf1', '#ffd426', '#ff9501', '#4fda63', '#ff3b2f'],
                data:{
                    x1: ["新媒体", "主题活动", "客源地线下推广", "公关活动", "纸媒", '电视广播'],
                    x2: ["New Media", "Themetic activities", "BTL promotion in the \n Tourist origins", "Public relations activities", "Newspapers", 'TV&Radios'],
                    y: [
                        {
                            data: [40, 35, 30, 28, 20, 10]
                        }
                    ]
                }
            },
            option5: {
                color: ['#188cf3', '#51ecf1', '#ffd426', '#4fda63'],
                indicator1: [
                    { name: 'ROI', max: 10 },
                    { name: '关注度', max: 10 },
                    { name: '平均停留时长', max: 10 },
                    { name: '新客捕获率', max: 10 },
                    { name: '客流贡献', max: 10 },
                ],
                indicator2: [
                    { name: 'ROI', max: 10 },
                    { name: 'public attention', max: 10 },
                    { name: 'average Residence Time', max: 10 },
                    { name: 'new tourists acquisition', max: 10 },
                    { name: 'tourist flow contribution', max: 10 },
                ],
                data:[
                    {
                        name1: '国际旅游节',
                        name2: 'Expo International Tourism Festival',
                        value: [10, 8, 8, 6, 8],
                    },
                    {
                        name1: '全球旗袍日',
                        name2: 'Global Cheongsam Day',
					    value: [8, 8, 10, 8, 6],
                    },
                    {
                        name1: '音乐节',
                        name2: 'Music Festival',
					    value: [8, 8, 8, 10, 8],
                    },
                    {
                        name1: '旅游推广会',
                        name2: 'Tourism Promotion Conference',
					    value: [3, 5, 5, 2, 5],
                    }
                ]
            },
            option6:{
                color: ['#007aff','#ffd426'],
                data:{
                    x: ['2013', '2014', '2015', '2016', '2017'],
                    y:[
                        {
                            data: [2, 2.4, 3, 4, 6.8]
                        },
                        {
                            data: [null, 20, 25, 33, 70]
                        }
                    ]
                }
            },
            option7:{
                color: ['#00e8ff','#ffd426'],
                data:{
                    x: ['2013', '2014', '2015', '2016', '2017'],
                    y:[
                        {
                            data: [4.5, 5.6, 10.8, 12.5, 18.4]
                        },
                        {
                            data: [15.7, 24.4, 47.2, 70.4, 92.9]
                        }
                    ]
                }
            }
        }
    },
    components:{
        gaugeChart,
        scatterMap,
        barChart,
        biaxialChart,
        radarChart
    }
}
</script>
<style lang="stylus" scoped>
.pageBox
    padding 90px 20px 20px 20px
    .contBox
        width 33%
        height 50%
        float left
        padding 10px
        .box
            width 100%
            height 100%
            position relative
            border 2px solid borderColor
            .chartBox
                width 100%
                height 100%
                padding-top 40px
                display flex
                .gaugeChart
                    width 50%
                    height 100%
                    // background-color red
</style>

