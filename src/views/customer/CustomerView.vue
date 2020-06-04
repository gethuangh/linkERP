<template>
    <div class="customer-view">
        <div class="title">
            所有客户
            <el-button size="mini" class="btn">Add</el-button>
        </div>
        <el-table
            :data="thisclientList"
            size="mini"
            border
            :header-cell-style="headerStyle"
            :cell-style="cellStyle"
            >
            <el-table-column type="index" label="序号" class-name="italic" align="center" width="50"></el-table-column>
            <el-table-column prop="chineseName" label="客户名称" width="250" :formatter="formatter" sortable>
            </el-table-column>
            <el-table-column
                prop="classificationName"
                label="类别"
                align="center"
                width="90"
                :formatter="formatter"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="industryName"
                label="行业"
                align="center"
                width="110"
                :formatter="formatter"
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
                prop="contactPerson"
                label="联系人"
                align="center"
                width="95"
                :formatter="formatter"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="position"
                label="职位"
                align="center"
                width="110"
                :formatter="formatter"
                sortable
            >
            </el-table-column>
            <el-table-column
                prop="phone"
                label="电话"
                align="center"
                width="155"
                :formatter="formatter"
                sortable
            >
            </el-table-column>
            <el-table-column prop="url" label="网址" align="center" width="200" sortable>
                <template slot-scope="{row}">
                    <a
                        :href="row.url"
                        target="_blank"
                        style="color: rgb(0, 0, 238)"
                    >{{ row.url }}</a>
                </template>
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="创建日期"
                align="center"
                width="125"
                :formatter="formatter"
                sortable
            >
            </el-table-column>
            <el-table-column label align="center" width="125">
                <template slot-scope="{row}">
                    <span v-if="row.type === 29" class="typeStyle">潜在客户</span>
                    <span v-else-if="row.type === 30" class="typeStyle">公共客户</span>
                    <span v-else-if="row.type === 31" class="typeStyle">合作客户</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {clientList} from "../../api/customer";

export default {
    name: "",
    data() {
        return {
            thisclientList:[{}],
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

    clientList().then(res => {
        this.thisclientList = res.result;
      });


        var result = [];
        for (var i = 0; i < 10; i++) {
            result.push({
                name: "鸿海精密仪器(中国)有限公司",
                category: "代工厂",
                industry: "",
                country: "中国",
                contact: "王先生",
                position: "采购",
                tel: "0755-88888888",
                website: "www.xxx.com",
                createDate: "2018-05-15",
                type: 0
            });
            result.push({
                name: "AAA ELECTRONICS",
                category: "贸易商",
                industry: "",
                country: "美国",
                contact: "",
                position: "",
                tel: "",
                website: "www.xxx.com",
                createDate: "2018-05-22",
                type: 0
            });
            result.push({
                name: "华为科技有限公司",
                category: "最终客户",
                industry: "通信",
                country: "中国",
                contact: "王先生",
                position: "采购",
                tel: "0755-88888888",
                website: "www.xxx.com",
                createDate: "2018-06-15",
                type: 0
            });
        }
        for (var i = 0; i < result.length; i++) {
            if (i < 10) {
                result[i].type = 0;
            } else if (i < 20) {
                result[i].type = 1;
            } else {
                result[i].type = 2;
            }
        }
        this.tableData = result;
    },
    methods: {
        formatter(row, column, cellValue) {
            return cellValue || "-";
        },
        cellStyle({ row }) {
            if (row.type === 1) {
                return { backgroundColor: "#ffffdd!important" };
            } else if (row.type === 2) {
                return { backgroundColor: "#e5ffe5!important" };
            }
        },
    }
};
</script>

<style lang='scss'>
@import "./common/tableView.scss";
</style>
