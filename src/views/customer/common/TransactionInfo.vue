<template>
    <div class="transation-info">
        <div class="title">
            交易信息
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
        <el-table :data="tableData" size="mini" border :header-cell-style="headerStyle">
            <el-table-column
                prop="year"
                label="年份"
                align="center"
                :width="width[0]"
                class-name="blue-font"
            ></el-table-column>
            <el-table-column prop="quarter" label="季度" align="center" :width="width[1]"></el-table-column>
            <el-table-column prop="purchaseVolume" label="采购额" align="center" :width="width[2]"></el-table-column>
            <el-table-column
                prop="totalProfit"
                label="总计毛利润"
                align="center"
                :width="width[3]"
                class-name="bg1"
            ></el-table-column>
            <el-table-column
                prop="profitMargin"
                label="利润率"
                align="center"
                :width="width[4]"
                class-name="bg1"
            ></el-table-column>
            <el-table-column
                prop="enquiryTimes"
                label="询价次数"
                align="center"
                :width="width[5]"
                class-name="bg2"
            ></el-table-column>
            <el-table-column
                prop="quotationTimes"
                label="报价次数"
                align="center"
                :width="width[6]"
                class-name="bg2"
            ></el-table-column>
            <el-table-column
                prop="transactionTimes"
                label="成交次数"
                align="center"
                :width="width[7]"
                class-name="bg2"
            ></el-table-column>
            <el-table-column prop="iqRatio" label="询报价比例" align="center" :width="width[8]"></el-table-column>
            <el-table-column prop="transactionRatio" label="成交比例" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: Array,
            default: () => [105, 90, 130, 130, 105, 130, 140, 110, 130]
        }
    },
    data() {
        return {
            command: '',
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
                year: "2015",
                quarter: "一季度",
                purchaseVolume: 12580,
                totalProfit: 1225,
                profitMargin: "8.59%",
                enquiryTimes: 1512,
                quotationTimes: 352,
                transactionTimes: 125,
                iqRatio: "35%",
                transactionRatio: "35%"
            });
            result.push({
                year: "2015",
                quarter: "二季度",
                purchaseVolume: 32447,
                totalProfit: 32444,
                profitMargin: "15.20%",
                enquiryTimes: 1512,
                quotationTimes: 352,
                transactionTimes: 125,
                iqRatio: "35%",
                transactionRatio: "35%"
            });
            result.push({
                year: "2015",
                quarter: "三季度",
                purchaseVolume: 123687,
                totalProfit: 322557,
                profitMargin: "12.14%",
                enquiryTimes: 1512,
                quotationTimes: 352,
                transactionTimes: 125,
                iqRatio: "35%",
                transactionRatio: "35%"
            });
        }
        this.tableData = result;
    },
    methods: {
        handleCommand(val) {
            this.command = val
        }
    }
};
</script>

<style lang="scss">
.transation-info {
    .title {
        position: relative;
        margin: 10px 0;
        padding-left: 20px;
        line-height: 20px;
        font-size: 13px;
        font-weight: bold;
        .btn {
            padding: 5px 10px;
            margin-left: 20px;
            border-radius: 0;
            background-color: $theme-color;
            border: none;
            color: #fff;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            width: 7px;
            height: 100%;
            background-color: $theme-color;
        }
    }
}
</style>