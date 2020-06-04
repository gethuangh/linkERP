<template>
    <div class="deal-statistics">
        <div class="header">
            交易统计
            <el-dropdown trigger="click" @command="handleCommand">
                <el-button size="mini" class="btn">
                    {{ command ? command : '按季度'}}
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="按季度">全部</el-dropdown-item>
                    <el-dropdown-item command="第一季度">第一季度</el-dropdown-item>
                    <el-dropdown-item command="第二季度">第二季度</el-dropdown-item>
                    <el-dropdown-item command="第三季度">第三季度</el-dropdown-item>
                    <el-dropdown-item command="第四季度">第四季度</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-table
            class="table"
            size="mini"
            :data="tableData"
            style="width: 100%"
            :header-cell-style="thStyle"
        >
            <el-table-column prop="year" label="年份" width="75"></el-table-column>
            <el-table-column prop="quarter" label="季度" width="95"></el-table-column>
            <el-table-column prop="offerNumber" label="报价次数" width="95"></el-table-column>
            <el-table-column prop="purchaseNumber" label="采购次数" width="95"></el-table-column>
            <el-table-column prop="proportion" label="成交比例" width="90"></el-table-column>
            <el-table-column prop="totalPrice" label="采购总额"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000"
            },
            tableData: [
                {
                    year: "2019",
                    quarter: "第一季度",
                    offerNumber: 112,
                    purchaseNumber: 35,
                    proportion: "100%",
                    totalPrice: "100000"
                },
                {
                    year: "2019",
                    quarter: "第一季度",
                    offerNumber: 112,
                    purchaseNumber: 35,
                    proportion: "100%",
                    totalPrice: "100000"
                },
                {
                    year: "2019",
                    quarter: "第一季度",
                    offerNumber: 112,
                    purchaseNumber: 35,
                    proportion: "100%",
                    totalPrice: "100000"
                },
                {
                    year: "2019",
                    quarter: "第一季度",
                    offerNumber: 112,
                    purchaseNumber: 35,
                    proportion: "100%",
                    totalPrice: "100000"
                }
            ],
            command: ''
        };
    },
    methods: {
        handleCommand(val) {
            this.command = val
        }
    }
};
</script>

<style lang='scss'>
@import "./common.scss";
.deal-statistics {
    .header {
        @include tableHeader;
        .btn {
            @include tableBtn;
        }
    }
    .table {
        @include table;
    }
}
</style>
