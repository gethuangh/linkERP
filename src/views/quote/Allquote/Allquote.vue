<template>
  <!-- 报价-全部报价 -->
  <div>
    <div class="all-box">
      <div class="all-header">
        <div class="sear-box">
          <div class="sear-by" style="width:95px;">
            <div class="sear-top">日期</div>
            <div class="sear-btt">
              <el-date-picker
                v-model="value"
                type="datetime"
                placeholder="选择时间"
                size="mini"
                width="100"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>
          <div class="sear-by" style="width:95px;">
            <div class="sear-top">起始日期</div>
            <div class="sear-btt">
              <el-date-picker
                v-model="value1"
                value-format="yyyy-MM-dd"
                type="datetime"
                placeholder="选择时间"
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
                v-model="value2"
                type="datetime"
                placeholder="选择时间"
                value-format="yyyy-MM-dd"
                size="mini"
                width="100"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>

          <div class="sear-by" style="width:170px;">
            <div class="sear-top">客户</div>
            <div class="sear-btt">
              <el-select @click.native="kh" size="mini" v-model="value3" placeholder>
                <el-option
                  v-for="item in client"
                  :key="item.id"
                  :label="item.customerCode"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:170px;">
            <div class="sear-top" style="text-align:left;margin-left:5px;">原厂型号</div>
            <div class="sear-btt">
              <el-select @click.native="yc" size="mini" v-model="value4" placeholder>
                <el-option
                  v-for="item in product"
                  :key="item.id"
                  :label="item.modelName"
                  :value="item.id"
                ></el-option>
              </el-select>
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
          <!-- <div class="sear-by" style="width:170px;">
            <div class="sear-top">业务部门</div>
            <div class="sear-btt">
              <el-select size="mini" v-model="value" placeholder>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>-->
          <div class="sear-by" style="width:85px;">
            <div class="sear-top">销售员</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="xsy" v-model="value6" placeholder>
                <el-option
                  v-for="item in selectData"
                  :key="item.id"
                  :label="item.realName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="sear-by" style="width:85px;">
            <div class="sear-top">货期</div>
            <div class="sear-btt">
              <el-select size="mini" @click.native="hq" v-model="value7" clearable placeholder>
                <el-option
                  v-for="item in enquiryDeliveryRequire"
                  :key="item.id"
                  size="mini"
                  :label="item.attrName"
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
      <div class="all-cont">
        <div class="all-cont-header">
          <div class="flex">
            <el-button type="success" size="mini">历史报价</el-button>
            <span class="btt-bj flex">
              <Pagination
                @currentChange="currentChange"
                :total="total"
                :layout="layout"
                :next="next"
                :prev="prev"
                :pageSize="pageSize"
              ></Pagination>
              <div style="line-height: 30px;">
                <a href="javascript:;" @click="lookAll=true">查看全部</a>
                <a href="javascript:;" @click="getExport">(导出全部)</a>
              </div>
            </span>
          </div>
        </div>
        <div class="all-from">
          <el-table
            border
            size="mini"
            show-header
            :resizable="false"
            ref="filterTable"
            :data="tableData"
            :highlight-current-row="bc"
            style="width: 100%"
          >
            <el-table-column type="index" label="Ln." :resizable="false" width="40"></el-table-column>
            <el-table-column
              :resizable="false"
              align="center"
              prop="dateString"
              label="日期"
              width="100"
              @click="s(row)"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="number"
              label="采购报价单号"
              :resizable="false"
              width="120"
            >
              <template scope="scope">
                <span style="color:blue;">{{ scope.row.number }}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              :resizable="false"
              prop="clientName"
              label="客户名称"
              width="120"
              sortable
            >
              <!-- <template slot-scope="scope" slot="header">
                <el-dropdown>
                  <span class="el-dropdown-link" style="color:#909399;">
                    客户名称
                    <i class="el-icon-arrow-down el-icon--right" style></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>-->
            </el-table-column>

            <el-table-column
              align="center"
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
              width="70"
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
              label="成本价"
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
            <el-table-column
              align="center"
              :resizable="false"
              prop="salesmanName"
              label="销售员"
              width="100"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <el-dialog width="1400px" title="询价单 - 新增" :visible.sync="openssAdd">
      <Addenquiry></Addenquiry>
    </el-dialog>
  </div>
</template>
<script>
import bus from "@/assets/Bus";
import {
  product,
  selectData,
  salesOffer,
  salesOfferExport
} from "../../../api/quote";
import { client, brand, enquiryDeliveryRequire } from "../../../api/enquiry";
import Pagination from "../../../components/Pagination";
import Addenquiry from "./../component/addEnquiry/addEnquiry";
export default {
  data() {
    return {
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
      optionAreas: ["1", "2", "3"],
      selectArea: "",
      bc: true,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value: "",
      value5: "",
      value6: "",
      value7: "",
      options: ["1", "2"],
      tableData: [],
      enquiryDeliveryRequire: [],
      client: [],
      brand: [],
      product: [],
      selectData: [],
      next: ">>",
      prev: "<<",
      layout: "prev, pager, next, total",
      total: 0,
      pageSize: 10,
      openssAdd: false,
      pages: 0,
      pages: 1,
      pageNum: 1,
      lookAll: false,
      onOff: false
    };
  },
  components: { Pagination, Addenquiry },
  created() {
    this.sear();
    bus.$on("openssAdd", () => {
      this.openssAdd = true;
    });
  },
  methods: {
    // 检索
    sear() {
      let data = {
        date: this.value,
        startTime: this.value1,
        endTime: this.value2,
        clientId: this.value3,
        productModelId: this.value4,
        brandId: this.value5,
        salemanId: this.value6,
        deliveryRequireId: this.value7,
        num: this.pageSize,
        page: 1
      };
      salesOffer(data).then(res => {
        this.tableData = res.result.list;
        console.log(res);
        this.total = res.result.total;
        this.pages = res.result.pages;
        this.pageNum = res.result.pageNum;
      });
    },
    btn() {
      this.delete([
        "value",
        "value1",
        "value2",
        "value3",
        "value5",
        "value4",
        "value5",
        "value6",
        "value7"
      ]);
    },
    // 货期要求
    hq() {
      if (this.enquiryDeliveryRequire == "") {
        enquiryDeliveryRequire().then(res => {
          this.enquiryDeliveryRequire = res.result;
        });
      }
    },
    // 客户
    kh() {
      if (this.client == "") {
        client().then(res => {
          this.client = res.result;
        });
      }
    },
    // 品牌
    pp() {
      if (this.brand == "") {
        brand().then(res => {
          this.brand = res.result;
        });
      }
    },
    // 原厂型号
    yc() {
      if (this.product == "") {
        product().then(res => {
          this.product = res.result;
        });
      }
    },
    // 销售员
    xsy() {
      if (this.selectData == "") {
        selectData().then(res => {
          this.selectData = res.result;
          console.log(this.selectData);
        });
      }
    },
    // 分页
    currentChange(val) {
      let data = {
        page: val,
        num: this.pageSize,
        date: this.value,
        startTime: this.value1,
        endTime: this.value2,
        clientId: this.value3,
        productModelId: this.value4,
        brandId: this.value5,
        salemanId: this.value6,
        deliveryRequireId: this.value7
      };
      salesOffer(data).then(res => {
        console.log(res);
        this.tableData = res.result.list;
        this.total = res.result.total;
        this.pages = res.result.pages;
        this.pageNum = res.result.pageNum;
      });
    },
    // 导出全部Excel
    getExport() {
      let data = {
        page: 0,
        num: 0,
        date: this.value,
        startTime: this.value1,
        endTime: this.value2,
        clientId: this.value3,
        productModelId: this.value4,
        brandId: this.value5,
        salemanId: this.value6,
        deliveryRequireId: this.value7
      };
      // salesOfferExport(data).then(res => {});
      this.importExls();
    },
    importExls() {
      // 设置当前日期
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let name = year + "-" + month + "-" + day;

      salesOfferExport({ productModelId: this.productModelId }).then(res => {
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
    handleScroll(event) {
      const scrollDistance =
        // 正文全文高
        event.target.scrollHeight -
        // 被卷去的高
        event.target.scrollTop -
        // 可见区域的宽度
        event.target.clientHeight;
      if (scrollDistance <= 20 && this.lookAll) {
        // 滚动条距离底部小于等于0证明已经到底了，可以请求接口了
        if (this.onOff) return;
        this.onOff = true;
        let pageNum = this.pageNum;
        console.log(pageNum);
        if (pageNum < this.pages) {
          //当前页数小于总页数 就请求
          pageNum += 1;
          let data = { page: pageNum, num: 10 };
          salesOffer(data).then(res => {
            // 请求
            console.log(res);
            this.onOff = false;
            this.total = res.result.total;
            this.pages = res.result.pages;
            this.pageNum = res.result.pageNum;
            this.tableData = this.tableData.concat(res.result.list);
          });
        }
      }
    },
    throttle(fn, wait) {
      let context, args;
      let previous = 0;
      return function() {
        let now = +new Date();
        context = this;
        args = arguments; // 取throttle执行作用域的this
        if (now - previous > wait) {
          fn.apply(context, args); // 用apply指向调用throttle的对象，相当于throttle.fn(args);
          console.log("执行节流");
          previous = now;
        }
      };
    },
    throttleFun(event) {
      this.throttle(this.handleScroll(event), 1000);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.throttleFun, true);
  }
};
</script>
<style scoped src="../../quote/inquery/inquery.css"></style>