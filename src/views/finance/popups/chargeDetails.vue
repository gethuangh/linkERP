<template>
    <div class="finance">

        <!-- 操作按钮 -->
        <div class="operating-btn">
            <div class="operating-item">
                <i class="iconfont">&#xe61f;</i>
                <span>保存</span>
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
                <i class="iconfont">&#xe667;</i>
                <span>删除</span>
            </div>
        </div>

        <!-- 表单信息 -->
        <div class="info-list">
            <div class="info-item" style="width: 350px">
                <div><span>费用单号：</span><span>CZ190001</span></div>
                <div><span>费用金额：</span><span style="color: #00f"><b>￥1000.00</b></span></div>
                <div><span>币<i style="padding:0 14px;"></i>别：</span><span style="color: #00f">人民币</span></div>
                <div><span>付款日期：</span><span>2019/10/31</span></div>                
            </div>
            <div class="info-item" style="padding: 0 50px">
                <div style="font-weight: 700;color: #333"><span>受益公司：</span><span>顺丰速递</span></div>
                <div><span>受<i style="padding:0 4px;"></i>益<i style="padding:0 3px;"></i>人：</span><span>顺丰速递</span></div>                
                <div><span>付款银行：</span><span>招商银行</span></div>
                <div><span>付款账号：</span><span>焦文杰9656</span></div>
            </div>
            <div class="info-item" style="padding: 0 50px">
                <div><span>支付凭证：</span><i class="iconfont">&#xe60c;</i></div><br>            
                <div><span>付款水单：</span><i class="iconfont">&#xe60c;</i></div>
            </div>
        </div>

        <!-- 表格 -->
        <div class="table-info">
            <div class="el-button--mini el-button search" style="background: #99CC00">费用明细</div>
            <div style="width: 100%;padding-top:10px;">
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
                        label="付款日期"
                        width="95">
                    </el-table-column>
                    <el-table-column
                        prop="salesOrderNumber"
                        align="center"
                        label="费用单号"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="120"
                        label="科目明细">
                    </el-table-column>
                    <el-table-column
                        prop="num"
                        align="center"
                        width="230"
                        label="受益公司">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        align="center"
                        width="75"
                        label="货币">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        align="center"
                        width="120"
                        label="金额">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        width="75"
                        align="center"
                        label="税率">
                    </el-table-column>
                    <el-table-column
                        prop="letter"
                        width="100"
                        align="center"
                        label="消费人">
                    </el-table-column>
                    <el-table-column
                        prop="place"
                        width="120"
                        align="center"
                        label="公司">
                    </el-table-column>
                    <el-table-column
                        prop="data"
                        width="100"
                        align="center"
                        label="录入日期">
                    </el-table-column>
                    <el-table-column
                        align="left"
                        label="备注">
                        <template slot-scope="scope">
                            <span style="color: #f00">{{ scope.row.text }}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="price-chare-all">
                <p>总计费用：</p><span>￥1000.00</span>
            </div>
        </div>

        <!-- 人员 日期 -->
        <div class="pop-ups-footer">
            <p><span>录入日期：</span><span>2019/10/31</span></p>
            <p></p>
            <p><span>录入人：</span><span>蔡奕华</span></p>
            <p></p>
            <p><span>审核人：</span><span>蔡奕华</span></p>
            <p></p>
            <p><span>审核日期：</span><span>2019/10/31</span></p>
        </div>

    </div>
</template>

<script>
import bus from "@/assets/Bus";
import Pagination from '@/components/Pagination.vue'

export default {
    name: "chargeDetail",
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
                }
            ],

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