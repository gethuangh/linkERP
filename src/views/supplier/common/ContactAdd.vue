<template>
  <el-form ref="form" class="supplier-add" :model="form" label-width="130px">
    <div class="half">
      <div class="block">
        <el-form-item label="中文名">
          <el-input v-model="form.name" placeholder="请输入中文名" clearable></el-input>
        </el-form-item>
        <el-form-item label="英文名">
          <el-input v-model="form.name" placeholder="请输入英文名" clearable></el-input>
        </el-form-item>
        <el-form-item label="国家/地区">
          <el-cascader :props="regionProps"></el-cascader>
        </el-form-item>
        <el-form-item label="公司">
          <el-select v-model="form.region" clearable placeholder="请选择公司">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="性别">
          <el-select v-model="form.region" clearable placeholder="请选择性别">
            <el-option label="男" value="shanghai"></el-option>
            <el-option label="女" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="form.region" clearable type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.name" placeholder="请输入年龄" clearable></el-input>
        </el-form-item>
        <el-form-item label="生日提醒">
          <el-switch v-model="form.region" active-color="#41c363"></el-switch>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="是否已婚">
          <el-select v-model="form.region" clearable placeholder="请选择是否已婚">
            <el-option label="是" value="shanghai"></el-option>
            <el-option label="否" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配偶姓名">
          <el-input v-model="form.name" placeholder="请输入配偶姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="配偶生日">
          <el-date-picker v-model="form.region" clearable type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="子女">
          <el-select v-model="form.region" clearable placeholder="请选择子女">
            <el-option label="是" value="shanghai"></el-option>
            <el-option label="否" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-table :data="tableData" border>
            <el-table-column prop="name" label="子女姓名" width="100"></el-table-column>
            <el-table-column prop="sex" label="性别" width="50"></el-table-column>
            <el-table-column prop="age" label="年龄" width="50"></el-table-column>
            <el-table-column prop="birthday" label="生日"></el-table-column>
          </el-table>
        </el-form-item>
      </div>
    </div>

    <div class="half">
      <div class="block">
        <el-form-item label="QQ">
          <el-input v-model="form.name" placeholder="请输入QQ" clearable></el-input>
        </el-form-item>
        <el-form-item label="EMAIl">
          <el-input v-model="form.name" placeholder="请输入EMAIl" clearable></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="form.name" placeholder="请输入微信" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="form.name" placeholder="请输入手机" clearable></el-input>
        </el-form-item>
        <el-form-item label="座机">
          <el-input v-model="form.name" placeholder="请输入座机" clearable></el-input>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="个人公司名">
          <el-input v-model="form.name" placeholder="请输入个人公司名" clearable></el-input>
        </el-form-item>
        <el-form-item label="个人地址">
          <el-input v-model="form.name" placeholder="请输入个人地址" clearable></el-input>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="主营品牌">
          <el-select v-model="form.region" clearable placeholder="请选择主营品牌">
            <el-option label="是" value="shanghai"></el-option>
            <el-option label="否" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="照片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="名片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </div>
    </div>
    <div style=" position: fixed;
    bottom: 100px;
    right: 120px;">
      <!-- <el-button type="info" plain>清空</el-button> -->
      <el-button type="success" plain>提交</el-button>
    </div>
  </el-form>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      imageUrl: "",
      regionProps: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 3000);
        }
      },
      tableData: [
        {
          name: "王小虎",
          sex: "男",
          age: "10",
          birthday: "2019-10-10"
        },
        {
          name: "王小虎",
          sex: "男",
          age: "10",
          birthday: "2019-10-10"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      // const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //     this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      // if (!isLt2M) {
      //     this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
      // return isJPG && isLt2M;
      return true;
    }
  }
};
</script>

<style lang='scss'>
@import "./common.scss";
@include addModel;
</style>
