<template>
    <div class="line-chart">
        <div class="title">{{ title }}</div>
        <div :style="{width: width + 'px',height: height + 'px'}" ref="ele"></div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 450
        },
        height: {
            type: Number,
            default: 250
        },
        title: String
    },
    data() {
        return {};
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            var myChart = this.$echarts.init(this.$refs.ele);
            var option = {
                title: {
                    text: '单位：本位币',
                    textStyle: {
                        fontSize: '12px'
                    },
                    top: 30,
                    left: 45
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: [
                        {
                            name: '销售额',
                            icon: 'rect'
                        },
                        {
                            name: '毛利润趋势',
                            icon: 'rect'
                        }
                    ]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "16Q1",
                        "16Q2",
                        "16Q3",
                        "16Q4",
                        "17Q1",
                        "17Q2",
                        "17Q3",
                        "17Q4",
                        "18Q1"
                    ]
                },
                yAxis: {
                    type: "value",
                    splitLine: {
                        show: false //隐藏分割线
                    }
                },
                series: [
                    {
                        name: "销售额",
                        type: "line",
                        stack: "总量",
                        data: [120, 132, 101, 134, 90, 230, 210, 150, 200]
                    },
                    {
                        name: "毛利润趋势",
                        type: "line",
                        stack: "总量",
                        data: [220, 182, 191, 234, 290, 330, 310, 100, 200]
                    }
                ],
                color: ['#ed1c24','#22b14c']
            };
            myChart.setOption(option)
        }
    }
};
</script>

<style lang='scss' scoped>
.line-chart {
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
}
</style>
