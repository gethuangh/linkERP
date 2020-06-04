<template>
  <div>
    <!-- 下拉 -->
    <div class="xiala">
      <!-- 采购报价 -->
      <div class="xiala-top">
        <el-button type="success" size="mini">采购报价</el-button>
        <el-table
          :cell-class-name="changeCellStyle"
          border
          size="mini"
          show-header
          :resizable="false"
          ref="filterTable"
          :data="copyBuyer"
          style="width: 100%"
        >
          <el-table-column algin="center" type="index" label="Ln." :resizable="false" width="35"></el-table-column>
          <el-table-column
            :resizable="false"
            sortable
            prop="number"
            label="采购报价单号"
            width="120"
            algin="center"
            @click="s(row)"
          >
            <template scope="scope">
              <span v-if="hidee" style="color:blue;">{{ scope.row.number}}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.number"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="data" label="日期" sortable :resizable="false" width="120">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.data }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.data"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="clientModel" label="客户型号" width="160">
            <template scope="scope">
              <span v-if="hidee" style="color:rgb(65,195,99);">
                {{
                scope.row.clientModel
                }}
              </span>
              <el-input size="mini" v-else placeholder v-model="scope.row.clientModel"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            prop="originalModel"
            label="原厂型号"
            width="190"
          >
            <template scope="scope">
              <span v-if="hidee" style="color:rgb(65,195,99);">
                {{
                scope.row.originalModel
                }}
              </span>
              <el-input size="mini" v-else placeholder v-model="scope.row.originalModel"></el-input>
            </template>
          </el-table-column>

          <el-table-column :resizable="false" prop="brandName" label="品牌" width="74">
            <template scope="scope">
              <span v-if="hidee" style="color:blue;">{{ scope.row.brandName }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.brandName"></el-input>
            </template>
          </el-table-column>

          <el-table-column sortable :resizable="false" prop="enquiryNum" label="询价数量" width="100">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.enquiryNum }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.enquiryNum"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="offerNum" label="报价数量" width="100">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.offerNum }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.offerNum"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            prop="batchNumberRequire"
            label="批号"
            width="74"
          >
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.batchNumberRequire }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.batchNumberRequire"></el-input>
            </template>
          </el-table-column>

          <el-table-column sortable :resizable="false" prop="name" label="币别" width="74">
            <template slot-scope="scope">
              <div class="bibie">
                <!-- 币别下拉 -->
                <el-select size="mini" @click.native="bb" v-model="scope.row.currency" clearable>
                  <template v-if="currencyCode.length == 0">
                    <el-option :label="scope.row.currencyValue" :value="scope.row.currency"></el-option>
                  </template>
                  <template v-else>
                    <el-option
                      :clearable="whit"
                      v-for="item in currencyCode"
                      :key="item.id"
                      size="mini"
                      :label="item.attrName"
                      :value="item.id"
                    ></el-option>
                  </template>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="price" label="单价" width="74">
            <template scope="scope">
              <span v-if="hidee" style=" font-weight: 800;">{{ scope.row.price }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" align="center" prop="name" label="税率" width="50">
            <template slot-scope="scope">
              <div class="bibie" style="text-align:center">
                <el-select
                  size="mini"
                  @click.native="sl"
                  v-model="scope.row.taxRate"
                  clearable
                  placeholder
                >
                  <!-- 税率下拉 -->
                  <template v-if="taxRate.length == 0">
                    <el-option :label="scope.row.taxRateValue" :value="scope.row.taxRate"></el-option>
                  </template>
                  <template v-else>
                    <el-option
                      :clearable="whit"
                      v-for="item in taxRate"
                      :key="item.id"
                      size="mini"
                      :label="item.attrName"
                      :value="item.id"
                    ></el-option>
                  </template>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            prop="deliveryRequireValue"
            label="货期"
            width="105"
          >
            <template slot-scope="scope">
              <div class="bibie">
                <!-- 货期下拉 -->
                <el-select
                  size="mini"
                  @click.native="hq"
                  v-model="scope.row.deliveryRequire"
                  clearable
                >
                  <template v-if="enquiryDeliveryRequire.length == 0">
                    <el-option
                      :label="scope.row.deliveryRequireValue"
                      :value="scope.row.deliveryRequire"
                    ></el-option>
                  </template>
                  <template v-else>
                    <el-option
                      :clearable="whit"
                      v-for="item in enquiryDeliveryRequire"
                      :key="item.id"
                      size="mini"
                      :label="item.attrName"
                      :value="item.id"
                    ></el-option>
                  </template>
                </el-select>
              </div>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="spq" label="SPQ" width="60">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.spq }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.spq"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="moq" label="MOQ" width="74">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.moq }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.moq"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="supName" label="供应商" width="145">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.supName }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.supName"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="buyerName" label="采购员" width="100">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.buyerName }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.buyerName"></el-input>
            </template>
          </el-table-column>
          <el-table-column sortable :resizable="false" prop="buyerRemarks" label="采购备注" width="145">
            <template scope="scope">
              <span v-if="hidee">{{ scope.row.buyerRemarks }}</span>
              <el-input size="mini" v-else placeholder v-model="scope.row.buyerRemarks"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div class="btn-flex" v-if="show">
          <div class="btn-img" @click="addtable">
            <i class="el-icon-plus"></i>
          </div>
          <div class="btt-btn">
            <el-button type="success" size="mini" @click="hold">保存</el-button>
            <el-button type="primary" size="mini" @click="modi">修改</el-button>
            <el-button v-if="sh" type="info" size="mini" @click="rem">清空</el-button>
          </div>
        </div>
      </div>

      <!-- 历史报价 -->
      <div class="xiala-btt">
        <el-button type="success" size="mini">历史报价</el-button>
        <span class="btt-bj">
          <!-- <i><<</i>(Page 1 of 2) -->
          <!-- <i>>></i> -->
          <a href="javascript:;" @click="all">查看全部</a>
          <a href="javascript:;" @click="exportHistory">(导出全部)</a>
        </span>
        <el-table
          border
          size="mini"
          show-header
          :resizable="false"
          ref="filterTable"
          :data="list"
          style="width: 100%"
        >
          <el-table-column algin="center" type="index" label="Ln." :resizable="false" width="35"></el-table-column>
          <el-table-column
            :resizable="false"
            sortable
            prop="date"
            label="采购报价单号"
            width="125"
            @click="s(row)"
          >
            <template scope="scope">
              <span style="color:blue;">{{ scope.row.number }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="data" label="日期" sortable :resizable="false" width="120"></el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            prop="originalModel"
            label="原厂型号"
            width="190"
          >
            <template scope="scope">
              <span style="color:rgb(65,195,99);">
                {{
                scope.row.originalModel
                }}
              </span>
            </template>
          </el-table-column>

          <el-table-column sortable :resizable="false" prop="offerNum" label="报价数量" width="90"></el-table-column>

          <el-table-column
            sortable
            :resizable="false"
            prop="batchNumberRequire"
            label="批号"
            width="90"
          ></el-table-column>
          <el-table-column sortable :resizable="false" prop="currencyValue" label="币别" width="80"></el-table-column>
          <el-table-column sortable :resizable="false" prop="price" label="单价" width="74"></el-table-column>

          <el-table-column sortable :resizable="false" prop="taxRateValue" label="税率" width="60"></el-table-column>
          <el-table-column
            sortable
            :resizable="false"
            prop="deliveryRequireValue"
            label="货期"
            width="100"
          ></el-table-column>
          <el-table-column sortable :resizable="false" prop="supName" label="供应商" width="150"></el-table-column>
          <el-table-column :resizable="false" prop="tag" label="选用" width="55">
            <template scope="scope">
              <i class="icon tijiao iconfont" @click="xuanyon(scope)">&#xe637;</i>
            </template>
          </el-table-column>
          <!-- <el-table-column sortable :resizable="false" prop="name" label="供应商" width="160"></el-table-column> -->
          <el-table-column sortable :resizable="false" prop="buyerName" label="采购员" width="85"></el-table-column>
          <el-table-column sortable :resizable="false" prop="buyerRemarks" label="采购备注" width="200"></el-table-column>
          <el-table-column sortable :resizable="false" prop="spq" label="SPQ" width="76"></el-table-column>
          <el-table-column sortable :resizable="false" prop="moq" label="MOQ"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import {
  InsertOfferBuyer,
  enquiryDeliveryRequire,
  taxRate,
  currencyCode,
  historyOfferExport
} from "../../../../api/enquiry";
export default {
  data() {
    return {
      hidee: true,
      sh: true,
      list: [],
      taxRate: [],
      // show:true,
      counter: 0,
      row: [],
      enquiryDeliveryRequire: [],
      copyBuyer: [],
      value: "",
      currencyCode: []
    };
  },

  props: ["result", "show", "clientModelid", "clientModel"],

  watch: {
    result: "getResult"
  },
  created() {
    // console.log("1");
  },
  methods: {
    all() {
      this.$emit("all");
    },
    // 导出历史报价
    exportHistory() {
      console.log(this.clientModelid, this.clientModel);
      this.importExls();
    },
    importExls() {
      // 设置当前日期
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let name = year + "-" + month + "-" + day;

      historyOfferExport({
        enquiryId: this.clientModelid,
        clientModel: this.clientModel
      }).then(res => {
        let blob = new Blob([res], {
          type: "application/octet-stream"
        });
        let url = window.URL.createObjectURL(blob);
        let fileName = "全部报价" + name + ".xls";
        if ("download" in document.createElement("a")) {
          const a = document.createElement("a");
          a.href = url;
          a.download = fileName;
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(a.href);
          document.body.removeChild(a);
        } else {
          navigator.msSaveBlob(blob, fileName);
        }
      });
    },
    // 获取result
    getResult() {
      this.buyerModels = this.result.buyerModels;
      this.list = this.result.history.list;
      // console.log(this.list)
      this.copyBuyer = JSON.parse(JSON.stringify(this.result.buyerModels));
    },
    // 添加一行
    addtable() {
      let row = {};
      this.copyBuyer.push(row);
    },
    // 改变单元格背景色
    changeCellStyle({ row, column, rowIndex, columnIndex }) {
      //第八列添加 red 类
      if (6 < columnIndex && columnIndex < 13) {
        return "red";
      }
      //某一行其中的一个变量applies值如果大于0，并且在第六列，即确定一个具体的单元格需要确定行和列
      if (parseFloat(row.applies) > 0 && columnIndex == 5) {
        return "red";
      }
    },
    // 清空
    rem() {
      this.copyBuyer = [];
      this.value = "";
      // 清空完
      this.copyBuyer = JSON.parse(JSON.stringify(this.result.buyerModels));
    },
    // 选用
    xuanyon(data) {
      let tableData1 = this.copyBuyer;
      let arr = false;
      let counter = 0;
      let copy = JSON.parse(JSON.stringify(data.row));
      copy.id = null;
      for (let i = 0; i < tableData1.length; i++) {
        let item = tableData1[i];
        // 判断数组是否有值
        if (item.id == undefined) {
          arr = true;
          counter = i;
          break;
        }
      }
      if (arr) {
        this.$set(tableData1, counter, copy);
      } else {
        tableData1.push(copy);
      }
    },
    // 修改
    modi() {
      this.hidee = !this.hidee;
      this.sh = true;
    },
    // 保存
    hold() {
      this.hidee = true;
      let data = { enquiryId: this.clientModelid, buyerModels: this.copyBuyer };
      // 隐藏清除
      this.sh = false;
      InsertOfferBuyer(data).then(res => {});
    },
    // 货期要求
    hq() {
      if (this.enquiryDeliveryRequire == "") {
        enquiryDeliveryRequire().then(res => {
          this.enquiryDeliveryRequire = res.result;
        });
      }
    },
    whit(val) {
      console.log(val);
    },
    // 税率
    sl() {
      if (this.taxRate == "") {
        taxRate().then(res => {
          this.taxRate = res.result;
        });
      }
    },
    // 币别
    bb() {
      if (this.currencyCode == "") {
        currencyCode().then(res => {
          this.currencyCode = res.result;
        });
      }
    }
    // hqs(id,row){
    //   console.log(id,row)
    // }
  }
};
</script>
<style scoped src="../../unfinished/index.css"></style>