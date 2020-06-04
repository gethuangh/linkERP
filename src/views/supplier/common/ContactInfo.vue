<template>
    <div class="special-model">
        <div class="header">
            联系人信息
            <el-button size="mini" class="btn">新增</el-button>
        </div>
        <el-table
            class="table"
            size="mini"
            :data="tableData"
            style="width: 100%"
            :header-cell-style="thStyle"
        >
            <el-table-column label="序号" type="index" width="50"></el-table-column>
            <el-table-column prop="chineseName" label="中文名" width="95"></el-table-column>
            <el-table-column prop="englishName" label="英文名" width="115"></el-table-column>
            <el-table-column prop="region" label="地区" width="70"></el-table-column>
            <el-table-column prop="position" label="职位" width="95"></el-table-column>
            <el-table-column prop="phone" label="手机" width="115"></el-table-column>
            <el-table-column prop="liaison" label="在线联络" width="230">
                <template>
                    <a href="tencent://message/?uin=2155495773&Site=Sambow&Menu=yes" class="el-icon-info"></a>
                    <i class="el-icon-question"></i>
                    <i class="el-icon-remove"></i>
                </template>
            </el-table-column>
            <el-table-column prop="brand" label="主营品牌"></el-table-column>
        </el-table>
        <pagination class="pagination" :total="total" @sizeChange="sizeChange" @currentChange="currentChange"></pagination>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination"
export default {
    data() {
        return {
            thStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000"
            },
            tableData: [],
            total: 100
        };
    },
    components: {
        Pagination
    },
    created() {
        this.tableData = new Array(10).fill({
            chineseName: "王晓峰",
            englishName: "Andy Wang",
            region: "深圳",
            position: "销售经理",
            phone: "13588888888",
            liaison: {
                qq: "2155495773",
                wechat: "qq2155495773",
                email: "2155495773@qq.com"
            },
            brand: "ADI   MAXIM    TI"
        });
    },
    methods: {
        sizeChange(size) {
            console.log(size)
        },
        currentChange(current) {
            console.log(current)
        }
    }
};
</script>

<style lang='scss'>
@import "./common.scss";
.special-model {
    .header {
        @include tableHeader;
        .btn {
            @include tableBtn;
        }
    }
    .table {
        @include table;
    }
    .pagination {
        float: right;
        margin-top: 10px;
    }
}
</style>
