<template>
    <ul class="pageBox">
        <li class="topLeft box">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ykmy.tsfx')}}</div>
                <div class="contentBox">
                    <ul class="tsfxBoxTop">
                        <li v-for="(item, i) in tsfxList" :key="i">
                            <i :class="item.icon" :style="{color: item.color}"></i>
                            <p>{{$t('ykmy.'+item.name)}}</p>
                            <p class="value" :style="{color: item.color}">
                                <span>{{item.value}}</span>
                                <span>{{$t('ykmy.unit')}}</span>
                            </p>
                        </li>
                    </ul>
                    <div class="tsfxBoxBottom">
                        <span>{{$t('ykmy.tscll')}}</span>
                        <span class="value">: 100%</span>
                    </div>
                </div>
            </div>
        </li>
        <li class="topRight box">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ykmy.tslfx')}}</div>
                <lineChart class="contentBox" :data="option1" aid="yktslfxLine" areatype="area" smooth="true"></lineChart>
            </div>
        </li>
        <li class="bottomLeft box">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ykmy.lvhhb')}}</div>
                <ul class="contentBox">
                    <li class="tableBox" v-for="(item, i) in tableList" :key="i" :style="{'background-image': 'url('+ item.url +')', height: item.height}">
                        <div class="title">{{locale == 'zh' ? item.title1 : item.title2}}</div>
                        <ul class="header">
                            <li v-for="(ele, e) in locale == 'zh' ? item.headerList1 : item.headerList2" :key="e">{{ele}}</li>
                        </ul>
                        <ul class="body" :class="item.class">
                            <li v-for="(ele, e) in locale == 'zh' ? item.bodyList1 : item.bodyList2" :key="e">
                                <span v-for="(ala, a) in ele" :key="a">{{ala}}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
        <li class="bottomRight box">
            <div class="contBox">
			    <div class="charttitle"><span>|</span>{{$t('ykmy.wlpjjc')}}</div>
                <div class="contentBox">
                    <div class="wlpjLeft">
                        <div class="cont">
                            <div class="pjBox">
                                <p class="tNmae">{{$t('ykmy.plzs')}}</p>
                                <countUp :value="pfzs" aid="pfzs" class="value" :time="1.5" :xs="0" :timeG="0"></countUp>
                                <ul class="iconBox">
                                    <li v-for="(item, i) in pfList" :key="i" :style="{color: color[i]}">
                                        <i :class="item.icon"></i>
                                        <span>{{$t('ykmy.'+ item.name)}}</span>
                                    </li>
                                </ul>
                            </div>
                            <pieChart class="pjBox" :data="option2" aid="pjPie"></pieChart>
                        </div>
                        <div class="border"></div>
                        <ul class="cont">
                            <li class="aBox" v-for="(ele, e) in wlpjlist" :key="e" >
                                <i :class="ele.icon"></i>
                                <span class="name">{{locale == 'zh' ? ele.name1 : ele.name2}}</span>
                                <span class="value">{{ele.value}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="wlpjRight">
                        <div class="border"></div>
                        <div class="cont">
                            <TopRun :data="locale == 'zh' ? runlist1 : runlist2" :time="40"></TopRun>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import lineChart from '../common/echart/lineChart.vue'
import pieChart from '../common/echart/pieChart.vue'
import countUp from '../common/countUp'
import TopRun from '../common/TopRun'
export default {
    data(){
        return {
            color: ["#0077f9", "#13f2f9", "#fdd526"],
            tsfxList: [
                {
                    color: '#ffd425',
                    icon: 'iconfont icon-tousu',
                    name: 'lvtscs',
                    value: '7'
                },
                {
                    color: '#007bfd',                    
                    icon: 'iconfont icon-icon-test',
                    name: 'lvbycs',
                    value: '10'
                }
            ],
            option1:{
                color: ['#fb6533'],
                data:{
                    x1: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月"],
                    x2: ["Apr","May","June","July","Aug","Sept","Oct","Nov"," Dec", "Jan","Feb","Mar"],
                    y:[
                        {
                            data: [60, 42, 51, 60, 55, 69, 80, 49, 35, 45, 100, 50]
                        }
                    ]
                }
            },
            pfzs: 4130,
            pfList:[
                {
                    name: 'haoping',
                    icon: 'iconfont icon-good'
                },
                {
                    name: 'zhongping',
                    icon: 'iconfont icon-zhongping'
                },
                {
                    name: 'chaping',
                    icon: 'iconfont icon-chaping'
                }
            ],
            option2:{
                color: ["#0077f9", "#13f2f9", "#fdd526"],
                data:{
                    value1: [
                        {
                            name: '好评',
                            value: 3717
                        },
                        {
                            name: '中评',
                            value: 330
                        },
                        {
                            name: '差评',
                            value: 83
                        }
                    ],
                    value2: [
                        {
                            name: 'good',
                            value: 3717
                        },
                        {
                            name: 'medium',
                            value: 330
                        },
                        {
                            name: 'bad',
                            value: 83
                        }
                    ]
                }
            },
            tableList:[
                {
                    url: './static/img/ykmy/ykmydbd21.png',
                    class:"body1",
                    height: '57%',
                    title1: '旅游黑榜',
                    title2: 'Black List',
                    headerList1: ['投诉对象', '投诉原因'],
                    headerList2: ['Companies', 'Cause'],
                    bodyList1: [
                        ['***旅行社', '不合理低价游'],
                        ['***旅行社', '未签订旅游合同'],
                        ['***旅行社', '指定购物场所'],
                        ['***旅行社', '擅自增加自费费用'],
                        ['***旅行社', '非法经营旅行社业务']
                    ],
                    bodyList2: [
                        ['travel agency', 'Unreasonable low prices'],
                        ['travel agency', 'No travel contract signed'],
                        ['travel agency', 'Specify the shopping venue'],
                        ['travel agency', 'Increase the cost'],
                        ['travel agency', 'Illegal business']
                    ]
                },
                {
                    url: './static/img/ykmy/ykmydbd22.png',
                    height: '43%',
                    title1: '旅游红榜',
                    title2: 'Red List',
                    headerList1: ['表扬对象'],
                    headerList2: ['Companies'],
                    bodyList1: [
                        ['***旅行社', '***旅行社', '***旅行社'],
                        ['***旅行社', '***旅行社', '***旅行社'],
                        ['***旅行社', '***旅行社', '***旅行社'],
                        ['***旅行社', '***旅行社', '***旅行社']
                    ],
                    bodyList2: [
                        ['travel agency', 'travel agency', 'travel agency'],
                        ['travel agency', 'travel agency', 'travel agency'],
                        ['travel agency', 'travel agency', 'travel agency'],
                        ['travel agency', 'travel agency', 'travel agency']
                    ]
                }
            ],
            wlpjlist:[
                {
                    icon: 'iconfont icon-yilong',
                    name1: '艺龙',
                    name2: 'Elong',
                    value: '25'
                },
                {
                    icon: 'iconfont icon-xiecheng',
                    name1: '携程',
                    name2: 'Ctrip',
                    value: '36'
                },
                {
                    icon: 'iconfont icon-baidu',
                    name1: '百度',
                    name2: 'Baidu',
                    value: '1712'
                },
                {
                    icon: 'iconfont icon-lvmama',
                    name1: '驴妈妈',
                    name2: 'Lvmama',
                    value: '129'
                },
                {
                    icon: 'iconfont icon-mafengwo',
                    name1: '马蜂窝',
                    name2: 'Mafengwo',
                    value: '15'
                },
                {
                    icon: 'iconfont icon-danweixinxi',
                    name1: '同程网',
                    name2: 'LY.com',
                    value: '5'
                }
            ],
            runlist1: [
                {
                    name: '小木墩',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143059.png',
                    value: 5.0,
                    content: '好地方，注意天气。',
                    contentSrc: []
                },
                {
                    name: '王二小',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143105.png',
                    value: 4.0,
                    content: '不错的地方很美，放空心灵，以后还会再来。',
                    contentSrc: ['./static/img/ykmy/pingfen/photo/scroll1.jpg']
                },
                {
                    name: '小珏珏',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143109.png',
                    value: 5.0,
                    content: '自然风光，就算是旅游忘记游客也不是很多，非常悠闲。',
                    contentSrc: []
                },
                {
                    name: '小玉儿',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143124.png',
                    value: 4.0,
                    content: '地方不大，但是值得推荐到此一游。',
                    contentSrc: ['./static/img/ykmy/pingfen/photo/scroll1.jpg', './static/img/ykmy/pingfen/photo/scroll3.jpg']
                },
                {
                    name: '小美眉',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143139.png',
                    value: 3.0,
                    content: '感觉还不错，就是有点小',
                    contentSrc: []
                }
            ],
            runlist2: [
                {
                    name: 'Small wood block',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143059.png',
                    value: 5.0,
                    content: 'Good place, pay attention to the weather.',
                    contentSrc: []
                },
                {
                    name: 'Wansi',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143105.png',
                    value: 4.0,
                    content: 'Nice place is beautiful, empty your mind, and come back later.',
                    contentSrc: ['./static/img/ykmy/pingfen/photo/scroll1.jpg']
                },
                {
                    name: 'Small Jue Jue',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143109.png',
                    value: 5.0,
                    content: 'Natural scenery, even if the tourism forget the tourists are not many, very leisurely.',
                    contentSrc: []
                },
                {
                    name: 'Small on her',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143124.png',
                    value: 4.0,
                    content: "It's not a big place, but it's worth a visit.",
                    contentSrc: ['./static/img/ykmy/pingfen/photo/scroll1.jpg', './static/img/ykmy/pingfen/photo/scroll3.jpg']
                },
                {
                    name: 'Little girls',
                    txSrc: './static/img/ykmy/pingfen/icon/20180109143139.png',
                    value: 3.0,
                    content: "It feels good, but it's a little small.",
                    contentSrc: []
                }
            ]
        }
    },
    components:{
        lineChart,
        pieChart,
        countUp,
        TopRun
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
    .topLeft
        width 25%
        height 40%
    .topRight
        width 75%
        height 40%
    .bottomLeft
        width 25%
        height 60%
        .contentBox
            .tableBox
                width 100%
                height 50%
                background-position 50% 50%
                background-repeat no-repeat
                background-size 90% 90%
                padding 10px 40px
                .title
                    width 100%
                    height 18%
                    text-align center
                    color #ffffff
                    font-size 20px
                    display flex
                    justify-content center 
                    align-items center
                .header
                    width 100%
                    height 10%
                    color #ffffff
                    display flex
                    justify-content center
                    align-items center
                    li
                        width 50%
                        height 100%
                        display flex
                        justify-content center
                .body
                    width 100%
                    height 30px
                    color #ffffff
                    display flex
                    justify-content center
                    align-items center
                    flex-wrap wrap
                    li
                        width 100%
                        display flex
                        justify-content space-around
                        span 
                            float left
                            width 60%
                            text-align center
                            margin 5px
                            background-color rgba(255, 255, 255, 0.2)
                            white-space nowrap
                .body1
                    li
                        span
                            &:last-child
                                flex-shrink 0
    .bottomRight
        width 75%
        height 60%
        .contentBox
            display flex
            .wlpjLeft
                width 50%
                height 100%
                padding 10px
                .border
                    width 100%
                    height 10px
                    background-image url(../../assets/img/common/ykmydline-1.png)
                    background-position 50% 50%
                    background-repeat no-repeat
                    background-size 96% 100%
                    flex-shrink 0
                .cont
                    width 100%
                    height 50%
                    display flex
                    flex-wrap wrap
                    color #ffffff
                    .pjBox
                        width 50%
                        height 100%
                        // display flex
                        // flex-wrap wrap
                        text-align center
                        .tNmae
                            font-size 24px
                            color #ffffff
                            width 100%
                            heght 40px
                        .value
                            font-family 'LED'
                            font-size 60px
                            margin 20px 0 0
                        .iconBox
                            display flex
                            justify-content center 
                            font-size 20px
                            line-height 40px
                            li
                                padding 20px 10px
                                i 
                                    font-size 30px
                    .aBox
                        width 33%
                        height 50%
                        display flex
                        justify-content space-between 
                        align-items center
                        padding 20px
                        i 
                            float left
                            text-align center
                            width 70px
                            height 70px
                            font-size 50px
                            line-height 70px
                            border 1px solid #007aff
                            border-radius 5px
                            background rgba(0, 121, 254, 0.2)
                            flex-shrink 0
                        span    
                            float left
                            width 100px
                            padding-left 10px
                        .value
                            font-weight bold
                            font-size 20px
                            color #007aff
                            width 60px

            .wlpjRight
                width 50%
                height 100%
                display flex
                padding 10px
                .border
                    width 10px
                    height 100%
                    background-image url(../../assets/img/common/yxlydline.png)
                    background-position 50% 50%
                    background-repeat no-repeat
                    background-size 100% 100%
                    flex-shrink 0
                .cont
                    width 100%
                    height 100%
                    overflow hidden
    .box
        padding 10px
        .contBox
            width 100%
            height 100%
            position relative
            border 2px solid borderColor
            .contentBox
                width 100%
                height 100%
                padding-top 40px
                .tsfxBoxTop
                    width 100%
                    height 80%
                    li
                        float left
                        width 50%
                        height 100%
                        padding 40px 0 0 0
                        display flex
                        flex-wrap wrap
                        justify-content center
                        text-align center
                        i 
                            font-size 90px
                            float left
                            width 100%
                        p
                            color #ffffff
                            width 100%
                            font-size 20px
                            &.value
                                font-weight bold
                .tsfxBoxBottom
                    width 100%
                    height 20%
                    color #ffffff
                    display flex
                    justify-content center
                    text-align center
                    font-size 22px
                    font-weight bold
                    line-height 60px
                    color #13f6fd
                    .value
                        font-size 26px

</style>
