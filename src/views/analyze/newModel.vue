<template>
  <div style="margin-left:20px;margin-top:20px;">
    <div class="newModel-box">
      <p>新建分析模型</p>

      <div class="newModel-cont flex">
        <!-- 左边 -->
        <div class="newCont-left">
          <p class="newP">分析内容</p>
          <div class="checkbox">
            <el-checkbox-group v-model="checkList">
              <div class="checkbox-m" v-for="item in label" :key="item.id">
                <el-checkbox @change="changeCheck(item)" v-model="item.id" :label="item.label"></el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
        </div>
        <!-- 中间部分 -->
        <!-- 时间 -->
        <div class="newCont-cent">
          <p class="newP">时间</p>
          <div class="time" style="width:120px;">
            <p>时间段</p>
            <selects :pla="pla" @fnc="getValue" @pick="getValue" :options="opstions1"></selects>
          </div>

          <div class="time">
            <p>指定时间段</p>
            <picker :time="creatTime" @timeq="timeq1"></picker>
            <picker :time="endTime" @timeq="timeq2"></picker>
          </div>
        </div>

        <!-- 部门 -->
        <div class="newCont-cent">
          <p class="newP">部门</p>
          <div class="time" style="width:150px;">
            <p>区域</p>
            <selects :pla="qy" @fnc="getValue1" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>销售部</p>
            <selects :pla="xs" @fnc="getValue2" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>采购部</p>
            <selects :pla="cg" @fnc="getValue3" :options="opstions"></selects>
          </div>
        </div>

        <!-- 职员 -->
        <div class="newCont-cent">
          <p class="newP">职员</p>
          <div class="time" style>
            <p>区域</p>
            <selects :pla="qy" @fnc="getValue4" :options="opstions"></selects>
          </div>

          <div class="time" style>
            <p>销售部</p>
            <selects :pla="cg" @fnc="getValue5" :options="opstions"></selects>
          </div>

          <div class="time" style>
            <p>采购部</p>
            <selects :pla="cg" @fnc="getValue6" :options="opstions"></selects>
          </div>
        </div>

        <!-- 产品 -->
        <div class="newCont-cent">
          <p class="newP">产品</p>
          <div class="time" style>
            <p>指定型号</p>
            <selects :pla="xh" @fnc="getValue7" :options="opstions"></selects>
          </div>

          <div class="time" style>
            <p>品牌</p>
            <selects :pla="pp" @fnc="getValue8" :options="opstions"></selects>
          </div>
        </div>

        <!-- 客户 -->
        <div class="newCont-cent">
          <p class="newP">客户</p>
          <div class="time" style>
            <p>指定客户名称</p>
            <selects :pla="kh" @fnc="getValue9" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>客户类别</p>
            <selects :pla="lb" @fnc="getValue10" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>客户分布</p>
            <selects :pla="xz" @fnc="getValue11" :options="opstions"></selects>
          </div>
        </div>

        <!-- 供应商 -->
        <div class="newCont-cent" style="border-right:0;">
          <p class="newP">供应商</p>
          <div class="time" style>
            <p>指定供应商名称</p>
            <selects :pla="gyskh" @fnc="getValue12" :options="opstions"></selects>
          </div>

          <div class="time" style="width:140px;">
            <p>供应商类别</p>
            <selects :pla="gyslb" @fnc="getValue13" :options="opstions"></selects>
          </div>

          <div class="time" style="width:140px;">
            <p>供应商分布</p>
            <selects :pla="gysxz" @fnc="getValue14" :options="opstions"></selects>
          </div>
        </div>
      </div>
      <div class="currency flex">
        <span style="margin-right:20px;margin-top:2px;">分析结果货币</span>
        <selects :pla="hb" @fnc="getValue15" :options="opstions"></selects>
      </div>

      <div class="bt" style="margin-top:20px;">
        <el-button @click="hreData" type="warning" size="mini">查看分析结果</el-button>
      </div>
    </div>

    <!-- <selects :options="opstions"></selects>
    <selects :options="opstions1"></selects>
    <selects :options="opstions2"></selects>-->
  </div>
</template>
<script>
import selects from "./component/select";
import picker from "./component/picker";
export default {
  data() {
    return {
      value2: "",
      value1: "",
      val1: "",
      val2: "",
      val3: "",
      val4: "",
      val5: "",
      val6: "",
      val7: "",
      val8: "",
      val9: "",
      val10: "",
      val12: "",
      val13: "",
      val14: "",
      val15: "",
      val11: "",
      hb: "选择货币",
      pla: "选择时间段",
      gyskh: "指定供应商名称",
      gyslb: "选择供应商类别",
      gysxz: "选择供应商分布",
      kh: "指定客户名称",
      lb: "选择客户类别",
      xz: "选择客户类别",
      xh: "指定型号",
      pp: "选择品牌",
      qy: "选择区域",
      xs: "选择部门",
      cg: "选择职员",
      creatTime: "起始日期",
      endTime: "终止日期",
      label: [
        {
          label: "客户询价",
          id: 1
        },
        {
          label: "销售报价",
          id: 2
        },
        {
          label: "销售订单",
          id: 3
        },
        {
          label: "采购报价",
          id: 4
        },
        {
          label: "采购订单",
          id: 5
        }
      ],
      checkList: [],
      opstions: [],
      opstions1: [
        {
          value: "今天",
          label: "今天"
        },
        {
          value: "本周",
          label: "本周"
        },
        {
          value: "本月",
          label: "本月"
        },
        {
          value: "本季度",
          label: "本季度"
        },
        {
          value: "本年度",
          label: "本年度"
        }
      ],
      opstions2: [
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      timequ: ""
    };
  },
  components: {
    selects,
    picker
  },
  mounted() {},
  methods: {
    //   多选取值
    changeCheck(item) {
      console.log(this.checkList);
    },
    getValue(value) {
      this.timequ = value;
    },
    getValue1(value) {
      this.val1 = value;
    },
    getValue2(value) {
      this.val2 = value;
    },
    getValue3(value) {
      this.val3 = value;
    },
    getValue4(value) {
      this.val4 = value;
    },
    getValue5(value) {
      this.val5 = value;
    },
    getValue6(value) {
      this.val6 = value;
    },
    getValue7(value) {
      this.val7 = value;
    },
    getValue8(value) {
      this.val8 = value;
    },
    getValue9(value) {
      this.val9 = value;
    },
    getValue10(value) {
      this.val10 = value;
    },
    getValue11(value) {
      this.val11 = value;
    },
    getValue12(value) {
      this.val12 = value;
    },
    getValue13(value) {
      this.val13 = value;
    },
    getValue14(value) {
      this.val14 = value;
    },
    getValue15(value) {
      this.val15 = value;
    },
    // 点击查看分析
    hreData() {
      sessionStorage.removeItem(data);
      let data = {
        startingTime: this.value1,
        endTime: this.value2,
        salesmanId: this.val5,
        buyerId: this.val6,
        brandId: this.val8,
        clientId: this.val9,
        category: this.val10,
        connectionCountry: this.val11,
        patternId: this.val7,
        supId: this.val12,
        supType: this.val13,
        vendorRelease: this.val14
      };
      this.$router.push({
        path: "/analyze/dataAnalyze"
      });
      // 当前日期
      let myDate = new Date();
      let dateString = myDate.toLocaleDateString();
      let content = {
        // 分析内容
        checkList: this.checkList,
        // 时间段
        timequ: this.timequ,
        // 当前时间
        dateString: dateString,
        // 分析结果货币
        rmb: this.val15
      };

      // 把下拉数据存到浏览器中
      sessionStorage.setItem("data", JSON.stringify(data));
      // 存储下一个页面需要直接显示的数据
      sessionStorage.setItem("content", JSON.stringify(content));
    },
    // 指定时间段
    timeq1(val) {
      this.value1 = val;
    },
    timeq2(val) {
      this.value2 = val;
    }
  }
};
</script>
<style  scoped>
.flex {
  display: flex;
}
.newModel-box {
  width: 1500px;
  padding: 25px 30px;
  box-sizing: border-box;
  border: 1px solid #777;
}
.newModel-box > p {
  font-size: 18px;
  text-decoration: underline;
  font-weight: 600;
  color: black;
}

.newModel-cont {
  margin-top: 25px;
}

.checkbox {
  margin-top: 20px;
}
.checkbox-m {
  margin-bottom: 5px;
}

/* 区域布局 */
.newCont-left {
  width: 140px;
  padding-bottom: 40px;
  border-right: 2px solid rgb(65, 195, 99);
}
.newP {
  font-size: 16px;
  font-weight: 600;
}

/* 中间 */
.newCont-cent {
  padding: 0 30px 20px;
}
.newCont-cent {
  font-size: 14px;
  border-right: 2px solid rgb(65, 195, 99);
}
.time {
  margin-top: 20px;
}
.time > p {
  margin-left: 5px;
  margin-bottom: 5px;
}
.time >>> .el-date-editor.el-input {
  width: 120px;
}
.time >>> .el-input--suffix .el-input__inner {
  padding-right: 24px;
}

.currency {
  margin-top: 20px;
}
</style>