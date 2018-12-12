<template>
    <ul class="blockList">
        <li v-for="(item, i) in data" :key="i" :style="{width: 100/data.length +'%'}" :class="{scale: active == i && show}">
            <i :class="item.icon" :style="{'background-color': item.color2, 'border-color': item.color1}"></i>
            <p class="name">{{locale == 'zh'?item.name1 : item.name2}}</p>
            <p :style="{color: item.color1}"><span>{{item.value}}</span><span>{{locale == 'zh'?item.unit1 : item.unit2}}</span></p>
        </li>
    </ul>
</template>
<script>
export default {
    props: ["data", "time"],
    data(){
        return {
            active: 0,
            show: false
        }
    },
    computed:{
        locale(){
			return this.$i18n.locale
		}
    },
    mounted(){
        let time = this.time || 0
        let num = 0
        let len = this.data.length - 1
        let _this = this
        if(time > 0){
            this.show = true
            setInterval(function(){
                if(len == num){
                    num = 0
                }else{
                    num++
                }
                _this.active = num
            }, time*1000)
        }
    }
}
</script>
<style lang="stylus" scoped>
.blockList
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center 
    .scale
        transform scale(1.2)
    li
        height 100%
        color #ffffff
        display flex
        flex-wrap wrap
        justify-content center
        align-items flex-start 
        transition 2s
        transform scale(1)
        i  
            font-size 50px
            border 1px solid #ffffff
            padding 10px
            flex-shrink 0
            border-radius 5px
        p
            width 100%
            text-align center
            font-size 14px
            flex-shrink 0
        .name
            height 28px
            display flex
            justify-content center
            align-items center 
</style>

