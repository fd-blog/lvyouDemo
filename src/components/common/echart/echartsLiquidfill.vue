<template>
    <div class="echartsLiquidfill" :id="id"></div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props:["data", 'aid', 'areatype', 'smooth'],
    data(){
        return{
            id: this.aid,
            dataList: copyAndClear(this.data),
            chart:'',
            option: {
                series: [{
                    type: 'liquidFill',
                    data: [],
                    radius: '90%',
                    outline: {
                        show: false
                    },
                    label: {
                        position:["50%","65%"],
                        textStyle: {
                            fontSize: 15,
                            fontFamily: 'Lobster Two'
                        }
                    }
                    
                }]
            }
        }
    },
    computed:{
		locale(){
			return this.$i18n.locale
		}
	},
	watch:{
		locale(){
			this.echartsLiquidfillFun()
		}
	},
	mounted(){
        this.echartsLiquidfillFun()
	},
	methods:{
		echartsLiquidfillFun(){
			let _this = this
            let id = this.id
			if (this.chart != '' && this.chart  != undefined) {
				this.chart .dispose()
				this.chart  = ''
			}
            let option = copyAndClear(this.option)
            let color = this.dataList.color
            let data = this.dataList.data
            data[0].itemStyle = {
                color: color
            }
            option.series[0].data = data
            if(document.getElementById(id)){
				this.chart = echarts .init(document.getElementById(id))
                this.chart.setOption(option)
                this.$store.commit('chartListFun', this.chart)
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
.echartsLiquidfill
    width 100%
    height 100%
</style>
