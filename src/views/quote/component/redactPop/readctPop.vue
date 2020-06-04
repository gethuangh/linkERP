<template>
  <div>
    <!-- 已报价自定义表格弹窗 -->
    <div class="read-box">
      <div class="read-preview">
        <el-button type="success" size="mini">预览报价</el-button>
        <div class="preview-form">
          <div>
            <el-table
              border
              size="mini"
              show-header
              :resizable="false"
              ref="filterTable"
              :data="tableData1"
              :highlight-current-row="bc"
              style="width: 100%"
            >
              <el-table-column type="index" label="Ln." :resizable="false" width="40"></el-table-column>
              <el-table-column
                align="center"
                prop="result"
                label="结果"
                sortable
                :resizable="false"
                width="70"
              >
                <!-- <template scope="scope">
                <span style="color:blue;">{{ scope.row.name }}</span>
                </template>-->
              </el-table-column>
              <el-table-column
                :resizable="false"
                align="center"
                prop="createTime"
                label="日期"
                sortable
                width="100"
                @click="s(row)"
              ></el-table-column>
              <el-table-column
                align="left"
                :resizable="false"
                prop="brandName"
                sortable
                label="品牌"
                width="100"
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
                :resizable="false"
                prop="productModelName"
                label="客户型号"
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

              <!-- <el-table-column align="center" :resizable="false" prop="name" label="原厂型号" width="170">
              <template scope="scope">
                <span style="color:rgb(65,195,99);">
                  {{
                  scope.row.date
                  }}
                </span>
              </template>
              </el-table-column>-->

              <el-table-column
                header-align="center"
                align="right"
                :resizable="false"
                prop="enquiryNum"
                label="询价数量"
                width="85"
              ></el-table-column>
              <el-table-column
                align="right"
                :resizable="false"
                prop="offerNum"
                label="报价数量"
                width="95"
              ></el-table-column>
              <el-table-column
                align="center"
                :resizable="false"
                prop="batchNumberRequire"
                label="批号"
                width="80"
              ></el-table-column>

              <el-table-column
                align="right"
                :resizable="false"
                prop="buyerPrice"
                label="接受价"
                width="80"
              ></el-table-column>
              <el-table-column
                align="center"
                :resizable="false"
                prop="offerPrice"
                label="报价单价"
                width="100"
              >
                <template scope="scope">
                  <span style="color:blue;">
                    {{
                    scope.row.date
                    }}
                  </span>
                </template>
              </el-table-column>
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
                label="毛利率"
                width="100"
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
          <!-- 自定义表格 -->
          <div class="sustom-firn">
            <div class="sutom-box">
              <el-table
                :header-cell-style="{background:'rgb(215,215,215)'}"
                size="mini"
                show-header
                border
                :resizable="false"
                ref="filterTable"
                :data="infobuyerOfferList"
                :highlight-current-row="bc"
                style="width: 100%"
              >
                <el-table-column
                  align="right"
                  class-name="sutom-white"
                  :resizable="false"
                  prop
                  label
                  width="110"
                >
                  <template scope="scope">
                    <el-radio
                      v-model="value"
                      :label="scope.row.id"
                      @change.native="getCurrentRow(scope.row)"
                    >{{no}}</el-radio>
                  </template>
                </el-table-column>

                <el-table-column
                  :resizable="false"
                  align="center"
                  prop="date"
                  label="毛利润率"
                  width="100"
                  @click="s(row)"
                >
                  <template scope="scope">
                    <el-input
                      @input="change(scope)"
                      maxlength="8"
                      size="mini"
                      v-model="scope.row.profitMargin"
                    >
                      <template slot="append">%</template>
                    </el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  align="left"
                  :resizable="false"
                  prop="brandName"
                  label="品牌"
                  width="100"
                >
                  <template scope="scope">
                    <span v-if="hidee" style="color:blue;">
                      {{
                      scope.row.brandName
                      }}
                    </span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.brandName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column :resizable="false" prop="originalModel" label="原厂型号" width="170">
                  <template scope="scope">
                    <span v-if="hidee" style="color:rgb(65,195,99);font-weight:400">
                      {{
                      scope.row.originalModel
                      }}
                    </span>
                    <el-input
                      size="mini"
                      v-else
                      placeholder="请输入内容"
                      v-model="scope.row.originalModel"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="right"
                  :resizable="false"
                  prop="offerNum"
                  label="报价数量"
                  width="85"
                >
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.offerNum }}</span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.offerNum"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="right"
                  :resizable="false"
                  prop="deliveryRequireValue"
                  label="货期"
                  width="95"
                >
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.deliveryRequireValue }}</span>
                    <el-input
                      size="mini"
                      v-else
                      placeholder="请输入内容"
                      v-model="scope.row.deliveryRequireValue"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :resizable="false"
                  prop="batchNumberRequire"
                  label="批号"
                  width="80"
                >
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.batchNumberRequire }}</span>
                    <el-input
                      size="mini"
                      v-else
                      placeholder="请输入内容"
                      v-model="scope.row.batchNumberRequire"
                    ></el-input>
                  </template>
                </el-table-column>

                <el-table-column
                  align="right"
                  :resizable="false"
                  prop="price"
                  label="成本单价"
                  width="80"
                >
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.price }}</span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.price"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :resizable="false"
                  prop="offerPrice"
                  label="报价单价"
                  width="100"
                >
                  <template scope="scope">
                    <span v-if="hidee" style="color:blue;">
                      {{
                      scope.row.offerPrice
                      }}
                    </span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.offerPrice"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  :resizable="false"
                  prop="taxRateValue"
                  label="税率"
                  width="60"
                >
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.taxRateValue }}</span>
                    <el-input
                      size="mini"
                      v-else
                      placeholder="请输入内容"
                      v-model="scope.row.taxRateValue"
                    ></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="right" :resizable="false" prop="spq" label="SPQ" width="70">
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.spq }}</span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.spq"></el-input>
                  </template>
                </el-table-column>
                <el-table-column align="right" :resizable="false" prop="moq" label="MOQ" width="70">
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.moq }}</span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.moq"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  align="right"
                  :resizable="false"
                  prop="buyerName"
                  label="采购员"
                  width="100"
                >
                  <template scope="scope">
                    <span v-if="hidee" style="font-weight:800;">
                      {{
                      scope.row.buyerName
                      }}
                    </span>
                    <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.buyerName"></el-input>
                  </template>
                </el-table-column>

                <el-table-column align="center" :resizable="false" prop="buyerRemarks" label="采购备注">
                  <template scope="scope">
                    <span v-if="hidee">{{ scope.row.buyerRemarks }}</span>
                    <el-input
                      size="mini"
                      v-else
                      placeholder="请输入内容"
                      v-model="scope.row.buyerRemarks"
                    ></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <!-- 自定义表格尾部按钮区域 -->
            <div class="sutom-btt">
              <el-button type="success" @click="hold" size="mini">保存</el-button>
              <el-button type="info" @click="modi" size="mini">修改</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="read-lsbx">
        <!-- 历史报价 -->
        <div class="xiala-btt">
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
              <a href="javascript:;" @click="all">查看全部</a>
              <a href="javascript:;" @click="getExport">(导出全部)</a>
            </span>
          </div>
          <div class="all-from">
            <el-table
              border
              size="mini"
              show-header
              :resizable="false"
              ref="filterTable"
              :data="salesOffer.list"
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
                label="报价单号"
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
                prop="clientModel"
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
                width="100"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../../../../components/Pagination";
import { salesOfferExport } from "../../../../api/quote";
export default {
  data() {
    return {
      hidee: true,
      radio: "1",
      next: ">>",
      prev: "<<",
      layout: "prev, pager, next, total",
      total: 0,
      bc: true,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      no: "",
      pageSize: 5
    };
  },
  props: ["tableData1", "infobuyerOfferList", "salesOffer", "productModelId"],
  components: { Pagination },
  created() {
    this.tableData1 = this.tableData1;
  },
  watch: {
    salesOffer: "getsalesOffer"
  },
  methods: {
    all() {
      this.$emit("all");
    },
    // 检测数据发生改变然后赋值
    getsalesOffer() {
      this.total = this.salesOffer.total;
    },
    // 修改
    modi() {
      this.hidee = !this.hidee;
    },
    // 保存
    hold() {
      this.hidee = true;
    },
    // 点击单选
    getCurrentRow(row) {
      console.log(row);
    },
    // 分页加载
    currentChange(val) {
      this.$emit("getcurrentChange", val);
    },
    // 导出全部Excel
    getExport() {
      let data = { productModelId: this.productModelId, page: 0, num: 0 };
      // salesOfferExport(data).then(res => {});
      this.importExls();
    },
    // 导出文件
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
        let fileName = "历史报价" + name + ".xls";
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
    // 报价单价运算
    change(scope) {
      // 报价单价 =  ((毛利润率/100 *10000 * 单价*10000)/10000 + 单价*10000 ) /10000    为了防止js计算浮点型出错
      scope.row.offerPrice =
        (((scope.row.profitMargin / 100) * 10000 * scope.row.price * 10000) /
          10000 +
          scope.row.price * 10000) /
        10000;
    }
  }
};
</script>

<style scoped src="./redactPop.css">
</style>
    