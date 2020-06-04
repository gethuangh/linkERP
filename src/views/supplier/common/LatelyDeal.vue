<template>
    <div class="lately-deal">
        <div class="header">近期交易</div>
        <el-table class="table" ref="table" size="mini" highlight-current-row @row-click="handleCurrentChange" :data="tableData" style="width: 100%" :header-cell-style="thStyle">
            <el-table-column prop="date" label="日期" width="95"></el-table-column>
            <el-table-column prop="purchase" label="采购订单" width="95"></el-table-column>
            <el-table-column prop="model" label="型号" width="160"></el-table-column>
            <el-table-column prop="brand" label="品牌" width="70"></el-table-column>
            <el-table-column prop="number" label="数量" width="70"></el-table-column>
            <el-table-column prop="price" label="单价" width="95" :formatter="formatPrice"></el-table-column>
            <el-table-column prop="totalPrice" label="总价" width="110" :formatter="formatPrice"></el-table-column>
            <el-table-column prop="currency" label="本位币" width="120" :formatter="formatCurrency"></el-table-column>
            <el-table-column prop="contact" label="联系人" width="95"></el-table-column>
            <el-table-column label="订单状态" width="95">
                <template slot-scope="{row}">
                    <span v-if="row.orderStatus === 0" :style="{color: row === currentRow ? '#fff' : '#41c363'}">进行中</span>
                    <span v-else>已完成</span>
                </template>
            </el-table-column>
            <el-table-column prop="buyer" label="采购员"></el-table-column>
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
                    date: "2019-01-14",
                    purchase: "PO011435",
                    model: "TPS65217CRSLR",
                    brand: "TI",
                    number: 2500,
                    price: 1000,
                    totalPrice: 2500000,
                    currency: 2000000,
                    contact: "王晓峰",
                    orderStatus: 0,
                    buyer: "蔡嘉伟"
                },
                {
                    date: "2019-01-14",
                    purchase: "PO011435",
                    model: "TPS65217CRSLR",
                    brand: "TI",
                    number: 2500,
                    price: 1000,
                    totalPrice: 2500000,
                    currency: 2000000,
                    contact: "王晓峰",
                    orderStatus: 0,
                    buyer: "蔡嘉伟"
                },
                {
                    date: "2019-01-14",
                    purchase: "PO011435",
                    model: "TPS65217CRSLR",
                    brand: "TI",
                    number: 2500,
                    price: 1000,
                    totalPrice: 2500000,
                    currency: 2000000,
                    contact: "王晓峰",
                    orderStatus: 1,
                    buyer: "蔡嘉伟"
                },
                {
                    date: "2019-01-14",
                    purchase: "PO011435",
                    model: "TPS65217CRSLR",
                    brand: "TI",
                    number: 2500,
                    price: 1000,
                    totalPrice: 2500000,
                    currency: 2000000,
                    contact: "王晓峰",
                    orderStatus: 1,
                    buyer: "蔡嘉伟"
                },
            ],
            currentRow: null
        };
    },
    methods: {
        formatPrice(row, column, cellValue) {
            return '$' + cellValue
        },
        formatCurrency(row, column, cellValue) {
            return '￥' + cellValue
        },
        handleCurrentChange(row) {
            if(row === this.currentRow){
                this.$refs.table.setCurrentRow(null)
                this.currentRow = null
                return
            }
            this.currentRow = row
        }
    }
};
</script>

<style lang='scss'>
@import "./common.scss";
.lately-deal {
    .header {
        @include tableHeader;
    }
    .table {
        @include table;
    }
    .el-table__body tr.current-row>td {
        background-color: $theme-color;
        color: #fff;
    }
}
</style>
