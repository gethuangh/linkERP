<template>
  <el-form class="new-customer" label-width="85px">
    <div class="block-title">基本资料</div>
    <el-row :gutter="70">
      <el-col :span="8">
        <el-form-item label="客户代码">
          <el-input v-model="value1" style="width: 75px" class="left-input" placeholder="前缀"></el-input>
          <el-input v-model="value2" style="width: 75px" class="right-input" placeholder="数字"></el-input>
        </el-form-item>
        <el-form-item label="英文名称">
          <el-input v-model="value3" placeholder="请输入英文名称"></el-input>
        </el-form-item>
        <el-form-item label="中文名称">
          <el-input v-model="value4" placeholder="请输入中文名称"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="value5" clearable placeholder="请选择类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="国家">
          <el-select clearable v-model="value6" placeholder="请选择国家">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="value7" clearable placeholder="请选择类别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="网址">
          <el-input v-model="value8" placeholder="请输入网址"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="组织性质">
          <el-select v-model="value9" clearable placeholder="请选择组织性质">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="简称">
          <el-input v-model="value10" placeholder="请输入简称"></el-input>
        </el-form-item>
        <el-form-item label="级别">
          <el-select v-model="value11" clearable placeholder="请选择级别">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="行业">
          <el-select v-model="value12" clearable placeholder="请选择行业">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imageUrl1" :src="imageUrl1" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div class="el-upload__tip" slot="tip">客户公司LOGO</div>
        </el-upload>
      </el-col>
    </el-row>
    <div class="block-title">财务信息</div>
    <el-row :gutter="70">
      <el-col :span="8">
        <el-form-item label="付款方式">
          <el-select v-model="value13" clearable class="left-input">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="value14" clearable style="width: 85px" class="right-input">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结算币种">
          <el-select v-model="value15" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="运费支付">
          <el-select v-model="value16" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <div class="block-title">联系信息</div>
    <el-row :gutter="70">
      <el-col :span="8">
        <el-form-item label="联络人">
          <el-input v-model="value17" placeholder="请输入网址"></el-input>
        </el-form-item>
        <el-form-item label="联络地区">
          <el-select
            v-model="value18"
            clearable
            placeholder="国家"
            class="left-input"
            style="width: 135px"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-input v-model="value19" placeholder="地区" class="right-input" style="width: 153px"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="运费支付">
          <el-select v-model="value20" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="70">
      <el-col :span="16">
        <el-form-item label="地址">
          <el-input v-model="value21" type="textarea" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <div class="block-title">物流信息</div>
    <el-row :gutter="70">
      <el-col :span="8">
        <el-form-item label="收件人">
          <el-input v-model="value22" placeholder="请输入收件人"></el-input>
        </el-form-item>
        <el-form-item label="运输条款">
          <el-select v-model="value23" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-model="value24" label="快递">
          <el-select clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="电话">
          <el-input v-model="value25" placeholder="请输入电话">
            <el-select slot="prepend" placeholder="国家区号" style="width: 110px">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="交货地">
          <el-select v-model="value26" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="到付账号">
          <el-input v-model="value27" placeholder="请输入到付账号"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="70">
      <el-col :span="16">
        <el-form-item label="收件地址">
          <el-input v-model="value28" type="textarea" placeholder="请输入收件地址"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="70">
      <el-col :span="8">
        <el-form-item label="业务员">
          <el-input v-model="value29" placeholder="请输入业务员"></el-input>
        </el-form-item>
        <el-form-item label="日 期">
          <el-input v-model="value30" placeholder="请输入日期"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <div style="margin-left:500px">
      <el-button @click="quxiao">取 消</el-button>
      <el-button type="primary" @click="ok(data)">确 定</el-button>
    </div>
  </el-form>
</template>

<script>
import { customerAdd } from "../../../api/customer";
export default {
  data() {
    return {
      imageUrl1: "",
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
      value17: "",
      value18: "",
      value19: "",
      value20: "",
      value21: "",
      value22: "",
      value23: "",
      value24: "",
      value25: "",
      value26: "",
      value27: "",
      value28: "",
      value29: "",
      value30: "",
      form: {
        a: ""
      }
    };
  },
  methods: {
    quxiao() {
      this.$emit("quxiao");
    },
    ok() {
      var data = {
        customerCode: this.value1 + this.value2,
        englishName: this.value3,
        chineseName: this.value4,
        type: this.value5,
        country: this.value6,
        category: this.value7,
        url: this.imageUrl1,
        nature: this.value8,
        abbreviation: this.value9,
        level: this.value10,
        industry: this.value11,
        ompanyLogo: this.value12,
        paymentBefore: this.value13,
        paymentRear: this.value14,
        billingCurrency: this.value15,
        payMoney: this.value16,
        contactPerson: this.value17,
        connectionCountry: this.value18,
        connectionArea: this.value19,
        payMoney: this.value20,
        address: this.value21,
        recipient: this.value22,
        shippingTerms: this.value23,
        expressDelivery: this.value24,
        recipientPhone: this.value25,
        placeDelivery: this.value26,
        arriveAccount: this.value27,
        recipientAddress: this.value28,
        salesman: this.value29,
        date: this.value30
      };
      this.$emit("ok", data);
    },
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
    }
    // beforeAvatarUpload(file) {
    //     const isJPG = file.type === "image/jpeg";
    //     const isLt2M = file.size / 1024 / 1024 < 2;

    //     if (!isJPG) {
    //         this.$message.error("上传头像图片只能是 JPG 格式!");
    //     }
    //     if (!isLt2M) {
    //         this.$message.error("上传头像图片大小不能超过 2MB!");
    //     }
    //     return isJPG && isLt2M;
    // }
  }
};
</script>

<style lang='scss'>
.new-customer {
  .block-title {
    display: inline-block;
    padding: 6px 0;
    margin-bottom: 20px;
    margin-left: 25px;
    color: $theme-color;
    font-weight: bold;
    border-bottom: 2px solid $theme-color;
  }
  .left-input input {
    border-radius: 4px 0 0 4px;
  }
  .right-input input {
    border-radius: 0 4px 4px 0;
  }
  .el-form-item {
    margin-bottom: 15px;
  }
  // .el-form-item__label, .el-input {
  //     font-size: 12px;
  // }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 42px;
    color: #8c939d;
    width: 340px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .avatar {
    width: 340px;
    height: 200px;
    display: block;
  }
}
</style>
