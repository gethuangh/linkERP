<template>
    <div class="finance">

        <!-- 操作按钮 -->
        <div class="operating-btn">
            <div class="operating-item" @click="submitTable">
                <i class="iconfont">&#xe774;</i>
                <span>关联</span>
            </div>
            <div class="operating-item" @click="openPopover">
                <i class="iconfont">&#xe653;</i>
                <span>修改</span>
            </div>
        </div>

        <!-- 表单信息 -->
        <div class="info-list">
            <div class="info-item" style="width: 350px">
                <div><span>到账单号：</span><span>INM190001</span></div>
                <div><span>到账金额：</span><span style="color: #00f"><b>$992.8</b></span></div>
                <div><span>币<i style="padding:0 14px;"></i>别：</span><span style="color: #00f">美金</span></div>
                <div><span>到账日期：</span><span>2019/10/31</span></div>
                <div><span>收款银行：</span><span>HSBC HK</span></div>
                <div><span>收款账号：</span><span>LINK美金</span></div>
            </div>
            <div class="info-item" style="padding: 0 50px">
                <div><span>付款公司：</span><span>ADVANCED TECHNOLOGY US INC.</span></div>
                <div><span>付款方式：</span><span>货到 15 天</span></div>                
                <div><span>缓冲天数：</span><span>7 天</span></div>
                <div><span>业<i style="padding:0 4px;"></i>务<i style="padding:0 3px;"></i>员：</span><span>焦文杰</span></div>
                <div><span>公<i style="padding:0 14px;"></i>司：</span><span>LINK APAC</span></div>
            </div>
            <div class="info-item" style="padding: 0 50px">
                <div><span>客户备注：</span><el-input v-model="value" size="mini"></el-input></div><br>
                <div><span>财务备注：</span><el-input v-model="value" size="mini"></el-input></div><br>            
                <div><span>到账水单：</span><i class="iconfont">&#xe60c;</i></div>
            </div>
        </div>

        <!-- 表格 -->
        <div class="table-info">
            <div class="el-button--mini el-button search" style="background: #99CC00">关联单据</div>
            <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option                
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <div style="width: 100%;padding-top:10px;">
                <el-table
                    border size="mini"
                    :data="associateTable"
                    style="width: 100%;color: #00f">
                    <el-table-column
                        align="center"
                        label="序号"
                        width="45">
                        <template slot-scope="scope">
                            {{ scope.$index + 1 }}     
                        </template>                  
                    </el-table-column>
                    <el-table-column
                        prop="data"
                        align="center"
                        label="订单日期"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="salesOrderNumber"
                        align="center"
                        label="销售订单号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="place"
                        align="center"
                        width="160"
                        label="客户订单号">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="230"
                        label="原厂型号">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="95"
                        label="品牌">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        align="center"
                        width="95"
                        label="数量">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="75"
                        label="税率">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        align="right"
                        width="95"
                        label="销售单价">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        width="95"
                        align="right"
                        label="销售总价">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        width="100"
                        align="center"
                        label="币别">
                    </el-table-column>
                    <el-table-column
                        width="150"
                        align="center"
                        label="订单状态">
                        <template slot-scope="scope">
                            <span v-if="scope.row.status == '已入库待发货'" style="color: #008000">{{ scope.row.status }}</span>
                            <span v-else style="color: #f00">{{ scope.row.status }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="data"
                        width="100"
                        align="center"
                        label="出库日期">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        width="100"
                        align="center"
                        label="出库批号">
                    </el-table-column>
                    <el-table-column
                        prop="place"
                        width="120"
                        align="center"
                        label="出库仓库">
                    </el-table-column>
                    <el-table-column
                        align="center">
                        <template slot-scope="scope">
                            <el-button type="info" class="table-remove" @click="remove(scope.row.salesOrderNumber)">移除</el-button>
                        </template>                        
                    </el-table-column>
                </el-table>
            </div>
            <div class="price-all distance-one">
                <p><span>本期应收款：</span><span>$1000.00</span></p>
                <p><span>入账金额：</span><span>$992.80</span></p>
                <p style="color: #f00"><span>差额：</span><span>$7.80</span></p>
            </div>
        </div>

        <!-- 关联人 关联日期 -->
        <div class="pop-ups-footer">
            <p><span>关联人：</span><span>焦文杰</span></p>
            <p><span>关联日期：</span><span>2019/10/31</span></p>
        </div>

        <!-- 待选表格 -->
        <div class="el-popover" v-if="popover">            
            <div style="width: 1800px;margin: 0 auto">
                <h4>{{ popoverTitle }}</h4>
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
                        sortable
                        align="center"
                        label="订单日期"
                        width="100">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        sortable
                        align="center"
                        label="销售订单号"
                        width="120">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.salesOrderNumber }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        sortable
                        prop="place"
                        align="center"
                        width="160"
                        label="客户订单号">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="230"
                        label="原厂型号">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="95"
                        label="品牌">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value">
                                <el-option                                
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="95"
                        label="数量">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        width="75"
                        label="税率">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="right"
                        width="95"
                        label="销售单价">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="95"
                        align="right"
                        label="销售总价">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="币别">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.letter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="150"
                        align="center"
                        label="订单状态">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value">
                                <el-option                                
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <template v-if="scope.$index != 0">
                                <span v-if="scope.row.status == '已入库待发货'" style="color: #008000">{{ scope.row.status }}</span>
                                <span v-else style="color: #f00">{{ scope.row.status }}</span>
                            </template>
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
                        width="100"
                        align="center"
                        label="出库批号">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="120"
                        align="center"
                        label="出库仓库">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value">
                                <el-option                                
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <span v-if="scope.$index != 0">{{ scope.row.place }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        label="操作">
                        <template slot-scope="scope">
                            <el-select v-if="scope.$index == 0" size="mini" v-model="value">
                                <el-option                                
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
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
import Pagination from '@/components/Pagination.vue'

export default {
    name: "goAssociate",
    components: { Pagination },
    data() {
        return {
            popover: false,
            popoverTitle: '销售订单',

            value: '',
            input: '',
            total: 20,
            
            options: [
                {
                    label: '销售订单',
                    value: 1
                },{
                    label: '采购退货单',
                    value: 2
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
                    operating: '去关联'
                }
            ],

            gridData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],

            //中转对象
            tempOne: {},

            //关联单据
            associateTable: []
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
        //提交关联
        submitTable() {
            console.log(this.associateTable)
        }
    },
    created() {
        //bus.on('xxx',() => { })
    }
};
</script>

<style lang='scss' src="../style.scss">

    // .selected {
    //     display: none;
    // }

</style>