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
            <selects :pla="pla" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time">
            <p>指定时间段</p>
            <picker :time="creatTime"></picker>
            <picker :time="endTime"></picker>
          </div>
        </div>

        <!-- 部门 -->
        <div class="newCont-cent">
          <p class="newP">部门</p>
          <div class="time" style="width:150px;">
            <p>区域</p>
            <selects :pla="qy" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>销售部</p>
            <selects :pla="xs" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>采购部</p>
            <selects :pla="cg" @fnc="getValue" :options="opstions"></selects>
          </div>
        </div>

        <!-- 职员 -->
        <div class="newCont-cent">
          <p class="newP">职员</p>
          <div class="time" style>
            <p>区域</p>
            <selects :pla="qy" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style>
            <p>销售部</p>
            <selects :pla="cg" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style>
            <p>采购部</p>
            <selects :pla="cg" @fnc="getValue" :options="opstions"></selects>
          </div>
        </div>

        <!-- 产品 -->
        <div class="newCont-cent">
          <p class="newP">产品</p>
          <div class="time" style>
            <p>指定型号</p>
            <selects :pla="xh" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style>
            <p>品牌</p>
            <selects :pla="pp" @fnc="getValue" :options="opstions"></selects>
          </div>
        </div>

        <!-- 客户 -->
        <div class="newCont-cent">
          <p class="newP">客户</p>
          <div class="time" style>
            <p>指定客户名称</p>
            <selects :pla="kh" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>客户类别</p>
            <selects :pla="lb" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style="width:150px;">
            <p>客户分布</p>
            <selects :pla="xz" @fnc="getValue" :options="opstions"></selects>
          </div>
        </div>

        <!-- 供应商 -->
        <div class="newCont-cent" style="border-right:0;">
          <p class="newP">供应商</p>
          <div class="time" style>
            <p>指定供应商名称</p>
            <selects :pla="gyskh" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style="width:140px;">
            <p>供应商类别</p>
            <selects :pla="gyslb" @fnc="getValue" :options="opstions"></selects>
          </div>

          <div class="time" style="width:140px;">
            <p>供应商分布</p>
            <selects :pla="gysxz" @fnc="getValue" :options="opstions"></selects>
          </div>
        </div>
      </div>
      <div class="currency flex"><span style="margin-right:20px;margin-top:2px;">分析结果货币</span>  <selects :pla="hb" @fnc="getValue" :options="opstions"></selects></div>
      
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
      hb:"选择货币",
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
      opstions: [
        {
          value: "1",
          label: "今天"
        },
        {
          value: "2",
          label: "本周"
        },
        {
          value: "3",
          label: "本月"
        },
        {
          value: "4",
          label: "本季度"
        },
        {
          value: "5",
          label: "本年度"
        }
      ],
      opstions1: [
        {
          value: "选项4",
          label: "龙须面"
        }
      ],
      opstions2: [
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
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
      console.log(item.id);
    },
    getValue(value) {
      console.log(value);
    },
    hreData(){
      this.$router.push({path:'/analyze/dataAnalyze'})
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

.currency{
  margin-top: 20px;
}
</style>