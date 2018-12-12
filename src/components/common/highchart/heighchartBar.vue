<template>
    <div class="highchartBox">
		<!-- <div class="charttitle"><span>|</span>{{dataList.title}}</div> -->
        <div class="box" :id="id"></div>
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
                    type: "column",
                    backgroundColor: 'rgba(0,0,0,0)',
                    inverted: true,
                    options3d: {
                        enabled: true,
                        alpha: 5,
                        beta: 2,
                        depth: 30,
                        viewDistance: 100,
                        frame: {
                            bottom: {
                                size: 3,
                                color: "transparent"
                            },
                            side: {
                                size: 1,
                                color: "rgba(255,255,255,0.5)"
                            },
                            back: {
                                size: 1,
                                color: "transparent"
                            }
                        }
                    }
                },
                title: {
                    text: null,
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        depth: 65,
                        dataLabels: {
                            x: 15,
                            enabled: true,
                            style:{
                                textOutline: 'none',
                            },
                            formatter: function () {
                                return this.y + " 亿元";
                            },
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [], 
                    gridLineColor: "transparent",
                    labels: {
                        style: {
                            color: "#fff",
                            fontSize: 12
                        }
                    }
                },
                yAxis: {
                    visible: false,
                    // tickPositions: [0, 25]
                },
                series: [{
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
            let unit
            if(this.locale == 'zh'){
                option.xAxis.categories = data.x1
                unit = this.dataList.unit1
            }else{
                option.xAxis.categories = data.x2
                unit = this.dataList.unit2
            }
            option.plotOptions = {
                column: {
                    depth: 65,
                    dataLabels: {
                        x: 15,
                        enabled: true,
                        style:{
                            textOutline: 'none',
                            color: "#ffffff"
                        },
                        formatter: function () {
                            return this.y + unit;
                        },
                    }
                }
            };
            let series = []
            data.y.forEach((element, e) => {
                let data = []
                if(type == 'seriesColor'){
                    element.value.forEach((item, i) => {
                        data.push({
                            y: item,
                            color: color[i]
                        })
                    });
                }else{
                    data = element.value
                }
                series.push({
                    data: data,
                    color: color[e]
                })
            });
            option.series = series
            console.log(option, 50)
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
