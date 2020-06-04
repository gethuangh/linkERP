<template>
    <div class="bar-chart">
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
            default: 300
        },
        title: String
    },
    data() {
        return {};
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            var myChart = this.$echarts.init(this.$refs.ele);
            var option = {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ["product", "询价金额", "成交金额",],
                        ["2015 ",85.8, 50.3],
                        ["2016 ", 83.1, 73.4],
                        ["2017 ", 86.4, 65.2],
                        ["2018", 72.4, 53.9]
                    ]
                },
                xAxis: { type: "category" },
                yAxis: {},
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                series: [{ type: "bar" }, { type: "bar" }],
                color: ['#4C5667', '#56D764']
            };
            myChart.setOption(option);
        }
    }
};
</script>

<style lang='scss' scoped>
.bar-chart {
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
