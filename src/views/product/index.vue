<template>
  <div>
    <div class="top-label">
      <div class="label-left">
        <p>原厂型号</p>
        <el-input size="mini" v-model="input" placeholder="请输入内容"></el-input>
      </div>
      <div class="label-left">
        <p>品牌</p>
        <el-select size="mini" v-model="value" placeholder="请选择">
          <el-option v-for="item in brandAll" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </div>
      <div class="label-left">
        <p></p>
        <el-button size="mini" type="success" @click="getInfo">检索</el-button>
      </div>
      <div class="label-left">
        <p></p>
        <el-button size="mini" type="info" @click="empty" plain>清空</el-button>
      </div>
      <!-- <div class="label-left">
                <p></p>
                <el-button size="mini" type="info" plain @click="importExls">测试</el-button>
      </div>-->
    </div>
    <el-row>
      <el-col class="title">
        产品
        <i>(12986)</i>
      </el-col>
    </el-row>

    <el-row class="alphabetical-order">
      <span v-for="(value,name) in alphabeticalindex" :key="name">{{ name }}</span>
    </el-row>

    <el-row v-for="(item,name) in alphabeticalindex" :key="name" class="alphabetical-item">
      <div class="alphabetical-item-title">{{ name }}</div>
      <div class="alphabetical-item-cont">
        <div v-for="value in item" :key="value.id">
          <el-image style="width: 110px; height: 40px" :src="value.brandLogoUrl" fit="fill"></el-image>
          <p>
            {{ value.brandName }}
            <i>({{ value.productModelNum }})</i>
          </p>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import { productbrandall, productlist, test } from "@/api/product";

export default {
  name: "product",
  data() {
    return {
      input: "",
      value: "",

      //下拉框数据
      brandAll: [],

      //字母索引
      alphabeticalindex: [],

      optionsFour: [
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          brandName: "ALTERA",
          brandNum: "483"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          brandName: "ATMEL",
          brandNum: "263"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          brandName: "ADI",
          brandNum: "541"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          brandName: "ALTERA",
          brandNum: "483"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          brandName: "ATMEL",
          brandNum: "263"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          brandName: "ADI",
          brandNum: "541"
        }
      ]
    };
  },
  methods: {
    empty() {
      this.input = "";
      this.value = "";
    },
    getInfo() {
      let params = {
        modelName: this.input,
        brandId: this.value
      };
      productlist(params).then(res => {
        console.log(res);
        this.alphabeticalindex = res.result;
      });
    }

    // test() {
    //   let params = {
    //     salesOfferId: 4
    //   }
    //   test(params).then( res => {

    //   })

    // }
    // importExls() {
    //     // 设置当前日期
    //     let time = new Date();
    //     let year = time.getFullYear();
    //     let month = time.getMonth() + 1;
    //     let day = time.getDate();
    //     let name = year + "-" + month + "-" + day;

    //     let data = {
    //         productModelId: 6
    //     }

    //     test(data).then(res => {
    //         let blob = new Blob([res], {
    //             type: "application/octet-stream"
    //         });

    //         let url = window.URL.createObjectURL(blob);
    //         let fileName = "下載測試" + name + ".xls";
    //         if ("download" in document.createElement("a")) {
    //             const a = document.createElement("a");
    //             a.href = url;
    //             a.download = fileName;
    //             a.style.display = "none";
    //             document.body.appendChild(a);
    //             a.click();
    //             URL.revokeObjectURL(a.href);
    //             document.body.removeChild(a);
    //         } else {
    //             navigator.msSaveBlob(blob,fileName);
    //         }
    //     });
    // }
  },
  created() {
    this.getInfo();
    productbrandall().then(res => {
      this.brandAll = res.result;
    });
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: auto;
}

.top-label {
  margin-bottom: 20px;
  text-align: left;
  display: flex;
}

.label-left {
  padding-right: 10px;
}

.label-left p {
  padding: 0 4px;
  margin: 0;
  height: 25px;
  line-height: 25px;
}

.title {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 16px;

  i {
    color: $theme-color;
  }
}

.alphabetical-order {
  width: 100%;
  background: #e6e9f0;
  padding: 5px 0;
  font-size: 12px;
  font-weight: 700;
  border-left: 2px solid $theme-color;

  margin-bottom: 40px;

  span {
    padding-right: 25px;
  }
  span:hover {
    cursor: pointer;
    color: $theme-color;
  }
}

.alphabetical-item {
  margin-bottom: 20px;
}

.alphabetical-item-title {
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid $theme-color;
  padding-left: 3px;
  margin-bottom: 20px;
}

.alphabetical-item-cont {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;

  > div {
    padding-right: 80px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      width: 150px;
      text-align: center;
    }

    i {
      padding-left: 10px;
      color: $theme-color;
    }
  }
}
</style>