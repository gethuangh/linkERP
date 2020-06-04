<template>
    <div class="follow-up">
        <div class="header">
            供应商跟进
            <el-button size="mini" class="btn" @click="addVisible = true">新增</el-button>
        </div>
        <el-table class="table" size="mini" :data="tableData" style="width: 100%" :header-cell-style="thStyle">
            <el-table-column prop="date" label="日期" width="120"></el-table-column>
            <el-table-column prop="mode" label="跟进方式" width="95"></el-table-column>
            <el-table-column prop="person" label="跟进人" width="95"></el-table-column>
            <el-table-column prop="content" label="跟进内容" class-name="care-content"></el-table-column>
        </el-table>
        <el-dialog
            title="新增供应商跟进"
            width="600px"
            :visible.sync="addVisible"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="日期">
                            <el-input v-model="name" placeholder="请输入日期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="跟进方式">
                            <el-input v-model="name" placeholder="请输入跟进方式" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="跟进人">
                            <el-input v-model="name" placeholder="请输入跟进人" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-form-item label="跟进内容">
                            <el-input type="textarea" v-model="name" placeholder="请输入跟进内容" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="addVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addVisible: false,
            thStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000"
            },
            tableData: [
                {
                    date: "2019-01-14",
                    mode: "电话",
                    person: "柳振",
                    content: "电话进行了沟通，了解到XX品牌有价格优势，约定XX日期见面。"
                },
                {
                    date: "2019-01-14",
                    mode: "电话",
                    person: "面谈",
                    content: "面谈了解到XX品牌有价格优势，约定XX日期见面。"
                },
            ],
            name: ''
        };
    }
};
</script>

<style lang='scss'>
@import "./common.scss";
.follow-up {
    .header {
        @include tableHeader;
    }
    .btn {
        @include tableBtn;
    }
    .table {
        @include table;
        .care-content {
            color: $theme-color;
            font-weight: bold;
        }
    }
}
</style>
