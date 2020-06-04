<template>
    <div class="customer-view">
        <div class="title">
            潜在客户
            <el-button size="mini" class="btn">Add</el-button>
        </div>
        <el-table
            :data="thispotentialQuery"
            size="mini"
            border
            :header-cell-style="headerStyle"
        >
            <el-table-column
                prop="createTime"
                label="创建日期"
                align="center"
                width="125"
                :formatter="formatter"
                class-name="italic"
                sortable
            >
            </el-table-column>
            <el-table-column prop="chineseName" label="客户名称" width="250" class-name="bg1" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column
                prop="categoryName"
                label="类别"
                align="center"
                width="90"
                :formatter="formatter"
                class-name="bg2"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="industryName"
                label="行业"
                align="center"
                width="110"
                :formatter="formatter"
                class-name="bg2"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="countryName"
                label="所属国家"
                align="center"
                width="100"
                :formatter="formatter"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="liaisonArea"
                label="联络地区"
                align="center"
                width="130"
                :formatter="formatter"
                sortable
            >
            <template slot-scope="scope">
                      <span>{{scope.row.receiveCountry+ scope.row.connectionArea}}</span>
            </template>
            </el-table-column>
            <el-table-column prop="employee" label="雇员" width="115" align="center" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column prop="recentContacts" label="最近联系" width="120" align="center" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column prop="updateDays" label="未联络天数" width="120" align="center" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column prop="salesman" label="业务员" width="90" align="center" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column prop="contacts" label="联系次数" width="95" align="center" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column prop="inquiryTimes" label="询价次数" width="95" align="center" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column prop="creatorName" label="创建人" width="95" align="center" :formatter="formatter" sortable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {potentialQuery} from "../../api/customer";
export default {
    name: "",
    data() {
        return {
            thispotentialQuery:[{}],
            headerStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000",
                backgroundColor: "#e5ffe5",
                borderTop: "2px solid #41c363"
            },
            tableData: []
        };
    },
    created() {
    //潜在客户
    let type = {type : "29"};
    potentialQuery(type).then(res => {
        this.thispotentialQuery = res.result;
    });

        var result = [];
        for (var i = 0; i < 7; i++) {
            result.push({
                createDate: "2018-05-15",
                name: "鸿海精密仪器(中国)有限公司",
                category: "代工厂",
                industry: "",
                country: "中国",
                liaisonArea: "中国-深圳",
                employee: "10000+",
                latelyContact: "2018-05-22",
                notContactDay: 3,
                salesman: "刘威",
                contactNumber: 3,
                inquiryNumber: 1,
                founder: "刘威"
            });
            result.push({
                createDate: "2018-05-22",
                name: "AAA ELECTRONICS",
                category: "贸易商",
                industry: "",
                country: "美国",
                liaisonArea: "美国-FL",
                employee: "<10",
                latelyContact: "2018-05-22",
                notContactDay: 2,
                salesman: "贾艳洁",
                contactNumber: 5,
                inquiryNumber: 15,
                founder: "焦文杰"
            });
            result.push({
                createDate: "2018-06-05",
                name: "华为科技有限公司",
                category: "最终客户",
                industry: "通信",
                country: "中国",
                liaisonArea: "中国-深圳",
                employee: "500-1000",
                latelyContact: "2018-05-22",
                notContactDay: 29,
                salesman: "熊锋",
                contactNumber: 5,
                inquiryNumber: 15,
                founder: "焦文杰"
            });
        }
        this.tableData = result;
    },
    methods: {
        formatter(row, column, cellValue) {
            return cellValue || "-";
        }
    }
};
</script>

<style lang='scss'>
@import "./common/tableView.scss";
</style>
