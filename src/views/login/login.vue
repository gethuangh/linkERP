<!-- 登录 -->
<template>
  <div class="login">
    <div class="login-cont">
      <p>Linkerp管理系统</p>
      <div class="login-input">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="name1">
            <el-input v-model="ruleForm.name1" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../api/login";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        name1: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        name1: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  components: {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            userName: this.ruleForm.name,
            password: this.ruleForm.name1
          };
          login(data).then(res => {
            this.res("登录成功");
            this.$router.push({ name: "index" });
          });
        } else {
          this.err("登录失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang='scss' scoped>
body {
  background: #000;
  width: 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-cont {
  width: 300px;
  height: 400px;
  background: #fff;
  text-align: center;
  p {
    font-size: 26px;
  }
  .login-input {
    margin-top: 40px;
    width: 300px;
    /deep/ .el-input {
      width: 300px;
    }
    /deep/ .el-form-item__content {
      margin-left: 0 !important;
    }
  }
}
</style>