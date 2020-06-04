<template>
    <div class="contact-table">
        <div class="title">
            联络人信息
            <el-button size="mini" class="btn">Add</el-button>
        </div>
        <el-table :data="tableData" size="mini" border :header-cell-style="headerStyle">
            <el-table-column type="index" label="序号" class-name="italic" align="center" width="50"></el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="170"
                class-name="blue-font"
                sortable
            ></el-table-column>
            <el-table-column
                prop="region"
                label="负责区域"
                align="center"
                width="120"
                sortable
            ></el-table-column>
            <el-table-column
                prop="position"
                label="职位"
                width="145"
                sortable
            ></el-table-column>
            <el-table-column
                prop="product"
                label="负责产品"
                width="125"
                sortable
            ></el-table-column>
            <el-table-column
                prop="totalPurchase"
                label="总计采购"
                align="center"
                width="140"
                class-name="bg1"
                sortable
            ></el-table-column>
            <el-table-column
                prop="totalProfit"
                label="总计毛利润"
                align="center"
                width="120"
                class-name="bg1"
                sortable
            ></el-table-column>
            <el-table-column
                prop="totalProfitMargin"
                label="总计利润率"
                align="center"
                width="110"
                class-name="bg1"
                sortable
            ></el-table-column>
            <el-table-column
                prop="yearPurchase"
                label="今年采购"
                align="center"
                width="155"
                class-name="bg2"
                sortable
            ></el-table-column>
            <el-table-column
                prop="yearProfit"
                label="今年利润"
                align="center"
                width="110"
                class-name="bg2"
                sortable
            ></el-table-column>
            <el-table-column
                prop="yearProfitMargin"
                label="今年利润率"
                align="center"
                width="110"
                class-name="bg2"
                sortable
            ></el-table-column>
            <el-table-column
                prop="yearInquiry"
                label="今年询价笔"
                align="center"
                width="105"
                class-name="blue-font"
                sortable
            ></el-table-column>
            <el-table-column
                prop="yearDeal"
                label="今年成交笔"
                align="center"
                width="105"
                class-name="blue-font"
                sortable
            ></el-table-column>
            <el-table-column
                prop="dealRatio"
                label="成交比例"
                align="center"
                width="100"
                class-name="blue-font"
                sortable
            ></el-table-column>
            <el-table-column
                prop="lastInquiry"
                label="上次询价"
                align="center"
                width="95"
                sortable
            ></el-table-column>
            <el-table-column
                prop="daysBefore"
                label="距今天数"
                align="center"
                width="95"
                class-name="red-font"
                sortable
            ></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headerStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000",
                borderTop: "2px solid #41c363"
            },
            tableData: []
        };
    },
    created() {
        var result = [];
        for (var i = 0; i < 3; i++) {
            result.push({
                name: "Mark Zagburg",
                region: "美国",
                position: "采购",
                product: "IC",
                totalPurchase: 33512,
                totalProfit: 33512,
                totalProfitMargin: '12.14%',
                yearPurchase: 33500,
                yearProfit: 33500,
                yearProfitMargin: '12.14%',
                yearInquiry: 1512,
                yearDeal: 352,
                dealRatio: '35%',
                lastInquiry: '2019-11-26',
                daysBefore: 8
            });
            result.push({
                name: "Steven Conner",
                region: "美国",
                position: "采购",
                product: "IC，被动",
                totalPurchase: 12580,
                totalProfit: 12580,
                totalProfitMargin: '8.59%',
                yearPurchase: 33500,
                yearProfit: 33500,
                yearProfitMargin: '8.59%',
                yearInquiry: 1512,
                yearDeal: 352,
                dealRatio: '35%',
                lastInquiry: '2019-11-26',
                daysBefore: 2
            });
            result.push({
                name: "Michael Harden",
                region: "美国",
                position: "采购经理",
                product: "CPU，存储",
                totalPurchase: 33512,
                totalProfit: 33512,
                totalProfitMargin: '15.20%',
                yearPurchase: 33500,
                yearProfit: 33500,
                yearProfitMargin: '15.20%',
                yearInquiry: 1512,
                yearDeal: 352,
                dealRatio: '35%',
                lastInquiry: '2019-11-26',
                daysBefore: 23
            });
        }
        this.tableData = result;
    }
};
</script>
