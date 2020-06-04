<template>
    <div class="supplier-detail">
        <div class="supplier-info">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="供应商资料" name="data">
                    <div class="info-body">
                        <el-image :src="img" fit="cover" class="photo"></el-image>
                        <div class="detail">
                            <div class="detail-column">
                                <div class="item">
                                    <span class="key">供应商名称</span>
                                    <span>安富利电子</span>
                                </div>
                                <div class="item">
                                    <span class="key">英文名</span>
                                    <span>AVNET ELECTRONICS</span>
                                </div>
                                <div class="item">
                                    <span class="key">简称</span>
                                    <span>AVNET</span>
                                </div>
                                <div class="item">
                                    <span class="key">所属国家</span>
                                    <span>美国</span>
                                </div>
                                <div class="item">
                                    <span class="key">供应商类别</span>
                                    <span>授权代理商</span>
                                </div>
                                <div class="item">
                                    <span class="key">网址</span>
                                    <a href="#" style="color: #0000EE">www.avnet.com</a>
                                </div>
                            </div>
                            <div class="detail-column">
                                <div class="item">
                                    <span class="key">电话</span>
                                    <span>13800138000</span>
                                </div>
                                <div class="item">
                                    <span class="key">传真</span>
                                    <span>99999</span>
                                </div>
                                <div class="item">
                                    <span class="key">付款方式</span>
                                    <span>T/T in ADV.</span>
                                </div>
                                <div class="item">
                                    <span class="key">交易币种</span>
                                    <span>USD</span>
                                </div>
                                <div class="item">
                                    <span class="key">交易方式</span>
                                    <span>FOB香港</span>
                                </div>
                            </div>
                            <div class="detail-column">
                                <div class="item">
                                    <span class="key">应付款</span>
                                    <span>$1368.68</span>
                                </div>
                                <div class="item">
                                    <span class="key">交易总额</span>
                                    <span>$253320.15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <contact-info></contact-info>
                    <div class="main-title interval">
                        <div class="title">已成交品牌</div>
                        <div class="brand-wrap">
                            <div class="brand-item" v-for="item in 7" :key="item">
                                <el-image :src="img" fit="cover" class="brand-img"></el-image>
                                <span>金额 $13555.12</span>
                            </div>
                        </div>
                    </div>
                    <lately-deal class="interval"></lately-deal>
                    <special-model class="interval"></special-model>
                    <deal-statistics class="interval"></deal-statistics>
                </el-tab-pane>
                <el-tab-pane label="文档信息" name="info"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="agent-brand">
            <h2>代理品牌：</h2>
            <div class="brand-list">
                <router-link to v-for="item in 16" :key="item">
                    <el-image :src="img" fit="cover" class="brand-item"></el-image>
                </router-link>
            </div>
            <pie-chart title="询价 / 下单品牌比例" pieTitle="询价比例-品牌\n(按金额)" :data="pieData" class="interval"></pie-chart>
        </div>
    </div>
</template>

<script>
import ContactInfo from "./common/ContactInfo";
import LatelyDeal from "./common/LatelyDeal";
import SpecialModel from "./common/SpecialModel";
import DealStatistics from "./common/DealStatistics";
import PieChart from "@/components/PieChart.vue"
export default {
    data() {
        return {
            img:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            activeName: "data",
            pieData: [
                { value: 335, name: "块1" },
                { value: 50, name: "块2" },
                { value: 25, name: "块3" },
                { value: 20, name: "块4" },
                { value: 20, name: "块5" },
                { value: 20, name: "块6" },
                { value: 20, name: "块7" },
                { value: 100, name: "块8" }
            ],
        };
    },
    components: {
        ContactInfo,
        LatelyDeal,
        SpecialModel,
        DealStatistics,
        PieChart
    },
    mounted() {
        this.initLineChart();
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        initLineChart() {
            var myChart = this.$echarts.init(this.$refs.line1);
            myChart.setOption({
                title: {
                    text: "按金额",
                    textStyle: {
                        fontSize: 12,
                        color: "#000"
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                // legend: {
                //     orient: "vertical",
                //     x: "left",
                //     data: [
                //         "直接访问",
                //         "邮件营销",
                //         "联盟广告",
                //         "视频广告",
                //         "搜索引擎"
                //     ],
                //     width: 20,
                //     textStyle: {
                //         fontSize: 8
                //     }
                // },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "12",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 335, name: "直接访问" },
                            { value: 310, name: "邮件营销" },
                            { value: 234, name: "联盟广告" },
                            { value: 135, name: "视频广告" },
                            { value: 1548, name: "搜索引擎" }
                        ]
                    }
                ]
            });
        }
    }
};
</script>

<style lang='scss'>
.supplier-detail {
    display: flex;
    justify-content: space-between;
    .supplier-info {
        width: 1110px;
        .interval {
            margin-top: 25px;
        }
        .info-body {
            display: flex;
            .photo {
                width: 200px;
                height: 120px;
                margin-right: 40px;
            }
            .detail {
                flex: 1;
                display: flex;
                border-left: 2px solid $theme-color;
                padding-left: 10px;
                background-color: #f8f8f8;
                .detail-column + .detail-column {
                    margin-left: 70px;
                }
                .detail-column {
                    .item {
                        line-height: 25px;
                    }
                    .key {
                        display: inline-block;
                        width: 100px;
                        font-weight: bold;
                        margin-right: 15px;
                    }
                }
            }
        }
        .main-title {
            .title {
                font-size: 12px;
                font-weight: bold;
                line-height: 26px;
                border-bottom: 1px solid $theme-color;
            }
            .brand-wrap {
                display: flex;
                flex-wrap: wrap;
                padding: 10px 0;
                .brand-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    line-height: 20px;
                    margin-right: 25px;
                    .brand-img {
                        width: 95px;
                        height: 40px;
                    }
                }
            }
        }
    }

    .el-tabs__item.is-active,
    .el-tabs__item:hover {
        color: $theme-color;
    }
    .agent-brand {
        flex-shrink: 0;
        width: 415px;
        padding-left: 25px;
        box-sizing: border-box;
        border-left: 1px solid $theme-color;
        h2 {
            margin: 0;
            font-size: 12px;
        }
        .brand-list {
            display: flex;
            flex-wrap: wrap;
            .brand-item {
                width: 95px;
                height: 40px;
                margin: 20px 25px 0 0;
            }
            .brand-item:nth-child(3n) {
                margin-right: 0;
            }
        }
    }
}
</style>
