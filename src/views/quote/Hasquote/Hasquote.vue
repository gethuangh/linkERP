<template>
  <!--报价—— 已报价 -->
  <div class>
    <div class="has-box">
      <!-- 头部检索栏 -->
      <div class="all-header">
        <div class="sear-box input-type">
          <div class="sear-by" style="width:95px;">
            <div class="sear-top">日期</div>
            <div class="sear-btt">
              <el-date-picker
                v-model="value"
                type="datetime"
                value-format="yyyy-MM-dd"
                placeholder="选择时间"
                size="mini"
                width="100"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>
          <div class="sear-by" style="width:170px;">
            <div class="sear-top" style="text-align:left;margin-left:5px;">原厂型号</div>
            <div class="sear-btt">
              <el-select @click.native="yc" size="mini" v-model="value1" placeholder>
                <el-option
                  v-for="item in product"
                  :key="item.id"
                  :label="item.modelName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:170px;">
            <div class="sear-top">客户</div>
            <div class="sear-btt">
              <el-select @click.native="kh" size="mini" v-model="value2" placeholder>
                <el-option
                  v-for="item in client"
                  :key="item.id"
                  :label="item.customerCode"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>

          <div class="sear-by" style="width:95px;">
            <div class="sear-top">起始日期</div>
            <div class="sear-btt">
              <el-date-picker
                v-model="value3"
                type="datetime"
                placeholder="选择时间"
                value-format="yyyy-MM-dd"
                size="mini"
                width="100"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>
          <div class="sear-by" style="width:95px;">
            <div class="sear-top" style="text-align:left;margin-left:5px;">结束日期</div>
            <div class="sear-btt">
              <el-date-picker
                v-model="value4"
                type="datetime"
                value-format="yyyy-MM-dd"
                placeholder="选择时间"
                size="mini"
                width="100"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>
          <div class="sear-by" style="width:70px;">
            <div class="sear-top">品牌</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="pp" v-model="value5" clearable placeholder>
                <el-option
                  v-for="item in brand"
                  :key="item.id"
                  size="mini"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="btn">
          <el-button type="success" size="mini" @click="sear">检索</el-button>
          <el-button type="info" @click="btn()" size="mini">清空</el-button>
          <!-- <el-button type="warning" size="mini">分析</el-button> -->
        </div>
      </div>
      <!-- tab内容 -->
      <div class="from-box" v-for="item in tableData" :key="item.data">
        <div class="all-from">
          <div class="from-header">
            <span class="span-text">{{item.buyerName}} - {{item.clientName}}</span>
            <div class="he-left">
              <i>
                <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
                  <i class="icon copy iconfont" @click.stop="copyCode()">&#xe603;</i>
                </el-tooltip>
              </i>
            </div>
          </div>
          <el-table
            @row-click="xiala"
            border
            size="mini"
            show-header
            :resizable="false"
            ref="filterTable"
            :data="item.salesOfferList"
            :highlight-current-row="bc"
            style="width: 100%"
          >
            <el-table-column type="index" label="Ln." :resizable="false" width="40"></el-table-column>
            <el-table-column
              :resizable="false"
              align="center"
              prop="createTime"
              label="日期"
              width="100"
              @click="s(row)"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="number"
              label="报价单号"
              :resizable="false"
              width="120"
            >
              <template scope="scope">
                <span style="color:blue;">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              header-align="center"
              :resizable="false"
              prop="clientModel"
              label="客户型号"
              width="170"
            >
              <template scope="scope">
                <span style="color:rgb(65,195,99);">{{ scope.row.clientModel }}</span>
              </template>
            </el-table-column>

            <el-table-column
              header-align="center"
              :resizable="false"
              prop="productModelName"
              label="原厂型号"
              width="170"
            >
              <template scope="scope">
                <span style="color:rgb(65,195,99);">
                  {{
                  scope.row.productModelName
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="brandName"
              label="品牌"
              width="90"
            >
              <template scope="scope">
                <span style="color:blue;">
                  {{
                  scope.row.brandName
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              header-align="center"
              align="right"
              :resizable="false"
              prop="enquiryNum"
              label="询价数量"
              width="85"
            ></el-table-column>
            <el-table-column
              header-align="center"
              align="right"
              :resizable="false"
              prop="offerNum"
              label="报价数量"
              width="85"
            ></el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="batchNumberRequire"
              label="批号"
              width="80"
            ></el-table-column>

            <el-table-column
              align="center"
              :resizable="false"
              prop="buyerPrice"
              label="成本单价"
              width="80"
            ></el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="taxRateString"
              label="税率"
              width="60"
            ></el-table-column>
            <el-table-column
              align="right"
              :resizable="false"
              prop="offerPriceTotal"
              label="报价总价"
              width="100"
            ></el-table-column>
            <el-table-column
              align="right"
              :resizable="false"
              prop="profitMarginString"
              label="毛利润率"
              width="80"
            >
              <template scope="scope">
                <span style="font-weight:800;">
                  {{
                  scope.row.profitMarginString
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="deliveryRequireString"
              label="货期"
              width="100"
            ></el-table-column>
            <el-table-column align="center" :resizable="false" prop="salesmanName" label="销售员"></el-table-column>
          </el-table>
        </div>
        <el-button type="success" @click.stop="dialogTableVisible1=true" size="mini">查看报价单</el-button>
      </div>
      <el-drawer title :visible.sync="table" direction="btt" class="pull">
        <!-- 弹窗 -->
        <redactPop
          @all="all"
          @getcurrentChange="getcurrentChange"
          :productModelId="productModelId"
          :tableData1="info"
          :infobuyerOfferList="infobuyerOfferList"
          :salesOffer="salesOffer"
        ></redactPop>
      </el-drawer>
    </div>
    <div class="completedQuote">
      <el-dialog
        :append-to-body="true"
        title="已生成报价单"
        width="1500px"
        :visible.sync="dialogTableVisible1"
      >
        <completedQuote></completedQuote>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import redactPop from "../component/redactPop/readctPop";
import completedQuote from "../component/completedQuote/completedQuote";
import { groupList, product, info, salesOffer } from "../../../api/quote";
import { client, brand } from "../../../api/enquiry";
export default {
  data() {
    return {
      dialogTableVisible1: false,
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      table: false,
      bc: true,
      optionAreas: ["1", "2", "3"],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value: "",
      options: ["1", "2"],
      tableData: [],
      tableData1: [],
      groupList: [],
      client: [],
      brand: [],
      product: [],
      salesOfferId: "",
      info: [],
      infobuyerOfferList: [],
      salesOffer: [],
      num: 5,
      productModelId: null
    };
  },
  components: {
    redactPop,
    completedQuote
  },
  created() {
    this.sear();
  },
  methods: {
    all() {
      let data = { productModelId: this.productModelId, num: 100 };
      salesOffer(data).then(res => {
        this.salesOffer = res.result;
        console.log(this.salesOffer);
      });
    },
    getDate1(data) {
      this.tableData1 = data;
    },
    btn() {
      this.delete(["value", "value1", "value2", "value3", "value5", "value4"]);
    },
    // 下拉
    xiala(row, event, column) {
      this.table = true;
      // 预览报价
      this.salesOfferId = { salesOfferId: row.id };
      info(this.salesOfferId).then(res => {
        this.info = res.result;
        this.infobuyerOfferList = res.result[0].buyerOfferList;
      });
      // 历史报价
      this.productModelId = row.productModelId;
      let data = { productModelId: this.productModelId, num: this.num };
      salesOffer(data).then(res => {
        this.salesOffer = res.result;
        console.log(this.salesOffer);
      });
    },
    // 复制
    copyCode(scope) {
      this.copy(scope.row.date);
    },
    // 检索
    sear() {
      let data = {
        date: this.value,
        productModelId: this.value1,
        clientId: this.value2,
        startTime: this.value3,
        endTime: this.value4,
        brandId: this.value5
      };
      groupList(data).then(res => {
        this.tableData = res.result.list;
      });
    },
    // 客户
    kh() {
      if (this.client == "") {
        client().then(res => {
          this.client = res.result;
          console.log(this.client);
        });
      }
    },
    // 品牌
    pp() {
      if (this.brand == "") {
        brand().then(res => {
          this.brand = res.result;
          console.log(this.brand);
        });
      }
    },
    // 原厂型号
    yc() {
      if (this.product == "") {
        product().then(res => {
          this.product = res.result;
          console.log(this.product);
        });
      }
    },
    //getcurrentChange
    getcurrentChange(val) {
      let data = {
        productModelId: this.productModelId,
        num: this.num,
        page: val
      };
      salesOffer(data).then(res => {
        this.salesOffer = res.result;
        console.log(this.salesOffer);
      });
    }
  }
};
</script>
<style scoped src="../../quote/inquery/inquery.css"></style>