<template>
    <div style="font-size: 14px">

        <!-- 操作按钮 -->
        <div class="operating-btn">
            <div class="operating-item">
                <i class="iconfont">&#xe61f;</i>
                <span>保存</span>
            </div>
            <div class="operating-item">
                <i class="iconfont">&#xe603;</i>
                <span>复制</span>
            </div>
            <div class="operating-item">
                <i class="iconfont">&#xe653;</i>
                <span>修改</span>
            </div>
            <div class="operating-item">
                <i class="iconfont">&#xe616;</i>
                <span>审核</span>
            </div>
            <div class="operating-item">
                <i class="iconfont">&#xe602;</i>
                <span>反审</span>
            </div>
            <div class="operating-item">
                <i class="iconfont">&#xe667;</i>
                <span>删除</span>
            </div>
        </div>

        <!-- 申请单号 购买方 -->
        <div>
            <p style="padding-bottom: 10px">申请单号：<b class="blue-font">KPSQ001251</b></p>
            <div class="application-box">
                <div class="green-font">购买方</div>
                <div class="flex-col green-font">
                    <p>名称：</p>
                    <p>纳税人识别号：</p>
                    <p>地址、电话：</p>
                    <p>开户及 账号：</p>
                </div>
                <div class="flex-col blue-font">
                    <el-input v-model="name"></el-input>
                    <el-input v-model="num"></el-input>
                    <el-input v-model="connect"></el-input>
                    <el-input v-model="band"></el-input>
                </div>
            </div>
        </div>

        <!-- 选择销售订单 -->
        <div>
            <el-button size="mini" class="search" @click.native="openPopover">选择销售订单</el-button>
            <div style="width: 1555px;padding-top:5px;">
                <el-table
                    border size="mini"
                    :data="associateTable"
                    style="width: 100%;color: #00f;font-weight: 700">
                    <el-table-column
                        prop="data"
                        align="center"
                        label="货物或应税劳务、服务名称"
                        width="260">
                    </el-table-column>
                    <el-table-column
                        prop="salesOrderNumber"
                        align="center"
                        label="客户单号"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        align="center"
                        width="230"
                        label="规格型号">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="70"
                        label="单位">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        align="center"
                        width="110"
                        label="数量">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        width="145"
                        align="center"
                        label="含税单价">
                    </el-table-column>                    
                    <el-table-column
                        prop="price"
                        width="190"
                        align="center"
                        label="含税金额">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        width="95"
                        align="center"
                        label="税率">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        width="210"
                        align="center"
                        label="税额">
                    </el-table-column>
                    <el-table-column
                        align="center">
                        <template slot-scope="scope">
                            <el-button type="info" class="table-remove" @click="remove(scope.row.salesOrderNumber)">移除</el-button>
                        </template>                        
                    </el-table-column>
                </el-table>
            </div>
            <div class="order-detail">
                <div class="flex-model first-row">
                    <p style="width: 259px" class="green-font">价税合计（大写）</p>
                    <p style="width: 718px" class="flex-model"><b class="blue-font"> 壹万元整</b><b class="green-font">含税总额：</b></p>
                    <p style="width: 189px"><b class="blue-font">￥10,000.00</b></p>
                    <p style="width: 94px"><b class="green-font">税额</b></p>
                    <p style="width: 294px"><b class="blue-font">￥1,300.00</b></p>
                </div>
                <div class="flex-model second-row">
                    <div class="green-font">销售方</div>
                    <div class="green-font">
                        <p>名称：</p>
                        <p>纳税人识别号：</p>
                        <p>地址、电话：</p>
                        <p>开户及 账号：</p>
                    </div>
                    <div style="width: 745px;" class="green-font">
                        <el-select size="mini" v-model="value">
                            <el-option label="领科电子（深圳）有限公司" value="test"></el-option>
                        </el-select>
                        <el-select size="mini" v-model="value">
                            <el-option label="DSDSADASD2DASDSAD11212" value="test"></el-option>
                        </el-select>
                        <el-select size="mini" v-model="value">
                            <el-option label="深圳市福田区XXX路XXXXX大厦XXXXXX房间 0755-82708700" value="test"></el-option>
                        </el-select>
                        <el-select size="mini" v-model="value">
                            <el-option label="招商银行股份有限公司深圳振华支行 12321323123123213213213" value="test"></el-option>
                        </el-select>
                    </div>
                    <div class="green-font"><span>发票备注</span></div>
                    <textarea rows="4"></textarea>
                </div>
            </div>
        </div>

        <!-- 关联人 关联日期 -->
        <div class="pop-ups-footer" style="margin-top: 20px">
            <p>
                <span>申请人备注：</span><span><b style="color: #f00;font-weight: 400">请按日期开票后，寄到以下地址：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</b></span>
            </p>
        </div>
        <div class="pop-ups-footer" style="margin-top: 15px">
            <p><span>申请人：</span><span>焦文杰</span></p>
            <p></p>
            <p><span>订单日期：</span><span>2019/10/31</span></p>
            <p></p>
            <p><span>审核日期：</span><span>2019/10/31</span></p>
        </div>

        <!-- 待选表格 -->
        <div class="el-popover" v-if="popover" style="width: 1625px;">            
            <div style="width: 1600px;margin: 0 auto">
                <h4>销售订单</h4>
                <el-table
                    border size="mini"
                    :data="tableDataOne"
                    style="width: 100%;color: #00f;margin: 5px 0">
                    <el-table-column
                        align="center"
                        label="序号"
                        width="45">
                        <template slot-scope="scope">
                            <span v-if="scope.$index == 0" style="color: #606266">No.</span>
                            <span v-else>{{ scope.$index }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="订单日期"
                        width="100">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="客户订单号"
                        width="150">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.salesOrderNumber }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="left"
                        width="215"
                        label="客户名称">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="left"
                        width="215"
                        label="原厂型号">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="110"
                        label="品牌">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="95"
                        label="数量">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="75"
                        align="center"
                        label="税率">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="销售单价">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="120"
                        align="center"
                        label="销售总价">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <template v-if="scope.$index != 0">
                                {{ scope.row.orderStatus }}
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="订单状态">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="出库日期">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="120"
                        align="center"
                        label="出库仓库">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.place }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="54"
                        label="操作">
                        <template slot-scope="scope">
                            <el-button type="info" class="table-select" v-if="scope.$index != 0" @click="select(scope.row)">选择</el-button>
                        </template>                        
                    </el-table-column>
                </el-table>
                <Pagination :total="total"></Pagination>
            </div>
        </div>

    </div>
</template>

<script>
import bus from "@/assets/Bus";
export default {
    name: "invoicingApply",
    components: {},
    data() {
        return {
            value: 'test',
            input: '',
            popover: false,

            name: '',
            num: '',
            connect: '',
            band: '',
            associateTable: [
                {
                    data: '2020-01-28',
                    salesOrderNumber: '113411562',
                    type: 'EPM1270T144C5N',
                }
            ],
            tableDataOne: [
                {},
                {
                    salesOrderNumber: 'INM190001',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                },{
                    salesOrderNumber: 'INM190002',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                },{
                    salesOrderNumber: 'INM190003',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                },{
                    salesOrderNumber: 'INM190004',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                },{
                    salesOrderNumber: 'INM190005',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                },{
                    salesOrderNumber: 'INM190006',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                },{
                    salesOrderNumber: 'INM190012',
                    type: '代理商',
                    text: 'MT48LC32M16A2P-75:C TR',
                    letter: 'MCN',
                    num: 1000,
                    price: '￥15.00',
                    des: 'IC DRAM 512M PARALLEL 54TSOP',
                    none: '',
                    place: '深圳公司库',
                    data: '2019-02-28',
                    status: '待关联',
                    orderStatus: '已入库',
                    operating: '去关联'
                }
            ],
        };
    },
    methods: {
        // 打开/关闭 关联表
        openPopover() {
            this.popover = !this.popover
        },
        //选择
        select(row) {
            let flag = true
            if(this.associateTable.length == 0) {
                this.associateTable.push(row)
            }else {
                this.associateTable.forEach(function(item, index, arr) {
                    if(item.salesOrderNumber == row.salesOrderNumber) {
                        flag = false                      
                    }
                });

                if(flag) {
                    this.associateTable.push(row)
                }else {
                    this.$message({ type: 'warning', message: '该订单已存在'})
                }
            }                     
        },
        //移除
        remove(num) {
            this.associateTable.forEach(function(item, index, arr) {
                if(item.salesOrderNumber == num) {
                    arr.splice(index, 1);
                }
            });
        },
        //提交
        submitTable() {
            console.log(this.associateTable)
        }
    },
    created() {
        //bus.$on('xxx',() => { })
    }
};
</script>

<style></style>