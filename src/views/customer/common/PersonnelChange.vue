<template>
    <div>
        <div class="title">
            人事变动
            <el-button size="mini" class="btn" @click="addVisible = true">Add</el-button>
        </div>
        <el-table :data="tableData" size="mini" border :header-cell-style="headerStyle">
            <el-table-column type="index" label="序号" class-name="italic" align="center" width="50"></el-table-column>
            <el-table-column prop="date" label="日期" align="center" width="130"></el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                align="center"
                width="185"
                class-name="blue-font bg1"
            ></el-table-column>
            <el-table-column prop="post" label="职务" align="center" width="165" class-name="bg1"></el-table-column>
            <el-table-column prop="change" label="变动" align="center" width="95" class-name="bg1">
                <template slot-scope="{row}">
                    <span style="color: #ed6618" v-if="row.change === 0">离职</span>
                    <span style="color: #41c363" v-else-if="row.change === 1">升职</span>
                    <span style="color: #ff00ff" v-else-if="row.change === 2">内部调动</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="newCompany"
                label="新公司"
                align="center"
                width="230"
                class-name="blue-font bg2"
            ></el-table-column>
            <el-table-column prop="newPost" label="新职务" align="center" width="245"></el-table-column>
            <el-table-column prop="entryDate" label="入职日期" align="center"></el-table-column>
        </el-table>
        <el-dialog
            title="新增人事变动"
            width="1010px"
            :visible.sync="addVisible"
            :close-on-click-modal="false"
        >
            <el-form label-width="130px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="日期">
                            <el-input v-model="name" placeholder="请输入日期" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="姓名">
                            <el-input v-model="name" placeholder="请输入姓名" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="职务">
                            <el-input v-model="name" placeholder="请输入职务" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="变动">
                            <el-input v-model="name" placeholder="请输入变动" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="新公司">
                            <el-input v-model="name" placeholder="请输入新公司" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="新职务">
                            <el-input v-model="name" placeholder="请输入新职务" clearable></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="入职日期">
                            <el-input v-model="name" placeholder="请输入入职日期" clearable></el-input>
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
            headerStyle: {
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000",
                borderTop: "2px solid #41c363"
            },
            tableData: [],
            addVisible: false,
            name: ''
        };
    },
    created() {
        var result = [];
        for (var i = 0; i < 3; i++) {
            result.push({
                date: "2016-06-23",
                name: "Steven Conner",
                post: "采购经理",
                change: 0,
                newCompany: "Cavtron Electronics Ltd.",
                newPost: "采购经理",
                entryDate: "2016-06-23"
            });
            result.push({
                date: "2016-06-23",
                name: "Steven Conner",
                post: "采购经理",
                change: 0,
                newCompany: "Cavtron Electronics Ltd.",
                newPost: "采购经理",
                entryDate: "2016-06-23"
            });
            result.push({
                date: "2016-06-23",
                name: "Steven Conner",
                post: "采购经理",
                change: 0,
                newCompany: "Cavtron Electronics Ltd.",
                newPost: "采购经理",
                entryDate: "2016-06-23"
            });
        }
        result[3].change = 1;
        result[4].change = 1;
        result[5].change = 2;
        this.tableData = result;
    }
};
</script>
