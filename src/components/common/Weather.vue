<template>
    <ul>
        <li>
            <i :style="{'background-image': 'url('+weatherData.dayPictureUrl+')'}"></i>
        </li>
        <li v-show="show">
            <p>{{weatherData.temperature}}℃</p>
            <p>{{weatherData.wind}}</p>
        </li>
        <li v-show="show">
            <p>{{weatherData.weather}}</p>
            <p>{{airQuality}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            airQuality: '良 52',
            weatherData: {}
        }
    },
    computed:{
        show(){
            let locale = this.$i18n.locale
            return locale === 'zh' ? true : false
        }
    },
    mounted(){
        let url = 'http://api.map.baidu.com/telematics/v3/weather?ak=kotFy7rXRjWAn6ThRoMty4pyxGug17fy&output=json&location=杭州'
        let _this = this
        $.ajax({
        　　type: "GET",
            url: url,
        　　dataType: "jsonp",
        　　jsonp: "callback",
        　　jsonpCallback: "jsonpCallback",
        　　success: function (data) {
                var aaa = data.results[0].weather_data[0];
                aaa.temperature = aaa.temperature.slice(-3, -1) + " ~ " + aaa.temperature.slice(0, 2) + "℃";
                _this.weatherData = aaa
        　　}
        });
    }
}
</script>
<style lang="stylus" scoped>
.Box
    display flex
    li
        padding 0 5px
        i 
            float left
            width 40px
            height @width
            // background-color red
            background-position 50% 50%
            background-repeat no-repeat
        p
            line-height 20px
</style>

