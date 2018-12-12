<template>
    <div class="highchartBox" :id="id">
    </div>
</template>
<script>
import { copyAndClear } from '../../../assets/common/js/copyAndClear.js'
export default {
    props: ['data', 'aid', 'type'],
    data() {
        return {
			id: this.aid,
            dataList: copyAndClear(this.data),
            option: {
                chart: {
                    type: 'pie',
                    backgroundColor: 'rgba(0,0,0,0)',
                    options3d: {
                        enabled: true,
                        alpha: 55
                    }
                },
                credits: {
                    enabled: false
                },
                title: null,
                plotOptions: {
                    pie: {
                        size: 260,
                        innerSize: 150,
                        depth: 35
                    }
                },
                series: [{
                    name: '',
                    data: []
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
			this.highchartBarFun()
		}
	},
	mounted(){
		this.highchartBarFun()
	},
	methods:{
		highchartBarFun(){
			let _this = this
			let id = this.id
            let option = copyAndClear(this.option)
            let color = this.dataList.color
            let data = this.dataList.data
            let type = this.type
            let legend 
            let unit
            if(this.locale == 'zh'){
                legend = data.legend1 || []
                unit = this.dataList.unit1 || ''
            }else{
                legend = data.legend2 || []
                unit = this.dataList.unit2 || ''
            }
            let adata = []
            data.y.forEach((element, e) => {
                adata.push({
                    name: legend[e],
                    y: element,
                    color: color[e],
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: color[e],
                            fontSize: 16,
                            textOutline: 'none',
                        }
                    }
                })
            });
            option.series[0].data = adata
            Highcharts.chart(id, option);
		}
	}
}
</script>
<style lang="stylus" scoped>
.highchartBox
    width 100%
    height 100%
    position relative
    border 2px solid borderColor
    .box
        width 100%
        height 100%
        padding-top 40px
</style>
