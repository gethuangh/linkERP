<template>
    <div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="150px"
            class="demo-ruleForm"
        >
            <el-form-item label="品牌名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="品牌简称" prop="name">
                <el-input v-model="ruleForm.shortname"></el-input>
            </el-form-item>
            <el-form-item label="品牌所属国家" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="美国" value="USA"></el-option>
                    <el-option label="加拿大" value="Canada"></el-option>
                </el-select>
            </el-form-item>            
            <el-form-item label="母品牌">
                <el-button size="mini" plain icon="el-icon-plus">选择品牌</el-button>
            </el-form-item>
            <el-form-item label="子品牌">
                <el-button size="mini" plain icon="el-icon-plus">选择品牌</el-button>
            </el-form-item>
            <el-form-item label="授权代理商">
                <el-button size="mini" plain icon="el-icon-plus">选择代理商</el-button>
            </el-form-item>
            <el-form-item label="优质贸易商">
                <el-button size="mini" plain icon="el-icon-plus">选择贸易商</el-button>
            </el-form-item>
            <el-form-item label="产品系列">
                <el-button size="mini" plain icon="el-icon-plus">新增</el-button>
            </el-form-item>
            <el-form-item label="系列名">
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button size="mini" type="success" plain @click="dialogFormVisible = false">取 消</el-button>
            <el-button size="mini" type="success" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </div>
</template>
<script>
import bus from "@/assets/Bus";
export default {
    name: "productBrandAdd",
    components: {},
    data() {
        return {
            ruleForm: {
                name: "",
                shortname: '',
                region: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            rules: {
                
            }
        };
    },
    methods: {},
    created() {
        // bus.on("xxx", () => {});
    }
};
</script>

<style lang='scss' scoped>

    

</style>