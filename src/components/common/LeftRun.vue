<template>
    <div class="runBox"  :style="{ width: widthBox + 'px'}">
        <div class="AllBox" :style="{'animation-duration': time+'s', width: widthBox + 'px'}">
            <ul class="Box Box1">
                <li v-for="(item, i) in data" :key="i" class="itemLi">
                    <i :style="{'background-image': 'url('+item.icon+')'}"></i>
                    <p>{{item.titlt}}</p>
                    <ul>
                        <li v-for="(aitem, a) in item.list" :key="a">
                            <i :style="{'background-image': 'url('+aitem.icon+')'}"></i>
                            <span>{{aitem.name}}</span>
                            <span>{{aitem.value}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="Box Box2">
                <li v-for="(item, i) in data" :key="i" class="itemLi">
                    <i :style="{'background-image': 'url('+item.icon+')'}"></i>
                    <p>{{item.titlt}}</p>
                    <ul>
                        <li v-for="(aitem, a) in item.list" :key="a">
                            <i :style="{'background-image': 'url('+aitem.icon+')'}"></i>
                            <span>{{aitem.name}}</span>
                            <span>{{aitem.value}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['data', "time"],
    data(){
        return{
            widthBox: ''
        }
    },
    computed:{
        locale(){
			return this.$i18n.locale
		}
    },
    watch:{
        locale(){
			this.getWidthFun()
		}
    },
    mounted(){
        this.getWidthFun()
    },
    methods: {
        getWidthFun(){
            let liList = $('.runBox .AllBox .Box1 .itemLi')
            let widthBox = 0
            $.each(liList, function(i,val){      
                widthBox += ($(val).width() + 20)
            })
            this.widthBox = widthBox*2
        }   
    }
}
</script>
<style lang="stylus" scoped>
.runBox
    // width 100%
    display flex
    align-items center
    .AllBox
        display flex
        animation runLeft 10s linear 0s infinite
        .Box
            display flex
            flex-grow 0
            flex-shrink 0
            .itemLi
                padding 0 10px
                display flex
                line-height 40px
                flex-grow 0
                flex-shrink 0
                i 
                    float left
                    width 40px
                    height @width
                    background-position 50% 50%
                    background-repeat no-repeat
                ul
                    flex-grow 0
                    flex-shrink 0
                    width auto
                    display flex
                    li
                        flex-grow 0
                        flex-shrink 0
                        width auto
                        padding 0
@keyframes runLeft
    0%
        transform translate(0, 0)
    5%
        transform translate(0, 0)
    100%
        transform translate(-50%, 0)
</style>
