<template>
    <div class="finance">

        <!-- 操作按钮 -->
        <div class="operating-btn">
            <div class="operating-item">
                <i class="iconfont">&#xe64a;</i>
                <span>冲账</span>
            </div>
            <div class="operating-item">
                <i class="iconfont">&#xe778;</i>
                <span>返回</span>
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

        <!-- 表单信息 -->
        <div class="info-list">
            <div class="info-item" style="width: 350px">
                <div><span>冲账单号：</span><span>CZ190001</span></div>
                <div><span>付款金额：</span><span style="color: #00f"><b>￥1000.00</b></span></div>
                <div><span>币<i style="padding:0 14px;"></i>别：</span><span style="color: #00f">人民币</span></div>
                <div><span>付款日期：</span><span>2019/10/31</span></div>
                <div><span>付款银行：</span><span>招商银行</span></div>
                <div><span>付款账号：</span><span>焦文杰9656</span></div>
            </div>
            <div class="info-item" style="padding: 0 50px">
                <div style="font-weight: 700;color: #333"><span>收款公司：</span><span>深圳锐思科技有限公司</span></div>
                <div><span>收<i style="padding:0 4px;"></i>款<i style="padding:0 3px;"></i>人：</span><span>蔡嘉胜</span></div>                
                <div><span>收款银行：</span><span>招商银行</span></div>
                <div><span>付款方式：</span><span>货到付款</span></div>
                <div><span>采<i style="padding:0 4px;"></i>购<i style="padding:0 3px;"></i>人：</span><span>蔡嘉伟</span></div>
                <div><span>公<i style="padding:0 14px;"></i>司：</span><span>LINK APAC</span></div>
            </div>
            <div class="info-item" style="padding: 0 50px">
                <div><span>财务备注：</span><el-input v-model="value" size="mini"></el-input></div><br>
                <div><span>收款凭证：</span><i class="iconfont">&#xe60c;</i></div><br>            
                <div><span>付款水单：</span><i class="iconfont">&#xe60c;</i></div>
            </div>
        </div>

        <!-- 表格 -->
        <div class="table-info">
            <div class="el-button--mini el-button search" style="background: #99CC00">关联单据</div>
            <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                label="采购订单"
                value="1"
                @click.native="openPopover">
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
                        label="采购订单号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="230"
                        label="原厂型号">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        align="center"
                        width="105"
                        label="订单数量">
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
                        label="实际单价">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        width="95"
                        align="right"
                        label="实际总价">
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
                            <span style="color: #41C363;font-weight: 700;">{{ scope.row.orderStatus }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        width="100"
                        align="center"
                        label="入库数量">
                    </el-table-column>                    
                    <el-table-column
                        prop="num"
                        width="100"
                        align="center"
                        label="入库批号">
                    </el-table-column>
                    <el-table-column
                        prop="data"
                        width="100"
                        align="center"
                        label="入库日期">
                    </el-table-column>
                    <el-table-column
                        prop="place"
                        width="120"
                        align="center"
                        label="入库仓库">
                    </el-table-column>
                    <el-table-column
                        align="center">
                        <template slot-scope="scope">
                            <el-button type="info" class="table-remove" @click="remove(scope.row.salesOrderNumber)">移除</el-button>
                        </template>                        
                    </el-table-column>
                </el-table>
            </div>
            <div class="price-all distance-three">
                <p><span>本期应付款：</span><span>￥1000.00</span></p>
                <p><span>付款金额：</span><span>￥1000.00</span></p>
                <p style="color: #f00">
                    <span>差额：</span><span>￥0.00</span>
                    <b class="record-cost">记费用</b>
                </p>
            </div>
        </div>

        <!-- 关联人 关联日期 -->
        <div class="pop-ups-footer">
            <p><span>订单日期：</span><span>2019/10/31</span></p>
            <p></p>
            <p><span>冲账人：</span><span>蔡奕华</span></p>
            <p><span>销账日期：</span><span>2019/10/31</span></p>
            <p></p>
            <p><span>审核人：</span><span>蔡奕华</span></p>
            <p><span>审核日期：</span><span>2019/10/31</span></p>
        </div>

        <!-- 待选表格 -->
        <div class="el-popover" v-if="popover" style="width: 1676px;">            
            <div style="width: 1620px;margin: 0 auto">
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
                        label="采购订单号"
                        width="120">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.salesOrderNumber }}</span>
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
                        width="105"
                        label="订单数量">
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
                        label="实际单价">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.price }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="95"
                        align="right"
                        label="实际总价">
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
                                {{ scope.row.orderStatus }}
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="入库数量">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="入库日期">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.data }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="100"
                        align="center"
                        label="入库批号">
                        <template slot-scope="scope">
                            <el-input v-if="scope.$index == 0" v-model="input" size="mini"></el-input>
                            <span v-if="scope.$index != 0">{{ scope.row.num }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        width="120"
                        align="center"
                        label="入库仓库">
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
    name: "goOffset",
    components: { Pagination },
    data() {
        return {
            popover: true,
            popoverTitle: '采购订单',

            value: "1",
            input: '',
            total: 20,

            options: [],

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
        //提交
        submitTable() {
            console.log(this.associateTable)
        }
    },
    created() {
        //bus.on('xxx',() => { })
    }
};
</script>

<style lang='scss' src="../style.scss"></style>