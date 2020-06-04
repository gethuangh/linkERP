<template>
  <div>
    <!-- 去报价 -->
    <div class="from-header">
      <div class="he-box">
        <span
          class="span-text"
        >{{enquiryWithOfferBuyerModels.buyerName}}- {{enquiryWithOfferBuyerModels.clientName}}</span>
        <div class="he-left">
          <i>
            <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
              <!-- <button
                      class="tag-read"
                      data-clipboard-text="我是可以复制的内容，请点击复制"
                      @click.stop="copy"
              >立即阅读</button>-->
              <!-- <svg class="icon copy" aria-hidden="true" title="复制" @click.stop>
              <use xlink:href="#iconcopyfile" />
              </svg>-->
              <i class="icon copy iconfont" @click.stop>&#xe603;</i>
            </el-tooltip>
          </i>
        </div>
      </div>
      <span
        class="span-text"
        type
      >{{enquiryWithOfferBuyerModels.salesmanComName}}- {{enquiryWithOfferBuyerModels.salesmanName}}</span>
    </div>
    <div class="to-tab">
      <div>
        <el-table
          border
          size="mini"
          show-header
          :resizable="false"
          ref="filterTable"
          :data="enquiryWithOfferBuyerModels.enquiryWithOfferBuyerModels"
          style="width: 100%"
        >
          <!-- 树状 -->
          <el-table-column type="expand">
            <!-- type="expand" 带下层数据的字段 -->
            <template slot-scope="scope">
              <div class="chiden">
                <el-table
                  :header-cell-style="{background:'rgb(215,215,215)'}"
                  row-key="date"
                  size="mini"
                  :data="scope.row.offerBuyerModels"
                  border
                  style="width: 100%"
                >
                  <el-table-column
                    align="right"
                    type="selection"
                    prop
                    label
                    width="158"
                    class-name="sutom-white"
                  >
                    <template slot-scope="scope">
                      <el-radio
                        v-model="enquiryWithOfferBuyerModels.enquiryWithOfferBuyerModels.id"
                        :label="scope.row.id"
                      >{{no}}</el-radio>
                    </template>
                  </el-table-column>
                  <el-table-column prop="grossMargin" align="center" width="100" label="毛利润率">
                    <template slot-scope="scope">
                      <el-input
                        @input="change(scope)"
                        maxlength="8"
                        size="mini"
                        v-model="scope.row.grossMargin"
                      >
                        <template slot="append">%</template>
                      </el-input>
                    </template>
                  </el-table-column>
                  <el-table-column prop="brandName" width="100" label="品牌">
                    <template slot-scope="scope">
                      <span style="color:blue; ">
                        {{
                        scope.row.brandName
                        }}
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="originalModel" width="170" label="原厂型号">
                    <template slot-scope="scope">
                      <span style="color:rgb(65,195,99); ">
                        {{
                        scope.row.originalModel
                        }}
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    align="right"
                    header-align="center"
                    prop="offerNum"
                    width="85"
                    label="报价数量"
                  ></el-table-column>
                  <el-table-column width="95" align="right" prop="deliveryRequireValue" label="货期"></el-table-column>
                  <el-table-column prop="batchNumberRequire" align="center" width="80" label="批号"></el-table-column>
                  <el-table-column prop="price" align="right" label="COST单价" width="80">
                    <!-- <template scope="scope">
              <span v-if="hidee" >{{ scope.row.price }}</span>
              <el-input size="mini" v-else  v-model="scope.row.price"></el-input>
            </template> -->
                  </el-table-column>
                  <el-table-column prop="offerPrice" align="center" label="报价单价" width="100">
                    <template slot-scope="scope">
                      <span v-if="hidee"  style="color:blue; ">
                        {{
                        scope.row.offerPrice
                        }}
                      </span>
                      <el-input  @input="changes(scope)" size="mini" v-else  v-model="scope.row.offerPrice"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    header-align="center"
                    align="right"
                    label="spq"
                    width="50"
                  ></el-table-column>
                  <el-table-column
                    prop="moq"
                    header-align="center"
                    align="right"
                    label="MOQ"
                    width="60"
                  ></el-table-column>
                  <el-table-column prop="buyerName" align="center" label="采购员" width="100"></el-table-column>
                  <el-table-column prop="buyerRemarks" label="采购备注"></el-table-column>
                </el-table>
              </div>
            </template>
          </el-table-column>

          <el-table-column type="index" label="Ln." :resizable="false" width="40"></el-table-column>
          <el-table-column
            align="center"
            prop="result"
            label="结果"
            sortable
            :resizable="false"
            width="70"
          ></el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="date"
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
            <template slot-scope="scope">
              <span style="color:blue;">{{ scope.row.brandName }}</span>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" prop="clientModel" label="客户型号" width="170">
            <template slot-scope="scope">
              <span style="color:rgb(65,195,99);">{{ scope.row.clientModel }}</span>
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
            align="right"
            :resizable="false"
            prop="deliveryRequireValue "
            label="货期要求"
            width="95"
          ></el-table-column>
          <el-table-column
            align="center"
            :resizable="false"
            prop="batchNumberRequire"
            label="批号要求"
            width="80"
          ></el-table-column>
          <el-table-column
            align="right"
            :resizable="false"
            prop="acceptPrice"
            label="接受价"
            width="80"
          ></el-table-column>

          <el-table-column :resizable="false" prop="salesmanRemarks" label="销售备注"></el-table-column>
        </el-table>
      </div>

      <div class="alter">
        <!-- 毛利润率 -->
        <div class="profit">
          <p>毛利润率</p>
          <div>
            <el-input @input="changess" maxlength="8" size="mini" v-model="ss">
              <template slot="append">%</template>
            </el-input>
          </div>
        </div>
        <!-- 报价货币 -->
        <div class="currency">
          <p>报价货币</p>
          <div class="bibie">
            <!-- 币别下拉 -->
            <el-select size="mini" v-model="value4" clearable>
              <el-option
                v-for="item in options"
                :key="item.id"
                size="mini"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
            <!-- <el-select size="mini" @click.native="bb" v-model="value4" clearable>
              <el-option
                v-for="item in currencyCode"
                :key="item.id"
                size="mini"
                :label="item.attrName"
                :value="item.id"
              ></el-option>
            </el-select> -->
          </div>
        </div>
        <!-- 税率 -->
        <div class="tax">
          <p>税率</p>
          <div class="bibie">
            <el-select @change="getTax" @click.native="sl" size="mini" v-model="value3" placeholder="">
              <el-option
                      v-for="item in taxRate"
                      :key="item.id"
                      size="mini"
                      :label="item.attrName"
                      :value="item.id"
                    ></el-option>
            </el-select>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="to-btn">
          <el-button size="mini" type="success">保存</el-button>
          <el-button @click="modi" size="mini" type="info">修改</el-button>
          <el-button @click.stop="dialogTableVisible1=true" size="mini" type="primary">生成报价单</el-button>
        </div>
      </div>
    </div>

    <div class="completedQuote">
      <el-dialog
        width="1500px"
        :append-to-body="true"
        title="已生成报价单"
        :visible.sync="dialogTableVisible1"
      >
        <completedQuote></completedQuote>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import completedQuote from "../completedQuote/completedQuote";
import { currencyCode,taxRate } from "../../../../api/enquiry";
export default {
  data() {
    return {
      options: [{name:"人民币",id:1}],
      options1: [],
      options2: [],
      options3: [],
      no: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      ss: "",
      dialogTableVisible1: false,
      currencyCode: [],
      taxRate:[],
      // 税率
      tax:0,
      selVal:0,
       hidee:true,
    };
  },
  mounted() {
    this.expandAll();
  },
  methods: {
    // 全局毛利润率
    changess(selVal) {
      this.selVal = selVal
      this.setSelest(
        this.enquiryWithOfferBuyerModels.enquiryWithOfferBuyerModels,
        this.selVal,
        this.tax
      );
    },
        // 税率
    sl() {
      if (this.taxRate == "") {
        taxRate().then(res => {
          this.taxRate = res.result;
        });
      }
    },
    // 获取税率
    getTax(value){
      let uname = {}
      uname = this.taxRate.find( (item) =>{
        return item.id === value
      })
      this.tax = parseInt(uname.attrName)
      this.setSelest(
        this.enquiryWithOfferBuyerModels.enquiryWithOfferBuyerModels,
        this.selVal,
        this.tax
      );
    },
     // 修改
    modi() {
      this.hidee = !this.hidee;
    },
    // 币别
    bb() {
      if (this.currencyCode == "") {
        currencyCode().then(res => {
          this.currencyCode = res.result;
        });
      }
    },
    // 报价单价运算
    change(scope) {
      // 报价单价 =  ((毛利润率/100 *10000 * 单价*10000)/10000 + 单价*10000 ) /10000    为了防止js计算浮点型出错
      scope.row.offerPrice =(((scope.row.grossMargin / 100) * 10000 * scope.row.price * 10000) / 10000 +scope.row.price * 10000) /10000;
    },
     // 毛利润率
    changes(scope) {
      // console.log(scope)
      // 毛利润率 =  （报价单价/cost单价-1）*100%   （报价单价/cost单价*10000-10000）÷10000*100%
     scope.row.grossMargin  = ( scope.row.offerPrice / scope.row.price*10000-10000 )/10000*100
    },
    // 默认展开 树状
    expandAll() {
      const els = this.$el.getElementsByClassName("el-table__expand-icon");
      this.$nextTick(() => {
        for (let i = 0; i < els.length; i++) {
          els[i].click();
        }
      });
    },
    // 获取数据
    getenquiryWithOfferBuyerModels() {
      console.log(this.enquiryWithOfferBuyerModels);
    }
  },
  props: ["enquiryWithOfferBuyerModels"],
  watch: {
    enquiryWithOfferBuyerModels: "getenquiryWithOfferBuyerModels"
  },
  components: {
    completedQuote
  }
};
</script>
<style src="../../../quote/inquery/inquery.css" scoped></style>