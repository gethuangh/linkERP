<template>
  <div class="product-type-add">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="display: flex;justify-content: space-between;"
    >
      <div class="left">
        <div class="label-title">基础信息</div>
        <el-form-item label="型号" prop="name1">
          <el-input size="mini" v-model="ruleForm.name1"></el-input>
        </el-form-item>
        <el-form-item label="品牌" prop="name2">
          <el-select size="mini" v-model="ruleForm.name2" placeholder="请选择">
            <el-option
              v-for="item in productbrandall"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述" prop="name3">
          <el-input size="mini" v-model="ruleForm.name3"></el-input>
        </el-form-item>

        <div class="label-title">包装信息</div>
        <el-form-item label="包装类型" prop="name4">
          <el-select size="mini" v-model="ruleForm.name4" placeholder="请选择">
            <el-option
              v-for="item in packType"
              :key="item.id"
              :label="item.attrName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最小包装数量" prop="name5">
          <el-input size="mini" v-model="ruleForm.name5"></el-input>
        </el-form-item>

        <div class="label-title">供应情况</div>
        <el-form-item label="是否停产" prop="name6">
          <el-select size="mini" v-model="ruleForm.name6" placeholder="请选择">
            <el-option
              v-for="item in typess"
              :key="item.id"
              :label="item.attrName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <div class="label-title">技术信息</div>
        <el-form-item label="物料类别" prop="names">
          <el-button size="mini" plain icon="el-icon-plus">选择物料类别</el-button>
        </el-form-item>
        <el-form-item label="子类别" prop="names">
          <el-button size="mini" plain icon="el-icon-plus">选择子类别</el-button>
        </el-form-item>
      </div>

      <div class="right">
        <div class="label-title">价格策略</div>
        <el-form-item label="基础报价" prop="name7">
          <el-input size="mini" v-model="ruleForm.name7"></el-input>
        </el-form-item>
        <el-form-item label="零售报价" prop="name8">
          <el-input size="mini" v-model="ruleForm.name8"></el-input>
        </el-form-item>
        <el-form-item label="最低报价" prop="name9">
          <el-input size="mini" v-model="ruleForm.name9"></el-input>
        </el-form-item>

        <div class="label-title">库存预警</div>
        <el-form-item label="预警开关">
          <el-switch v-model="ruleForm.delivery" @change="change"></el-switch>
        </el-form-item>
        <el-form-item label="预警比例" prop="name10">
          <el-select size="mini" v-model="ruleForm.name10" placeholder="请选择">
            <el-option
              v-for="item in typesss"
              :key="item.id"
              :label="item.attrName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="success" plain>取 消</el-button>
      <el-button type="success" @click="submitForm('ruleForm')">确 定</el-button>
    </div>
  </div>
</template>

<script>
import bus from "@/assets/Bus";
import {
  update,
  productbrandall,
  packType,
  productmodeladd
} from "../../api/product";
export default {
  name: "productTypeAdd",
  components: {},
  data() {
    return {
      packType: null,
      ruleForm: {
        name1: null,
        name2: null,
        name3: null,
        name4: null,
        name5: null,
        name6: null,
        name7: null,
        name8: null,
        name9: null,
        name10: null,
        shortname: null,
        region: null,
        delivery: false,
        type: [],
        resource: null,
        desc: null
      },
      productbrandall: null,
      rules: {
        name1: [{ required: true, message: "型号不能为空", trigger: "blur" }],
        name2: [{ required: true, message: "品牌不能为空", trigger: "blur" }],
        name3: [{ required: true, message: "描述不能为空", trigger: "blur" }],
        name4: [
          { required: true, message: "包装类型不能为空", trigger: "blur" }
        ],
        name5: [
          { required: true, message: "最小包装数量不能为空", trigger: "blur" }
        ],
        name6: [
          { required: true, message: "是否停产不能为空", trigger: "blur" }
        ],
        name7: [
          { required: true, message: "基础报价不能为空", trigger: "blur" }
        ],
        name8: [
          { required: true, message: "零售报价不能为空", trigger: "blur" }
        ],
        name9: [
          { required: true, message: "最低报价不能为空", trigger: "blur" }
        ],
        name10: [
          { required: true, message: "预警比例不能为空", trigger: "blur" }
        ]
      },
      isStockWarning: 0,
      typess: [
        {
          id: 0,
          attrName: "在售"
        },
        {
          id: 1,
          attrName: "停产"
        },
        {
          id: 2,
          attrName: "即将停产"
        }
      ],
      typesss: [
        {
          id: 10,
          attrName: "10%"
        },
        {
          id: 20,
          attrName: "20%"
        },
        {
          id: 30,
          attrName: "30%"
        },
        {
          id: 40,
          attrName: "40%"
        },
        {
          id: 50,
          attrName: "50%"
        },
        {
          id: 60,
          attrName: "60%"
        },
        {
          id: 70,
          attrName: "70%"
        },
        {
          id: 80,
          attrName: "80%"
        },
        {
          id: 90,
          attrName: "90%"
        },
        {
          id: 100,
          attrName: "100%"
        }
      ]
    };
  },
  props: ["id", "type", "openEdits"],
  methods: {
    change(res) {
      this.isStockWarning = Number(res);
    },
    submitForm(formName) {
      console.log(this.id);
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (!this.type) {
            console.log("修改");
            let data = {
              id: this.id,
              modelName: this.ruleForm.name1,
              brandId: this.ruleForm.name2,
              description: this.ruleForm.name3,
              packTypeId: this.ruleForm.name4,
              minPackNum: this.ruleForm.name5,
              isSelling: this.ruleForm.name6,
              basePrice: this.ruleForm.name7,
              salePrice: this.ruleForm.name8,
              minPrice: this.ruleForm.name9,
              StockWarningPercent: this.ruleForm.name10,
              isStockWarning: this.isStockWarning
            };
            console.log(data);
            update(data).then(res => {
              console.log(res);
            });
          } else {
            console.log("新增");
            let data = {
              modelName: this.ruleForm.name1,
              brandId: this.ruleForm.name2,
              description: this.ruleForm.name3,
              packTypeId: this.ruleForm.name4,
              minPackNum: this.ruleForm.name5,
              isSelling: this.ruleForm.name6,
              basePrice: this.ruleForm.name7,
              salePrice: this.ruleForm.name8,
              minPrice: this.ruleForm.name9,
              StockWarningPercent: this.ruleForm.name10,
              isStockWarning: this.isStockWarning
            };
            console.log(data);
            productmodeladd(data).then(res => {
              console.log(res);
            });
          }
          this.$emit("getList");
          bus.$on("openssAdd", () => {
            this.openssAdd = false;
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  watch: {
    openEdits: function() {
      if (this.openEdits.id != null) {
        console.log(this.openEdits);
        this.ruleForm.name1 = this.openEdits.modelName;
        this.ruleForm.name2 = this.openEdits.brandId;
        this.ruleForm.name3 = this.openEdits.description;
        this.ruleForm.name4 = this.openEdits.packTypeId;
        this.ruleForm.name5 = this.openEdits.minPackNum;
        this.ruleForm.name6 = this.openEdits.isSelling;
        this.ruleForm.name7 = this.openEdits.basePrice;
        this.ruleForm.name8 = this.openEdits.salePrice;
        this.ruleForm.name9 = this.openEdits.minPrice;
        this.ruleForm.name10 = this.openEdits.stockWarningPercent;
        this.ruleForm.delivery = Boolean(this.openEdits.isStockWarning);
      }
    }
  },
  created() {
    bus.$on("xxx", () => {});
    productbrandall().then(res => {
      this.productbrandall = res.result;
    });
    packType().then(res => {
      this.packType = res.result;
    });
  }
};
</script>

<style lang="scss">
.product-type-add {
  padding: 0 50px;

  .el-form-item {
    margin-bottom: 10px;
  }

  .el-form-item__label {
    text-align: left;
  }

  .label-title {
    width: 50%;
    font-size: 16px;
    font-weight: 700;
    padding: 20px 0;
  }

  .el-input--suffix .el-input__inner {
    padding: 0 15px;
  }

  .el-input__inner:hover {
    border-color: $theme-color;
  }

  .el-button.is-plain:focus,
  .el-button.is-plain:hover {
    border-color: $theme-color;
    color: $theme-color;
  }

  .el-switch.is-checked .el-switch__core {
    color: $theme-color;
    background: $theme-color;
    border-color: $theme-color;
  }
}
</style>