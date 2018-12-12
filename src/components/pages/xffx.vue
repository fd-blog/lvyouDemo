<template>
    <ul class="pageBox">
        <ul class="left">
            <li class="leftBox" v-for="(item, i) in countUpList" :key="i">
                <div class="box">
                    <div class="charttitle"><span>|</span>{{$t(item.name)}}</div>
                    <ul class="contBox">
                        <li v-for="(ele, e) in item.list" :key="e">
                            <p>{{locale=='zh' ? ele.name1 + '('+ ele.unit1 +')': ele.name2 + '('+ ele.unit2 +')'}}</p>
                            <div class="countUpBox">
                                <countUp :class="ele.calss" :style="{color: color[e]}" class="value" :value="ele.value" :aid="ele.id" :time="1.5" :xs="ele.xs" :timeG='5'></countUp>
                                <span>{{locale=='zh' ? ele.unit1 : ele.unit2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <li class="center">
            <div class="topBox">
                <div class="box">
                    <div class="charttitle"><span>|</span>{{$t('xffx.hyxfqsfx')}}</div>
                    <lineChart class="contBox" :data="option1" aid="hyxfquLine"></lineChart>
                </div>
            </div>
            <div class="bottomBox">
                <div class="box">
                    <div class="charttitle"><span>|</span>{{$t('xffx.hyxfzb')}}</div>
                    <pieChartAll class="contBox" :data="option2" aid="hyxfzpPie" roseType="area"></pieChartAll>
                </div>
            </div>
            <div class="bottomBox">
                <div class="box">
                    <div class="charttitle"><span>|</span>{{$t('xffx.lyrjxfqsfx')}}</div>
                    <biaxialChart class="contBox" :data="option3" aid="rjxffxBiaxal"></biaxialChart>
                </div>
            </div>
        </li>
        <li class="right">
            <div class="topBox">
                <div class="box">
                    <div class="charttitle"><span>|</span>{{$t('xffx.zxlyxfqsfx')}}</div>
                    <biaxialChart class="contBox" :data="option4" aid="zxlyxfBiaxal"></biaxialChart>
                </div>
            </div>
            <div class="bottomBox2">
                <div class="box">
                    <div class="charttitle"><span>|</span>{{$t('xffx.otampqdfx')}}</div>
                    <barChart class="contBox" :data="option5" aid="mpqdfxBar" unit="%"></barChart>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import countUp from '../common/countUp'
import lineChart from'../common/echart/lineChart'
import barChart from'../common/echart/barChart'
import pieChartAll from'../common/echart/pieChartAll'
import biaxialChart from'../common/echart/biaxialChart'

export default {
    data() {
        return{
            color: ["#188df4", '#51ecf2', '#13ce7f'],
            countUpList: [
                {
                    name: 'xffx.ylxfsj',
                    list:[
                        {
                            name1: '消费金额',
                            name2: 'Consumption amount',
                            value: 3475.00,
                            xs: 2,
                            id: 'xfje',
                            unit1: '万元',
                            unit2: 'thousand yuan ',
                            calss:"Led"
                        },
                        {
                            name1: '环比',
                            name2: 'Month on month',
                            value: 123.80,
                            xs: 2,
                            id: 'hbje',
                            unit1: '%',
                            unit2: '%',
                        },
                        {
                            name1: '同比',
                            name2: 'Year on year',
                            value: 16.7,
                            xs: 2,
                            id: 'tbje',
                            unit1: '%',
                            unit2: '%',
                        }
                    ]
                },
                {
                    name: 'xffx.ylxfcs',
                    list:[
                        {
                            name1: '消费人次',
                            name2: 'Consumption amount',
                            value: 1167323,
                            xs: 0,
                            id: 'xfrc',
                            unit1: '次',
                            unit2: 'times',
                            calss:"Led"
                        },
                        {
                            name1: '环比',
                            name2: 'Month on month',
                            value: 110.00,
                            xs: 2,
                            id: 'hbrc',
                            unit1: '%',
                            unit2: '%',
                        },
                        {
                            name1: '同比',
                            name2: 'Year on year',
                            value: 12.00,
                            xs: 2,
                            id: 'tbrc',
                            unit1: '%',
                            unit2: '%',
                        }
                    ]
                }
            ],
            option1:{
                color: ['#ff6f3d', '#0b7bff', '#d125f0', '#13ce7f', '#00e8ff', '#ffd425'],
                data: {
                    x1: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月"],
                    x2: ["Apr","May","June","July","Aug","Sept","Oct","Nov"," Dec", "Jan","Feb","Mar"],
                    legend1: ['吃', '住', '行', '游', '购', '娱'],
                    legend2: ['catering', 'accommodation', 'transportation', 'travel', 'shopping', 'amusement'],
                    y:[
                        {
                            data: [270, 390, 450, 446, 444, 430, 470, 500, 540, 580, 530, 500]
                        },
                        {
                            data: [290, 310, 350, 340, 330, 320, 330, 340, 350, 360, 450, 505]
                        },
                        {
                            data: [80, 120, 160, 150, 140, 130, 140, 150, 160, 240, 260, 300]
                        },
                        {
                            data: [580, 520, 450, 460, 470, 480, 470, 460, 450, 360, 340, 310]
                        },
                        {
                            data: [200, 160, 120, 140, 160, 240, 260, 258, 257, 260, 330, 410]
                        },
                        {
                            data: [100, 170, 250, 260, 270, 280, 290, 270, 280, 260, 280, 330]
                        }
                    ]
                }
            },
            option2:{
                color: ['#00e8ff', '#0b7bff', '#ffd425', '#13ce7f', '#ff6f3d', '#d125f0'],
                data:{
                    legend1: ['吃', '住', '行', '游', '购', '娱'],
                    legend2: ['catering', 'accommodation', 'transportation', 'travel', 'shopping', 'amusement'],
                    value: [
                        { value: 20},
                        { value: 15 },
                        { value: 7},
                        { value: 17},
                        { value: 35},
                        { value: 6},
                    ],
                }
            },
            option3:{
                color: ['#00e8ff','#ffd426'],
                data:{
                    x: ["2014", "2015", "2016", "2017"],
                    y:[
                        {
                            data: [1600, 1400, 1200, 1000]
                        },
                        {
                            data: [null, 4.96, 2.77,  1.96]
                        }
                    ]
                }
            },
            option4:{
                color: ['#00e8ff','#ffd426'],
                data:{
                    x: ["2013", "2014", "2015", "2016", "2017"],
                    y:[
                        {
                            data: [4.3, 6.1, 9.2, 15.5, 28.2],
                        },
                        {
                            data:[null,42.1,50.8,68.5,81.9]
                        }
                    ]
                }
            },
            option5: {
				color: ["#007aff", "#51eaf0", "#feca04", "#fd9404", "#4cd762"],
				data:{
					x1: ["飞猪旅行", "携程旅行", "驴妈妈旅行", "美团", "其他"],
					x2: ["Fliggy", "ctrip", "lvmama", "meituan", "others"],
					y:[
						{
							data: [38, 25, 15, 12, 10]
						}
					]
				}
			}
        }
    },
    components:{
        countUp,
        lineChart,
        barChart,
        biaxialChart,
        pieChartAll
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
    .box
        width 100%
        height 100%
        position relative
        color #ffffff
        border 2px solid borderColor
        .contBox
            width 100%
            height 100%
            padding-top 40px
    .left
        width 25%
        height 100%
        .leftBox
            width 100%
            height 50%
            padding 10px
            .contBox
                display flex
                flex-wrap wrap
                justify-content center
                li
                    width 100%
                    padding-left 20px
                    p
                        width 100%
                        font-size 20px
                        line-height 40px
                    .countUpBox
                        display flex
                        align-items center
                        .value
                            color red
                            font-size 60px
                        .Led
                            font-family 'LED'
                            font-size 70px
                        span 
                            padding-left 20px
                            font-size 26px
    .center
        width 45%
        height 100%
        display flex
        flex-wrap wrap
    .right
        width 30%
        height 100%
    .topBox
        width 100%
        height 60%
        padding 10px
    .bottomBox
        width 50%
        height 40%
        padding 10px
    .bottomBox2
        width 100%
        height 40%
        padding 10px
</style>
