<template>
    <div :id="aid"></div>
</template>
<script>
import {mapState} from 'vuex'
import { clearInterval } from 'timers';
import { log } from 'util';
export default {
    props:['value', 'aid', 'xs', 'time', 'timeG'],
    data(){
        return{
            countUp: '',
            timer: '',
            num: this.value
        }
    },
    watch:{
        num(){
            this.countUp.update(this.num)
        }
    },
    mounted(){
        let options = {
            useEasing: true,
            useGrouping: true,
            separator: '',
            decimal: '.',
        };
        let countUp = new CountUp(this.aid, (this.num - 100) || 0, this.num, this.xs, this.time, options)
        countUp.start();
        this.countUp = countUp
        let _this = this
        let value = 1
        for(let i=0; i< this.xs; i++){
            value *= 10   
        }
        let time = this.timeG
        if(time > 0){
            this.timer = setInterval(function(){
                _this.num += Math.floor(Math.random()*100)/value
            }, time*1000)
        }
        
    },
    beforeDestroy(){
        // clearInterval(this.timer)
    }
}
</script>
<style lang="stylus" scoped>

</style>

