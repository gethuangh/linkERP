<template>
  <el-form ref="form" class="supplier-add" :model="form" label-width="130px">
    <div class="half">
      <div class="block">
        <el-form-item label="供应商名称">
          <el-input v-model="form.name" placeholder="请输入供应商名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="英文名">
          <el-input v-model="form.name" placeholder="请输入英文名" clearable></el-input>
        </el-form-item>
        <el-form-item label="简称">
          <el-input v-model="form.name" placeholder="请输入简称" clearable></el-input>
        </el-form-item>
        <el-form-item label="国家/地区">
          <el-cascader :props="regionProps"></el-cascader>
        </el-form-item>
        <el-form-item label="供应商类别">
          <el-select v-model="form.region" clearable placeholder="请选择供应商类别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="地址">
          <el-input type="textarea" v-model="form.name" placeholder="请输入地址" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.name" placeholder="请输入电话" clearable></el-input>
        </el-form-item>
        <el-form-item label="传真">
          <el-input v-model="form.name" placeholder="请输入传真" clearable></el-input>
        </el-form-item>
        <el-form-item label="网址">
          <el-input v-model="form.name" placeholder="请输入网址" clearable></el-input>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="子公司">
          <el-select v-model="form.region" clearable placeholder="请选择子公司">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="母公司">
          <el-select v-model="form.region" clearable placeholder="请选择母公司">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </div>

    <div class="half">
      <div class="block">
        <el-form-item label="交易币种">
          <el-select v-model="form.region" clearable placeholder="请选择交易币种">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-select v-model="form.region" clearable placeholder="请选择付款方式">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易方式">
          <el-select v-model="form.region" clearable placeholder="请选择交易方式">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="代理/分销品牌">
          <el-select v-model="form.region" clearable placeholder="请选择代理/分销品牌">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="营业执照">
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
        <el-form-item label="代理证明">
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
        <el-form-item label="其他证明文件">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <el-button size="small" type="primary">点击上传</el-button>
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
      }
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
