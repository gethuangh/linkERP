<template>
    <div class="customer-detail">
        <div class="title">
            AAA ELECTRONICS LIMITED
            <el-button size="mini" class="btn">Add</el-button>
        </div>
        <div class="customer-info">
            <el-image :src="img" fit="cover" class="photo"></el-image>
            <div class="detail">
                <div class="column-group">
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">其他语种名</span>
                            <span>阿里电子(美国)有限公司</span>
                        </div>
                        <div class="item">
                            <span class="key">国家</span>
                            <span>美国</span>
                        </div>
                        <div class="item">
                            <span class="key">客户类型</span>
                            <span style="color: #41c363;font-weight: bold">最终客户</span>
                        </div>
                        <div class="item">
                            <span class="key">简称</span>
                            <span>AAA Electronics</span>
                        </div>
                        <div class="item">
                            <span class="key">组织性质</span>
                            <span>上市企业</span>
                        </div>
                        <div class="item">
                            <span class="key">级别</span>
                            <span>A级</span>
                        </div>
                        <div class="item">
                            <span class="key">行业</span>
                            <span>通信</span>
                        </div>
                        <div class="item">
                            <span class="key">网址</span>
                            <a href="ww.aaa-ele.com" style="color: rgb(0, 0, 238)">ww.aaa-ele.com</a>
                        </div>
                    </div>
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">客户代码</span>
                            <span>AC02</span>
                        </div>
                        <div class="item">
                            <span class="key">电话</span>
                            <span>1-514-223-8896</span>
                        </div>
                        <div class="item">
                            <span class="key">传真</span>
                            <span>1-514-223-8896</span>
                        </div>
                        <div class="item">
                            <span class="key">付款方式</span>
                            <span>NET 30</span>
                        </div>
                        <div class="item">
                            <span class="key">交易币种</span>
                            <span>USD</span>
                        </div>
                        <div class="item">
                            <span class="key">交易方式</span>
                            <span>FOB Hong Kong</span>
                        </div>
                        <div class="item">
                            <span class="key">运输方式</span>
                            <span>FedEx Int'l Express</span>
                        </div>
                        <div class="item">
                            <span class="key">物流账号</span>
                            <span>3358-2589-9</span>
                        </div>
                    </div>
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">客户类型</span>
                            <span>成交客户</span>
                        </div>
                        <div class="item">
                            <span class="key">应收款</span>
                            <span>$33716.00</span>
                        </div>
                        <div class="item">
                            <span class="key">交易总额</span>
                            <span>$1233716.00</span>
                        </div>
                        <div class="item">
                            <span class="key">利润总额</span>
                            <span>$133716.00</span>
                        </div>
                        <div class="item">
                            <span class="key">毛利润率</span>
                            <span>12.12%</span>
                        </div>
                        <div class="item">
                            <span class="key">创建日期</span>
                            <span>2019-11-21</span>
                        </div>
                        <div class="item">
                            <span class="key">销售代表</span>
                            <span>焦文杰</span>
                        </div>
                    </div>
                    <div class="detail-column">
                        <div class="item">
                            <span class="key">主营商品</span>
                            <div>
                                <div>网络交换机</div>
                                <div>工业伺服器</div>
                                <div>工业交换机</div>
                                <div>通讯基站</div>
                                <div>直放站</div>
                                <el-button size="mini" class="btn" style="margin-left: 0">Add</el-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" v-for="(item, index) of sendAddress" :key="item">
                    <span class="key">发货地址{{index+1}}</span>
                    <div>
                        {{item}}
                        <el-button size="mini" class="btn" @click="sendVisible = true" v-if="index === sendAddress.length - 1">Add</el-button>
                    </div>
                </div>
                <el-input v-model="sendInput" @change="handleSend" v-show="sendVisible"></el-input>
                <div class="item">
                    <span class="key">运输地址1</span>
                    <div>
                        19F, Alux Industrial Building, No. 20 Sute Street, San Po Kong, Kowloon, HongKong.
                        <el-button size="mini" class="btn">Add</el-button>
                    </div>
                </div>
            </div>
        </div>
        <contact-table class="interval"></contact-table>
        <div class="main-data">
            <div class="left-data">
                <transaction-info class="interval"></transaction-info>
                <div class="personnel-structure interval">
                    <div class="title">
                        人事架构
                        <el-button size="mini" class="btn" @click="addVisible2 = true">Add</el-button>
                        <el-tag type="info" size="small" class="tag" effect="dark">职业（采购/销售）</el-tag>
                    </div>
                    <el-tabs v-model="activeName" type="card">
                        <el-tab-pane label="全部" name="all">
                            <personnel-structure></personnel-structure>
                        </el-tab-pane>
                        <el-tab-pane label="亚洲采购" name="asia">亚洲采购</el-tab-pane>
                        <el-tab-pane label="欧洲采购" name="europe">欧洲采购</el-tab-pane>
                        <el-tab-pane label="美洲采购" name="america">美洲采购</el-tab-pane>
                    </el-tabs>
                </div>
                <personnel-change class="interval"></personnel-change>
                <div class="project-demand interval">
                    <div class="title">
                        客户项目和需求
                        <el-button size="mini" class="btn" @click="addVisible = true">Add</el-button>
                    </div>
                    <el-tabs v-model="activeName2" type="card">
                        <el-tab-pane label="全部" name="0">
                            <project-demand></project-demand>
                        </el-tab-pane>
                        <el-tab-pane label="待确认" name="1">待确认</el-tab-pane>
                        <el-tab-pane label="工业电脑1" name="2">工业电脑1</el-tab-pane>
                        <el-tab-pane label="工业电脑2" name="3">工业电脑2</el-tab-pane>
                        <el-tab-pane label="工业交换机" name="4">工业交换机</el-tab-pane>
                        <el-tab-pane label="伺候器" name="5">伺候器</el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <div class="right-chart">
                <line-chart title="销售额 / 毛利润趋势" class="interval"></line-chart>
                <line-chart title="询价次数 / 报价次数趋势" class="interval"></line-chart>
                <pie-chart title="询价 / 下单品牌比例" pieTitle="询价比例-品牌\n(按金额)" :data="pieData" class="interval"></pie-chart>
                <bar-chart title="询价 / 成交统计" class="interval"></bar-chart>
            </div>
        </div>

        <el-dialog
            title="新增客户项目和需求"
            width="1010px"
            :visible.sync="addVisible"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="型号">
                            <el-input v-model="name" placeholder="请输入型号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="客户料号">
                            <el-input v-model="name" placeholder="请输入客户料号" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="品牌">
                            <el-input v-model="name" placeholder="请输入品牌" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="接受价格">
                            <el-input v-model="name" placeholder="请输入接受价格" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="单板数量">
                            <el-input v-model="name" placeholder="请输入单板数量" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="修改日期">
                            <el-input v-model="name" placeholder="请输入修改日期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="录入人">
                            <el-input v-model="name" placeholder="请输入录入人" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="报价次数">
                            <el-input v-model="name" placeholder="请输入报价次数" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="成交次数">
                            <el-input v-model="name" placeholder="请输入成交次数" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="addVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog
            title="新增人事架构"
            :visible.sync="addVisible2"
            width="500px"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-form-item label="分类">
                    <el-input v-model="imageUrl" placeholder="请输入分类" clearable></el-input>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input v-model="imageUrl" placeholder="请输入职位" clearable></el-input>
                </el-form-item>
                <el-form-item label="名字">
                    <el-input v-model="imageUrl" placeholder="请输入名字" clearable></el-input>
                </el-form-item>
                <el-form-item label="头像">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="addVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="addVisible2 = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import ContactTable from "./common/ContactTable.vue";
import TransactionInfo from "./common/TransactionInfo.vue";
import PersonnelStructure from "./common/PersonnelStructure.vue";
import PersonnelChange from "./common/PersonnelChange.vue";
import ProjectDemand from "./common/ProjectDemand.vue"
import LineChart from "@/components/LineChart.vue"
import PieChart from "@/components/PieChart.vue"
import BarChart from "@/components/BarChart.vue"
export default {
    data() {
        return {
            img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3632677651,3179755979&fm=26&gp=0.jpg",
            activeName: "all",
            activeName2: '0',
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
            name: '',
            imageUrl: '',
            addVisible: false,
            addVisible2: false,
            sendAddress: ['11301 Carben Building, North Barton Street, FL 33880, USA '],
            sendVisible: false,
            sendInput: ''
        };
    },
    components: {
        ContactTable,
        TransactionInfo,
        PersonnelStructure,
        PersonnelChange,
        ProjectDemand,
        LineChart,
        PieChart,
        BarChart
    },
    methods: {
        handleSend(value) {
            if (value) {
                this.sendAddress.push(value)
                this.sendInput = ''
                this.sendVisible = false
            }
        }
    }
};
</script>

<style lang='scss'>
.customer-detail {
    @mixin btn {
        padding: 5px 10px;
        margin-left: 20px;
        border-radius: 0;
        background-color: $theme-color;
        border: none;
        color: #fff;
    }
    .title {
        position: relative;
        margin: 10px 0;
        padding-left: 20px;
        line-height: 20px;
        font-size: 13px;
        font-weight: bold;
        .btn {
            @include btn;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            width: 7px;
            height: 100%;
            background-color: $theme-color;
        }
    }
    .interval {
        margin-top: 25px;
    }
    .customer-info {
        display: flex;
        .photo {
            flex-shrink: 0;
            width: 180px;
            height: 160px;
            margin-right: 30px;
        }
        .detail {
            flex: 1;
            .detail-column {
                margin-right: 100px;
                &:last-child {
                    margin-right: 0;
                }
            }
            .column-group {
                display: flex;
                flex-wrap: wrap;
            }
            .item {
                display: flex;
                line-height: 25px;
                .btn {
                    @include btn;
                }
            }
            .key {
                display: inline-block;
                width: 65px;
                font-weight: bold;
                margin-right: 15px;
            }
        }
    }
    .el-table {
        border-top: none;
        &::before,
        &::after {
            display: none;
        }
        color: #000;
        .italic {
            font-style: italic;
        }
        .bg1 {
            background-color: #e5ffe5 !important;
        }

        .bg2 {
            background-color: #ffffdd !important;
        }
        .blue-font {
            color: #0000ee;
        }
        .red-font {
            color: #ff0000;
        }
        .descending .sort-caret.descending {
            border-top-color: $theme-color;
        }
        .ascending .sort-caret.ascending {
            border-bottom-color: $theme-color;
        }
    }

    .main-data {
        display: flex;
        justify-content: space-between;
        .left-data {
            width: 1200px;
            margin-right: 50px;
            flex-shrink: 0;
            .personnel-structure {
                .tag {
                    border-radius: 0;
                    margin-left: 30px;
                }
            }
        }
        .right-chart {
            width: 460px;
            flex-shrink: 0;
        }
    }

    .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
            border-color: #409eff;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 150px;
            height: 150px;
            line-height: 150px;
            text-align: center;
        }

        .avatar {
            width: 150px;
            height: 150px;
            display: block;
        }
}
</style>
