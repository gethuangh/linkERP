<template>
    <div class="logistic-table">
        <div class="title">* {{ title }} >></div>
        <el-table
            ref="multipleTable"
            :data="list"
            tooltip-effect="dark"
            size="mini"
            border
            stripe
            style="width: 1651px"
            header-row-class-name="table-header"
            :cell-style="cellStyle"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column
                prop="startEndSign"
                label="物流起终"
                width="135"
                align="center"
                class-name="font-bold"
                sortable
            ></el-table-column>
            <el-table-column prop="sentTime" label="发货日期" width="95" align="center" sortable></el-table-column>
            <el-table-column prop="shippingNumber" label="发货单号" width="95" align="center" class-name="blue-font" sortable></el-table-column>
            <el-table-column prop="productModel" label="型号" width="185" align="center" sortable></el-table-column>
            <el-table-column prop="num" label="数量" width="80" align="center" sortable></el-table-column>
            <el-table-column prop="batchNumber" label="批号" width="80" align="center" sortable></el-table-column>
            <el-table-column prop="produceLocation" label="产地" width="80" align="center" sortable></el-table-column>
            <el-table-column prop="clientName" label="客户" width="205" align="center" sortable></el-table-column>
            <el-table-column prop="receiveCompanyName" label="收货公司" width="205" align="center" sortable></el-table-column>
            <el-table-column prop="clientOrderNumber" label="客户订单号" width="130" align="center" sortable></el-table-column>
            <el-table-column prop="salesManName" label="业务员" width="90" align="center" sortable></el-table-column>
            <el-table-column label="订单状态" width="130" align="center" class-name="font-bold" sortable>
                <template slot-scope="{row}">
                    <span style="color: #41C363" v-if="row.orderStatus === 0">已入库待发货</span>
                    <span style="color: #FF00FF" v-else-if="row.orderStatus === 1">已采购待入库</span>
                    <span style="color: #FF0000" v-else-if="row.orderStatus === 2">已审核代采购</span>
                </template>
            </el-table-column>
            <el-table-column prop="shippingManName" label="发运人" width="90" align="center" sortable></el-table-column>
        </el-table>
    </div>
</template>

<script>
import {listWithOrderType} from "../../../api/logistic";

export default {
    props: ["title", "bgcolor","list"],
    data() {
        return {
            thislistWithOrderType:[{}],
            tableData: [],
            multipleSelection: []
        };
    },
    created() {
        var i = 0;
        while (i < 6) {
            this.tableData.push({
                endup: "深圳 → 香港(大盛)",
                date: "今天",
                shipmentNumber: "D1900001",
                model: "EPM3256ATC144-10N",
                number: 360,
                batch: 1904,
                origin: "PH",
                customer: "AAA ELECTRONICS USA",
                accept: "大盛实业有限公司",
                orderNumber: "41855569",
                salesman: "贾燕洁",
                orderStatus: 0,
                shipper: "蔡嘉胜"
            });
            i++;
        }
        this.tableData[2].orderStatus = 1;
        this.tableData[3].orderStatus = 2;
        this.tableData[4].orderStatus = 2;
        this.tableData[5].orderStatus = 2;
        //首页列表
        let data = {isSent : "0"};
        listWithOrderType(data).then(res => {
            this.thislistWithOrderType = res.result.shippingOrderList;
            console.log(this.thislistWithOrderType)
         });
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        cellStyle({ columnIndex }) {
            if (this.bgcolor && columnIndex > 0 && columnIndex < 12) {
                return { backgroundColor: this.bgcolor };
            }
        }
    }
};
</script>

<style lang='scss'>
.logistic-table {
    margin-top: 25px;
    .el-table {
        color: #000;
    }
    .title {
        width: 1649px;
        height: 37px;
        line-height: 37px;
        border: 1px solid #ebeef5;
        border-bottom: none;
        font-weight: bold;
        text-indent: 12px;
        background-color: #fafafa;
    }
    .table-header {
        th {
            color: #000;
            font-weight: normal;
        }
    }
    .font-bold {
        font-weight: bold;
    }
    .blue-font {
        color: #0000ff;
    }
}
</style>
