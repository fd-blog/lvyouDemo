<template>
    <div class="pageBox">
        <el-carousel trigger="click" height="100%">
            <el-carousel-item v-for="(item, i) in list" :key="i">
                <div class="carouselBox" v-for="(aitem, a) in item.list" :key="a">
                    <div class="contBox">       
			            <div class="charttitle"><span>|</span>{{$t("jqhd."+aitem.title)}}</div>
                        <div class="box">
                            <div class="nameBox">
                                <p class="NameBox">
                                    <span class="name">{{$t("jqhd.hdname")}}:</span>
                                    <span class="cont" :style="{color: aitem.color}">{{locale == "zh"? aitem.name1: aitem.name2}}</span>
                                </p>
                                <p class="NameBox">
                                    <span class="name">{{$t("jqhd.hdtype")}}:</span>
                                    <span class="cont" :style="{color: aitem.color}">{{locale == "zh"? aitem.type1: aitem.type2}}</span>
                                </p>
                                <div class="NameBox">
                                    <span class="name">{{$t("jqhd.hdcontent")}}:</span>
                                    <p class="cont1" :style="{color: aitem.color}">{{locale == "zh"? aitem.content1: aitem.content2}}</p>
                                </div>
                                <p class="NameBox">
                                    <span class="name">{{$t("jqhd.hdphoto")}}:</span>
                                    
                                </p>
                            </div>
                            <ul class="photoBox">
                                <li v-for="(ele, e) in aitem.photoList" :key="e">
                                    <span>{{ele.name}}</span>
                                    <i :style="{'background-image': 'url('+ ele.src+')'}"></i>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {
                    list: [
                        {
                            title: 'huodong1',
                            name1: "最忆是杭州",
                            name2: "Hangzhou, Living Poetry",
                            type1: "旅游推介会",
                            type2: "Tourism Promotion",
                            content1: "以“最忆是杭州”为主题，在宣传杭州“独特韵味，别样精彩”城市形象的同时，重点推广世界遗产经典、G20国际峰会的丰富遗产、新三名线（名城－杭州、名湖－西湖、千岛湖、名山－黄山）、农旅融合精品线路等，还有西部五个区县（市）的最美乡村旅游产品和优惠政策。",
                            content2: "Under the theme of “Hangzhou, Living Poetry”, the city image of “unique charm and special wonders” is promoted. In the campaign, Hangzhou Tourism Commission popularized the World Heritage , the rich heritage of G20 International Summit, the new three-line (Famous City - Hangzhou, Famous Lake-West Lake, Qiandao Lake, Famous Mountain-Huangshan) and the tourism routes mixed with agriculture, as well as the most beautiful rural tourism products and preferential policies in the five counties (cities) in Western China.",
                            photoList : [
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg1.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg2.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg3.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg4.png'
                                }
                            ],
                            color: '#007aff'
                        },
                        {
                            title: 'huodong2',
                            name1: "里斯本旅游推介会",
                            name2: "Lisbon Tourism Expo",
                            type1: "旅游推介会",
                            type2: "Tourism Promotion",
                            content1: "由杭州市人民政府副市长王宏率领的杭州旅游促销团一行，在伊比利亚半岛的明珠、葡萄牙首都里斯本举办了旅游推介会。向里斯本旅游界宣传推广中国的人间天堂，休闲之都杭州。有近五十名当地旅游界、媒体界和航空公司的代表参加了推介会。本次促销团由来自市旅委、萧山区人民政府、桐庐县人民政府、建德市人民政府以及杭州市有关国际旅行社和行业协会代表组成。",
                            content2: "The Hangzhou Tourism Promotion Group led by Wang Hong, deputy mayor of Hangzhou Municipal People's Government, held a tourism promotion conference in the Pearl of the Iberian Peninsula and Lisbon, the capital of Portugal, to promote the leisure city of Hangzhou to the tourism industry in Lisbon. Nearly 50 representatives from the local tourism industry, the media and airlines attended the conference. The promotion group consists of representatives from the Municipal Tourism Commission, People's Government of Xiaoshan District, the Government of Tonglu, the Government of Jiande, and relevant international travel agencies and industry associations in Hangzhou.",
                            photoList : [
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg5.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg6.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg7.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg8.png'
                                }
                            ],
                            color: '#00e8ff'
                        }
                    ]
                },
                {
                    list: [
                        {
                            title: 'huodong3',
                            name1: "江南绝色，吴越经典",
                            name2: "Jiangnan‘s stunning color and Wuyue’s Classic Heritage",
                            type1: "旅游推介会",
                            type2: "Tourism Promotion",
                            content1: "为了加强杭州都市圈合作，促进联盟城市旅游发展和资源共享，杭州市旅委联合嘉兴、绍兴旅委开展国内联合促销，让当地旅行商更好地了解杭州都市圈最新夏季旅游资讯，邀请当地市民赴杭州都市圈体验江南特色美景。以“江南绝色，吴越经典”为主题，推广宣传杭嘉湖绍经典美景、应季应时的最新旅游产品和优惠的旅游政策。",
                            content2: "In order to strengthen the cooperation of Hangzhou metropolitan area and promote the development of tourism and resource sharing in the alliance city, Hangzhou Tourism Commission and Jiaxing and Shaoxing Tourism Committee will carry out domestic joint promotion to let local travellers better understand the latest summer tourism information of Hangzhou metropolitan area and invite local citizens to experience the beauty of Jiangnan.  The promotion conference will promote the classic scenery of Hangjiahu and the latest tourism products and preferential travel policies in the theme of “Jiangnan's stunning color and Wuyue Classic”.",
                            photoList : [
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg9.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg10.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg11.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg12.png'
                                }
                            ],
                            color: '#007aff'
                        },
                        {
                            title: 'huodong4',
                            name1: "我在杭州学手艺",
                            name2: "I am learning in Hangzhou",
                            type1: "旅游推介会",
                            type2: "Tourism Promotion",
                            content1: "首收外籍“徒弟”，邀请16位全球外籍人士免费学习“杭州技艺”，体验杭州生活。共同制一柄雅扇，刻一枚身印，秀一方丝缕，烧一形窑瓷，寻一市生鲜，煮一碗杭味、识一目本草、感一城生活。",
                            content2: "The event selected 16 foreigners from all walks of life to become 'international apprentices' and freely learn from eight instructors. In the activity, you can experience the process of fan-making; you can understand the basic Chinese medicine theory; you can also follow the Hang Bang cuisine chef to fully understand the history of Hang Bang dishes and learn how to make  official cuisine of the Southern Song Dynasty.",
                            photoList : [
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg13.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg14.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg15.png'
                                },
                                {
                                    name: '',
                                    src: './static/img/houdong/jqhdImg16.png'
                                }
                            ],
                            color: '#00e8ff'
                        }
                    ]
                }
            ]
        }
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
    .el-carousel
        height 100%
    .carouselBox
        width 50%
        height 100%
        float left
        padding 10px
        .contBox
            position relative
            width 100%
            height 100%
            border 2px solid borderColor
            .box
                width 100%
                height 100%
                padding 70px 30px 30px 30px
                position relative
                .nameBox
                    width 100%
                    height 350px
                    position absolute
                    .NameBox
                        line-height 40px
                        .name
                            color #ffffff
                            font-size 20px
                            font-weight 700
                        .cont
                            font-size 18px
                            font-weight 700
                            padding-left 20px
                        .cont1
                            height 180px
                            line-height 30px
                .photoBox
                    width 100%
                    height 100%
                    padding-top 350px
                    li
                        width 50%
                        height 50%
                        float left
                        padding 10px
                        position relative
                        span
                            float left
                            width 100%
                            height 40px
                            line-height 40px
                            position absolute
                            color #ffffff
                            text-align center
                            font-size 24px
                            font-weight 700
                        i 
                            float left
                            width 100%
                            height 100%
                            padding-top 40px


</style>

