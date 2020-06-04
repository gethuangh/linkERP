<template>
    <div class="customer-contact">
        <div class="left-side">
            <div class="personal-info">
                <div class="name">David Makenskin</div>
                <div class="info-body">
                    <el-image :src="img" fit="cover" class="photo"></el-image>
                    <div class="detail">
                        <div class="detail-column">
                            <div class="item">
                                <span class="key">姓名</span>
                                <span>David Makenskin</span>
                            </div>
                            <div class="item">
                                <span class="key">别名</span>
                                <span>大卫.马克思</span>
                            </div>
                            <div class="item">
                                <span class="key">所在国家</span>
                                <span>中国</span>
                            </div>
                            <div class="item">
                                <span class="key">所在地区</span>
                                <span>深圳</span>
                            </div>
                            <div class="item" style="margin-top: 15px">
                                <span class="key">所属公司</span>
                                <span>AVNET ELECTRONICS</span>
                            </div>
                            <div class="item">
                                <span class="key">目前职业</span>
                                <span>销售</span>
                            </div>
                            <div class="item">
                                <span class="key">目前职位</span>
                                <span>销售员</span>
                            </div>
                        </div>
                        <div class="detail-column">
                            <div class="item">
                                <span class="key">生日</span>
                                <span>1978-02-03</span>
                            </div>
                            <div class="item">
                                <span class="key">日历</span>
                                <span>公历</span>
                            </div>
                            <div class="item">
                                <span class="key">年龄</span>
                                <span>41</span>
                            </div>
                            <div class="item">
                                <span class="key">婚姻</span>
                                <span>已婚</span>
                            </div>
                            <div class="item" style="margin-top: 15px">
                                <span class="key">子/女</span>
                                <span>有</span>
                            </div>
                            <div class="item">
                                <span class="key">是否抽烟</span>
                                <span>抽烟</span>
                            </div>
                            <div class="item">
                                <span class="key">是否喝酒</span>
                                <span>不喝酒</span>
                            </div>
                        </div>
                        <div class="detail-column">
                            <div class="item">
                                <span class="key">座机</span>
                                <span>0258888888</span>
                            </div>
                            <div class="item">
                                <span class="key">传真</span>
                                <span>99999</span>
                            </div>
                            <div class="item">
                                <span class="key">手机</span>
                                <span>13800138000</span>
                            </div>
                            <div class="item">
                                <span class="key">EMAIL</span>
                                <span>99999@qq.com</span>
                            </div>
                            <div class="item">
                                <span class="key">SKYPE</span>
                                <span>9999999999</span>
                            </div>
                            <div class="item">
                                <span class="key">QQ</span>
                                <span>106666959</span>
                            </div>
                            <div class="item">
                                <span class="key">微信</span>
                                <span>13800138000</span>
                            </div>
                            <div class="item">
                                <span class="key">WhatsAPP</span>
                                <span>13800138000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="disposition">
                <div class="module-header">
                    喜好与性格
                    <el-button
                        size="mini"
                        class="btn"
                        @click="dispositionEdit=!dispositionEdit"
                    >{{dispositionEdit ? '保存' : '编辑'}}</el-button>
                </div>
                <div class="content">
                    <span v-show="!dispositionEdit">{{ disposition }}</span>
                    <el-input
                        v-show="dispositionEdit"
                        :autosize="{minRows: 2}"
                        :autofocus="dispositionEdit"
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="disposition"
                    ></el-input>
                </div>
            </div>
            <div class="follow-up">
                <div class="module-header">
                    客户跟进
                    <el-button size="mini" class="btn" @click="addVisible = true">添加</el-button>
                </div>
                <el-table
                    class="table"
                    size="mini"
                    :data="tableData"
                    style="width: 100%"
                    :header-cell-style="thStyle"
                >
                    <el-table-column prop="date" label="日期" width="110"></el-table-column>
                    <el-table-column prop="mode" label="跟进方式" width="115"></el-table-column>
                    <el-table-column prop="person" label="跟进人" width="130"></el-table-column>
                    <el-table-column prop="content" label="跟进内容" class-name="care-content"></el-table-column>
                </el-table>
            </div>
            <div class="lately-transaction interval">
                <div class="module-header">近期交易</div>
                <el-table
                    class="table"
                    size="mini"
                    :data="tableData2"
                    style="width: 100%"
                    :header-cell-style="thStyle"
                >
                    <el-table-column prop="model" label="型号" width="220"></el-table-column>
                    <el-table-column prop="brand" label="品牌" width="65"></el-table-column>
                    <el-table-column prop="number" label="数量" width="60"></el-table-column>
                    <el-table-column prop="price" label="单价" width="75"></el-table-column>
                    <el-table-column prop="total" label="总价" align="center" width="130"></el-table-column>
                    <el-table-column prop="currency" label="本位币" align="center" width="130"></el-table-column>
                    <el-table-column prop="salesperson" label="销售员" align="center" width="130"></el-table-column>
                    <el-table-column
                        prop="date"
                        label="日期"
                        align="center"
                        class-name="care-content"
                    ></el-table-column>
                </el-table>
            </div>
            <transaction-info :width="[100,80,130,150,85,75,75,75,105]" class="interval"></transaction-info>
        </div>
        <div class="right-side">
            <div class="family-situation">
                <div class="module-header">家庭情况</div>
                <el-table
                    class="table"
                    size="mini"
                    :data="tableData3"
                    style="width: 100%"
                    :header-cell-style="thStyle"
                >
                    <el-table-column prop="name" label="家庭成员" width="140"></el-table-column>
                    <el-table-column prop="relation" label="关系" width="70"></el-table-column>
                    <el-table-column prop="age" label="年龄" width="70"></el-table-column>
                    <el-table-column prop="birthday" label="生日" width="110"></el-table-column>
                    <el-table-column prop="calendar" label="日历" align="center" width="50"></el-table-column>
                    <el-table-column label="提醒" align="center">
                        <template slot-scope="{row}">
                            <el-switch v-model="row.remind" active-color="#41c363"></el-switch>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="job-change interval">
                <div class="module-header">
                    工作变动
                    <el-button size="mini" class="btn" @click="addVisible2 = true">添加</el-button>
                </div>
                <el-table
                    class="table"
                    size="mini"
                    :data="tableData4"
                    style="width: 100%"
                    :header-cell-style="thStyle"
                >
                    <el-table-column prop="company" label="所属公司" width="140"></el-table-column>
                    <el-table-column prop="position" label="职位" width="140"></el-table-column>
                    <el-table-column label="状态" width="105">
                        <template slot-scope="{row}">
                            <span v-if="row.state === 0">在职</span>
                            <span v-else-if="row.state === 1" style="color: red">离职</span>
                            <span v-else-if="row.state === 2">入职</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="登记日期" align="center"></el-table-column>
                </el-table>
            </div>
            <div class="manage-brand interval">
                <div class="module-header">
                    负责品牌
                    <el-button size="mini" class="btn" @click="addVisible3 = true">添加</el-button>
                </div>
                <div class="brand-list">
                    <div class="brand-item" v-for="item in 7" :key="item">
                        <el-image :src="img" fit="cover" class="brand-img"></el-image>
                        <span>品牌</span>
                    </div>
                </div>
            </div>
            <line-chart title="销售额 / 毛利润趋势" class="interval"></line-chart>
            <line-chart title="询价次数 / 报价次数趋势" class="interval"></line-chart>
            <pie-chart title="询价 / 下单品牌比例" pieTitle="询价比例-品牌\n(按金额)" :data="pieData" class="interval"></pie-chart>
            <bar-chart title="询价 / 成交统计" class="interval"></bar-chart>
        </div>

        <el-dialog
            title="新增客户跟进"
            width="600px"
            :visible.sync="addVisible"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="日期">
                            <el-input v-model="name" placeholder="请输入日期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="跟进方式">
                            <el-input v-model="name" placeholder="请输入跟进方式" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="跟进人">
                            <el-input v-model="name" placeholder="请输入跟进人" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item label="跟进内容">
                            <el-input type="textarea" v-model="name" placeholder="请输入跟进内容" clearable></el-input>
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
            title="新增工作变动"
            width="600px"
            :visible.sync="addVisible2"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="所属公司">
                            <el-input v-model="name" placeholder="请输入所属公司" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="职位">
                            <el-input v-model="name" placeholder="请输入职位" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="状态">
                            <el-input v-model="name" placeholder="请输入状态" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="登记日期">
                            <el-input v-model="name" placeholder="请输入登记日期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                <el-button @click="addVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="addVisible2 = false">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog
            title="新增品牌"
            :visible.sync="addVisible3"
            width="500px"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-form-item label="品牌LOGO">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="品牌名称">
                    <el-input v-model="imageUrl" placeholder="请输入品牌名称" clearable></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="addVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="addVisible3 = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import TransactionInfo from "./common/TransactionInfo.vue";
import LineChart from "@/components/LineChart.vue"
import PieChart from "@/components/PieChart.vue"
import BarChart from "@/components/BarChart.vue"
export default {
    name: "",
    data() {
        return {
            img:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            disposition: "篮球、乒乓球、羽毛球、跑步、游泳等",
            dispositionEdit: false,
            thStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000"
            },
            tableData: [
                {
                    date: "2019-01-14",
                    mode: "电话",
                    person: "柳振",
                    content:
                        "电话进行了沟通，了解到XX品牌有价格优势，约定XX日期见面。"
                },
                {
                    date: "2019-01-14",
                    mode: "电话",
                    person: "面谈",
                    content: "面谈了解到XX品牌有价格优势，约定XX日期见面。"
                }
            ],
            tableData2: [],
            tableData3: [
                {
                    name: "xxx",
                    relation: "父子",
                    age: 12,
                    birthday: "1990-01-05",
                    calendar: "公历",
                    remind: true
                },
                {
                    name: "xxx",
                    relation: "父女",
                    age: null,
                    birthday: null,
                    calendar: "公历",
                    remind: false
                }
            ],
            tableData4: [
                {
                    company: "AAA ELECTRONICS",
                    position: "采购",
                    state: 0,
                    date: "2016-01-10"
                },
                {
                    company: "AAA ELECTRONICS",
                    position: "采购",
                    state: 1,
                    date: "2018-05-10"
                },
                {
                    company: "BB ELECTRONICS",
                    position: "采购",
                    state: 2,
                    date: "2018-06-10"
                }
            ],
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
            addVisible: false,
            addVisible2: false,
            addVisible3: false,
            name: '',
            imageUrl: ''
        };
    },
    components: {
        TransactionInfo,
        LineChart,
        PieChart,
        BarChart
    },
    created() {
        for (var i = 0; i < 15; i++) {
            this.tableData2.push({
                model: "EPM3128ATC100-10N",
                brand: "INTEL",
                number: 500,
                price: 2.358,
                total: 1000,
                currency: 6800,
                salesperson: "焦文杰",
                date: "2019-01-10"
            });
        }
    }
};
</script>

<style lang='scss'>
.customer-contact {
    display: flex;
    justify-content: space-between;
    .interval {
        margin-top: 25px;
    }
    .module-header {
        font-size: 12px;
        font-weight: bold;
        line-height: 26px;
        border-bottom: 1px solid $theme-color;
        .btn {
            float: right;
            height: 26px;
            border-radius: 0;
            background-color: $theme-color;
            border: none;
            color: #fff;
        }
    }
    .el-table {
        color: #000;
    }
    .left-side {
        flex-shrink: 0;
        width: 990px;
        .personal-info {
            .name {
                position: relative;
                margin: 10px 0;
                padding-left: 20px;
                line-height: 20px;
                font-size: 13px;
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
            .info-body {
                display: flex;
                .photo {
                    width: 190px;
                    height: 160px;
                    margin-right: 50px;
                }
                .detail {
                    flex: 1;
                    display: flex;
                    .detail-column {
                        margin-right: 100px;
                        &:last-child {
                            margin-right: 0;
                        }
                        .item {
                            line-height: 25px;
                        }
                        .key {
                            display: inline-block;
                            width: 65px;
                            font-weight: bold;
                            margin-right: 15px;
                        }
                    }
                }
            }
        }
        .disposition {
            .content {
                min-height: 50px;
                padding: 10px 0;
                line-height: 20px;
            }
        }
        .follow-up {
            .care-content {
                color: $theme-color;
                font-weight: bold;
            }
        }
    }
    .right-side {
        flex-shrink: 0;
        width: 540px;
        .manage-brand {
            .brand-list {
                display: flex;
                flex-wrap: wrap;
                padding: 20px 0;
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
