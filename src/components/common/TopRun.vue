<template>
    <div>
        <div class="Box" :style="{height: height+'px', 'animation-duration': time+'s'}">
            <ul class="contBox">
                <li  v-for="(item, i) in data" :key="i" class="contBoxLi">
                    <div class="left">
                        <i :style="{'background-image': 'url('+ item.txSrc+')'}"></i>
                        <p>{{item.name}}</p>
                    </div>
                    <div class="right">
                        <p class="pingfeng">
                            <el-rate v-model="item.value" disabled show-score text-color="#ffffff" score-template="（{value}） 分">
                            </el-rate>
                        </p>
                        <div class="content">
                            <p>{{item.content}}</p>
                            <i v-for="(ele, e) in item.contentSrc" :key="e" :style="{'background-image': 'url('+ ele+')'}"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="contBox">
                <li  v-for="(item, i) in data" :key="i" class="contBoxLi">
                    <div class="left">
                        <i :style="{'background-image': 'url('+ item.txSrc+')'}"></i>
                        <p>{{item.name}}</p>
                    </div>
                    <div class="right">
                        <p class="pingfeng">
                            <el-rate v-model="item.value" disabled show-score text-color="#ffffff" score-template="（{value}） 分">
                            </el-rate>
                        </p>
                        <div class="content">
                            <p>{{item.content}}</p>
                            <i v-for="(ele, e) in item.contentSrc" :key="e" :style="{'background-image': 'url('+ ele+')'}"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ["data", "time"],
    data(){
        return{
            height: ''
        }
    },
    mounted(){
        this.getHeightFun()
    },
    methods:{
        getHeightFun(){
            let height = $(".Box .contBox").height()
            this.height = height*2
        }
    }
}
</script>
<style lang="stylus" scoped>
.Box
    animation runTop 10s linear 0s infinite
.contBox
    width 100%
    color #ffffff
    .contBoxLi
        width 100%
        display flex
        padding 20px
        .left
            width 20%
            display flex
            // flex-wrap wrap
            flex-direction column 
            justify-content flex-start
            align-items center
            i 
                float left
                width 60px
                height @width
                border-radius 50%
                background-color #216A9D
                background-position 50% 50%
                background-repeat no-repeat
                background-size 80%
            p
                width 100%
                text-align center
                margin-top 5px
        .right
            width 80%
            display flex
            flex-wrap wrap
            justify-content center
            .pingfeng
                width 100%
                background-color #14456E
            .content
                width 100%
            i 
                width 40%
                height 100px
                float left
                background-position 50% 50%
                background-repeat no-repeat
                background-size 80%
@keyframes runTop
    0%
        transform translate(0, 0)
    5%
        transform translate(0, 0)
    100%
        transform translate(0, -50%)
</style>
