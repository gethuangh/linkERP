<template>
  <el-form ref="form" class="supplier-add" :model="form" label-width="130px">
    <div class="half">
      <div class="block">
        <el-form-item label="供应商名称" prop="form.name1">
          <el-input v-model="form.name1" placeholder="请输入供应商名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="英文名">
          <el-input v-model="form.name2" placeholder="请输入英文名" clearable></el-input>
        </el-form-item>
        <el-form-item label="简称">
          <el-input v-model="form.name3" placeholder="请输入简称" clearable></el-input>
        </el-form-item>
        <div style="display:flex;">
          <el-form-item label="国家/地区">
            <el-select v-model="form.name4" clearable placeholder="请选择国家">
              <el-option v-for="item in states" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>

            <!-- <el-cascader :props="regionProps"></el-cascader> -->
          </el-form-item>
          <!-- <el-form-item label width="200px">
            <el-select v-model="form.name5" clearable placeholder="请选择地区">
              <el-option
                v-for="item in form.name2"
                :key="item.id"
                :label="item.attrName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>-->
          <el-input placeholder="请输入地区" v-model="form.name5"></el-input>
        </div>

        <el-form-item label="供应商类别">
          <el-select v-model="form.name6" clearable placeholder="请选择供应商类别">
            <el-option
              v-for="item in supplierType"
              :key="item.id"
              :label="item.attrName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="地址">
          <el-input type="textarea" v-model="form.name7" placeholder="请输入地址" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.name8" placeholder="请输入电话" clearable></el-input>
        </el-form-item>
        <el-form-item label="传真">
          <el-input v-model="form.name9" placeholder="请输入传真" clearable></el-input>
        </el-form-item>
        <el-form-item label="网址">
          <el-input v-model="form.name10" placeholder="请输入网址" clearable></el-input>
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="子公司">
          <el-select v-model="form.name11" clearable placeholder="请选择子公司">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="母公司">
          <el-select v-model="form.name12" clearable placeholder="请选择母公司">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </div>

    <div class="half">
      <div class="block">
        <el-form-item label="交易币种">
          <el-select v-model="form.name13" clearable placeholder="请选择交易币种">
            <el-option
              v-for="item in currencyCode"
              :key="item.id"
              :label="item.attrName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-input type="text" v-model="form.name14" placeholder="请选择付款方式"></el-input>
          <!-- <el-select v-model="form.name14" clearable placeholder="请选择付款方式">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>-->
        </el-form-item>
        <el-form-item label="交易方式">
          <el-input type="text" v-model="form.name15" placeholder="请选择交易方式"></el-input>
          <!-- <el-select v-model="form.name15" clearable placeholder="请选择交易方式">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>-->
        </el-form-item>
      </div>
      <div class="block">
        <el-form-item label="代理/分销品牌">
          <el-select v-model="form.name16" clearable placeholder="请选择代理/分销品牌">
            <el-option v-for="item in brand" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
            <img v-if="imageUrl1" :src="imageUrl1" class="avatar" />
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
            <img v-if="imageUrl2" :src="imageUrl2" class="avatar" />
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
      <el-button type="success" @click="subm" plain>提交</el-button>
    </div>
  </el-form>
</template>

<script>
import { insertSupplier } from "@/api/suppliers";
import { states, supplierType } from "@/api/finance";
import { currencyCode, brand } from "@/api/enquiry";
let id = 0;
export default {
  data() {
    return {
      // 国家
      states: "",
      // 供应商类别
      supplierType: "",
      // 币种
      currencyCode: "",
      // 品牌
      brand: "",
      form: {
        name1: "",
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        name6: "",
        name7: "",
        name8: "",
        name9: "",
        name10: "",
        name11: "",
        name12: "",
        name13: "",
        name14: "",
        name15: "",
        name16: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      imageUrl1: "",
      imageUrl2: "",
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
    },
    subm() {
      let data = {
        supChineseName: this.form.name1,
        supEnglishName: this.form.name2,
        abbreviation: this.form.name3,
        stateId: this.form.name4,
        provinceName: this.form.name5,
        cityName: this.form.name5,
        type: this.form.name6,
        address: this.form.name7,
        phone: this.form.name8,
        faxes: this.form.name9,
        website: this.form.name10,
        child: this.form.name11,
        parentComId: this.form.name12,
        currencyCode: this.form.name13,
        payment: this.form.name14,
        dealWay: this.form.name15,
        brands: this.form.name16,
        charterUrl: this.imageUrl1,
        agentCertifyUrl: this.imageUrl2
      };
      insertSupplier(data).then(res => {});
    }
  },
  created() {
    states().then(res => {
      this.states = res.result;
    });
    supplierType().then(res => {
      this.supplierType = res.result;
    });
    currencyCode().then(res => {
      this.currencyCode = res.result;
    });
    brand().then(res => {
      this.brand = res.result;
    });
  }
};
</script>

<style lang='scss'>
@import "./common.scss";
@include addModel;
</style>
