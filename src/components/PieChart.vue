<template>
    <div class="pie-chart">
        <div class="title">{{ title }}</div>
        <div class="chart-wrap">
            <div ref="c1" :style="{width: width + 'px', height: height + 'px'}"></div>
            <div ref="c2" :style="{width: width + 'px', height: height + 'px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 200
        },
        height: {
            type: Number,
            default: 200
        },
        title: String,
        color: {
            type: Array,
            default: () => ['#56D764','#2CABE3', '#4C5667', '#FF7676', '#FFC36D', '#AB8CE4', '#02BEC9', '#DBDBDB']
        },
        pieTitle: String,
        data: {
            required: true
        }
    },
    data() {
        return {};
    },
    mounted() {
        this.init(this.$refs.c1);
        this.init(this.$refs.c2);
    },
    methods: {
        init(ele) {
            var myChart = this.$echarts.init(ele);
            var option = {
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                title: {
                    text: this.pieTitle.replace('\\n','\n'),
                    top: "center",
                    x: "center",
                    textStyle: {
                        color: '#000',
                        fontSize: 12,
                        lineHeight: 20
                    }
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["60%", "80%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: this.data,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ],
                color: this.color
            };
            myChart.setOption(option);
        }
    }
};
</script>

<style lang='scss' scoped>
.pie-chart {
    .title {
        position: relative;
        margin: 10px 0;
        padding-left: 20px;
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            width: 7px;
            height: 100%;
            background-color: $theme-color;
        }
    }
    .chart-wrap {
        display: flex;
    }
}
</style>
