<template>
    <el-table :data="tableData" size="mini" border :header-cell-style="headerStyle">
        <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
        <el-table-column prop="model" label="型号" align="center" width="170" class-name="blue-font"></el-table-column>
        <el-table-column prop="material" label="客户料号" align="center" width="150"></el-table-column>
        <el-table-column prop="brand" label="品牌" align="center" width="105"></el-table-column>
        <el-table-column
            prop="acceptPrice"
            label="接受价格"
            align="center"
            width="115"
            class-name="bg1"
        ></el-table-column>
        <el-table-column prop="number" label="单板数量" align="center" width="130" class-name="bg1"></el-table-column>
        <el-table-column prop="changeDate" label="修改日期" align="center" width="140"></el-table-column>
        <el-table-column prop="entryPerson" label="录入人" width="125" align="center"></el-table-column>
        <el-table-column
            prop="offerNumber"
            label="报价次数"
            align="center"
            width="120"
            class-name="bg2 italic"
        >
            <template slot-scope="{row}">
                <span style="font-weight: bold;color: #f00" v-if="row.offerNumber > 0">{{ row.offerNumber }}</span>
                <span style="font-weight: bold" v-else>{{ row.offerNumber }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="dealNumber" label="成交次数" align="center" class-name="bg2 italic">
            <template slot-scope="{row}">
                <span style="font-weight: bold;color: #41c363" v-if="row.dealNumber > 0">{{ row.offerNumber }}</span>
                <span style="font-weight: bold" v-else>{{ row.offerNumber }}</span>
            </template>
        </el-table-column>
    </el-table>
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
        for (var i = 0; i < 7; i++) {
            result.push({
                model: "EPM240T100C5N",
                material: "A32-129",
                brand: "ALTERA",
                acceptPrice: "0.503",
                number: 1,
                changeDate: "2018-05-21",
                entryPerson: "焦文杰",
                offerNumber: 0,
                dealNumber: 0
            });
            result.push({
                model: "MAX3232ESE+T",
                material: "A32-110",
                brand: "MAXIM",
                acceptPrice: "0.503",
                number: 2,
                changeDate: "2018-05-21",
                entryPerson: "焦文杰",
                offerNumber: 3,
                dealNumber: 2
            });
            result.push({
                model: "AD672JNZ",
                material: "A32-065",
                brand: "ADI",
                acceptPrice: "0.503",
                number: 2,
                changeDate: "2018-05-21",
                entryPerson: "焦文杰",
                offerNumber: 5,
                dealNumber: 4
            });
        }
        this.tableData = result;
    }
};
</script>
<style lang="scss">
    .el-tabs__item.is-active,
    .el-tabs__item:hover {
        color: $theme-color;
    }
</style>