<template>
    <div class="finance">

        <!-- 操作按钮 -->
        <div class="operating-btn">
            <div class="operating-item">
                <i class="iconfont">&#xe687;</i>
                <span>销账</span>
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
                <div><span>销账单号：</span><span>INM190001</span></div>
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
            <el-select size="mini" v-model="valueOne" placeholder="请选择">
                <el-option
                label="销售订单"
                value="1">
                </el-option>
            </el-select>
            <div style="width: 1700px;padding-top:10px;">
                <el-table
                    border size="mini"
                    :data="tableDataOne"
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
                            <span style="color: #f00">{{ scope.row.status }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        align="center"
                        width="95"
                        label="出库数量">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        width="100"
                        align="center"
                        label="出库批号">
                    </el-table-column>
                    <el-table-column
                        prop="data"
                        width="100"
                        align="center"
                        label="出库日期">
                    </el-table-column>                    
                    <el-table-column
                        prop="place"
                        align="center"
                        label="出库仓库">
                    </el-table-column>
                </el-table>
            </div>
            <div class="price-all distance-two">
                <p><span>本期应收款：</span><span>$1000.00</span></p>
                <p><span>入账金额：</span><span>$992.80</span></p>
                <p style="color: #f00">
                    <span>差额：</span><span>$7.80</span>
                    <b class="record-cost">记费用</b>
                </p>
            </div>
        </div>

        <!-- 关联人 关联日期 -->
        <div class="pop-ups-footer">
            <p><span>关联人：</span><span>焦文杰</span></p>
            <p><span>关联日期：</span><span>2019/10/31</span></p>
            <p></p>
            <p><span>销账人：</span><span>蔡益华</span></p>
            <p><span>销账日期：</span><span>2019/10/31</span></p>
            <p></p>
            <p><span>审核人：</span><span>蔡益华</span></p>
            <p><span>审核日期：</span><span>2019/10/31</span></p>
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
            
            valueOne: '1',
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
                }
            ]
        };
    },
    methods: {
        //提交
        submitTable() {

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