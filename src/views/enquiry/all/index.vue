<template>
  <!-- 询价-全部查看 -->
  <div>
    <!-- 中间表格 -->
    <div class="cont-table all" style="width:1692px; margin-left:20px;margin-top:25px;">
      <span class="btt-bj flex">
        <el-button type="success" size="mini">处理中的询价</el-button>
        <Pagination
          @currentChange="currentChange"
          :total="total"
          :layout="layout"
          :next="next"
          :prev="prev"
          :pageSize="pageSize"
        ></Pagination>
        <div class="texs">
          <a href="javascript:;" @click="lookAll=true">查看全部</a>
          <a href="javascript:;">(导出全部)</a>
        </div>
        <el-button type="primary" size="mini" @click="f5()">刷新</el-button>
      </span>
      <div class="table-header">
        <div class="he-left">
          <span class="header-left">AC0032</span>
          <span class="item">2019-09-02</span>
        </div>
        <span class="header-right">LINK APAC - MICHAEL JIAO</span>
      </div>
      <el-table
        @row-click="getOffer"
        border
        show-header
        ref="filterTable"
        :data="tableData"
        size="mini"
      >
        <el-table-column type="index" label="Ln." :resizable="false" width="50">
          <template slot-scope="scope">
            <span class="clihover" @click.stop="sear" v-if="scope.$index === 0">检索</span>
            <span v-else>{{ scope.$index}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="courseValue"
          align="center"
          label="进程"
          sortable
          width="85"
          :resizable="false"
        >
          <template slot-scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select size="mini" @click.native="jinc" v-model="value" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in enquiryCourse"
                  :key="item.attrKey"
                  :label="item.attrName"
                  :value="item.attrKey"
                  size="mini"
                ></el-option>
              </el-select>
            </div>
            <span v-else>{{ scope.row.courseValue }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="result"
          align="center"
          label="结果"
          sortable
          :resizable="false"
          width="75"
        >
          <template scope="scope">
            <div class="all-xiala" @click.stop v-if="scope.$index === 0">
              <el-input v-model="input2" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <span v-else style="color:red;text-align:center;">{{ scope.row.result }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="日期"
          :resizable="false"
          sortable
          width="110"
        >
          <template slot-scope="scope">
            <div class="all-xiala data-all" @click.stop v-if="scope.$index === 0">
              <el-date-picker
                v-model="valuess"
                align="right"
                size="mini"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
            <span v-else>{{ scope.row.data }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="number"
          align="center"
          label="询价单号"
          :resizable="false"
          sortable
          width="115"
        >
          <template slot-scope="scope">
            <div @click.stop class="all-xiala" v-if="scope.$index === 0">
              <el-input v-model="input2dh" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <span v-else style="color:blue;">{{ scope.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="priorityValue"
          align="center"
          :resizable="false"
          label="优先级"
          sortable
          width="80"
        >
          <template scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select size="mini" @click.native="yxj" v-model="value1" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in enquiryPriority"
                  :key="item.attrKey"
                  :label="item.attrName"
                  size="mini"
                  :value="item.attrKey"
                ></el-option>
              </el-select>
            </div>
            <span v-else style="color:red; text-align:center;">{{ scope.row.priorityValue }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="brandName" :resizable="false" label="品牌" sortable width="70">
          <template scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select size="mini" @click.native="pp" v-model="value2" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in brand"
                  :key="item.id"
                  size="mini"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <span v-else style="color:blue;">{{ scope.row.brandName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="clientModel" :resizable="false" label="客户型号" sortable width="235">
          <template slot-scope="scope">
            <div @click.stop class="all-xiala" v-if="scope.$index === 0">
              <el-input v-model="input3" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <div v-else class="dan-flex">
              <span style="color:rgb(65,195,99);">{{ scope.row.clientModel }}</span>
              <div>
                <i>
                  <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
                    <i class="icon copy iconfont" @click.stop="copyCode(scope)">&#xe603;</i>
                  </el-tooltip>
                </i>
                <i>
                  <el-tooltip class="item" effect="dark" content="渠道" placement="bottom">
                    <i
                      class="icon leave iconfont"
                      @click.stop="getDitch(scope.row.clientModel)"
                    >&#xe6dd;</i>
                  </el-tooltip>
                </i>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="enquiryNum"
          align="right"
          :resizable="false"
          label="询价数量"
          sortable
          width="80"
        >
          <template scope="scope">
            <div @click.stop class="all-xiala" v-if="scope.$index === 0">
              <el-input v-model="input7" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <span v-else>{{ scope.row.enquiryNum }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="deliveryRequireValue"
          header-align="center"
          align="right"
          :resizable="false"
          label="货期要求"
          sortable
          width="80"
        >
          <template scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select size="mini" @click.native="hq" v-model="value6" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in enquiryDeliveryRequire"
                  :key="item.id"
                  size="mini"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <span v-else>{{ scope.row.deliveryRequireValue }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="batchNumberRequire"
          :resizable="false"
          label="批号要求"
          sortable
          width="80"
          header-align="center"
          align="right"
        >
          <template scope="scope">
            <div @click.stop class="all-xiala" v-if="scope.$index === 0">
              <el-input v-model="input5" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <span v-else>{{ scope.row.batchNumberRequire }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable label="客户接受价" width="130" header-align="center">
          <template slot-scope="scope">
            <div class="all-xiala" @click.stop v-if="scope.$index === 0">
              <el-input size="mini" v-model="input8" placeholder="请输入内容"></el-input>
            </div>
            <div v-else class="scope-flex">
              <i style="text-align:right">{{scope.row.acceptPrice}}</i>
              <i style="font-style:italic">{{scope.row.currencyValue}}</i>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="taxRateValue" label="税率" :resizable="false" sortable width="75">
          <template slot-scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select size="mini" @click.native="sl" v-model="value3" clearable placeholder>
                <el-option
                  :clearable="whit"
                  v-for="item in taxRate"
                  :key="item.id"
                  size="mini"
                  :label="item.attrName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <i v-else style="font-style:italic;text-align:right">{{scope.row.taxRateValue}}</i>
          </template>
        </el-table-column>
        <el-table-column
          prop="clientCode"
          align="center"
          label="客户"
          :resizable="false"
          sortable
          width="100"
        >
          <template scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select @click.native="kh" size="mini" v-model="value4" placeholder>
                <el-option
                  v-for="item in client"
                  :key="item.id"
                  :label="item.customerCode"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <span v-else style>{{ scope.row.clientCode }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="salesmanComName"
          align="center"
          label="公司"
          :resizable="false"
          sortable
          width="100"
        >
          <template scope="scope">
            <div class="all-xiala" v-if="scope.$index === 0">
              <el-select @click.native="gs" size="mini" v-model="value5" placeholder>
                <el-option
                  v-for="item in companyAll"
                  :key="item.id"
                  :label="item.departmentName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <span v-else style>{{ scope.row.salesmanComName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="销售员"
          :resizable="false"
          sortable
          width="100"
        >
          <template scope="scope">
            <div class="all-xiala" @click.stop v-if="scope.$index === 0">
              <el-input v-model="input6" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <span v-else style>{{ scope.row.salesmanName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" :resizable="false" label="销售备注" sortable>
          <template scope="scope">
            <div class="all-xiala" @click.stop v-if="scope.$index === 0">
              <el-input v-model="input4" size="mini" placeholder="请输入内容"></el-input>
            </div>
            <span v-else style="color:red;">{{ scope.row.salesmanRemarks }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-button type="info" size="mini">完 成</el-button>
      <span class="dhf" v-if="true">待回复</span>-->
      <!-- 弹窗表格 -->
      <div class="cont-tc">
        <div class="tc-teb">
          <el-dialog title="增值渠道" :visible.sync="dialogTableVisible">
            <tan :ditch="ditch"></tan>
          </el-dialog>
        </div>
      </div>

      <!-- 下拉弹窗 -->
      <el-drawer title :visible.sync="table" direction="btt" class="pull">
        <!-- <xiala :tableData="tableData" :tableData1="tableData1" @fnc="getDate1"></xiala> -->
        <xiala
          :clientModelid="clientModelid"
          :show="show"
          :result="result"
          @fnc="getDate1"
          @all="all"
        ></xiala>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import xiala from "../component/pull/index";
import tan from "../component/pop/index";
import Pagination from "../../../components/Pagination";
import {
  specType,
  enquiryCourse,
  enquiryPriority,
  enquiryDeliveryRequire,
  brand,
  client,
  taxRate,
  companyAll,
  enquiryAllList,
  historyOffer
} from "../../../api/enquiry";
export default {
  data() {
    return {
      show: true,
      // layout:'total,prev,next, ',
      layout: "prev, pager, next, total",
      pageSize: 10,
      total: 0,
      next: ">>",
      prev: "<<",
      dl: false,
      input: "",
      input7: "", //询价数量
      input2: "", //结果
      input3: "", //客户型号
      input2dh: "", //询价单号
      input5: "", //批号
      input6: "", //销售员
      input8: "", //客户接受价
      input4: "", //销售备注
      value: "", //进程
      value1: "", //优先级
      value2: "", //品牌
      value3: "", //税率
      value4: "", //客户
      value5: "", //公司
      value6: "", //货期要求
      valuess: "", //日期
      tableData2: [],
      tableData1: [
        {
          date: "",
          name: "",
          address: "",
          tag: ""
        }
      ],
      bc: true,
      dialogTableVisible: false,
      dialogFormVisible: false,
      table: false,
      tableData: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      enquiryCourse: [],
      enquiryPriority: [],
      enquiryDeliveryRequire: [],
      client: [],
      brand: [],
      taxRate: [],
      companyAll: [],
      enquiryAllList: [],
      ditch: [],
      clientModelid: "",
      result: [],
      pages: 1,
      pageNum: 1,
      lookAll: false,
      onOff: false,
      enquiryId: null,
      clientModel: null
    };
  },
  components: {
    tan,
    xiala,
    Pagination
  },

  methods: {
    // 复制
    copyCode(scope) {
      this.copy(scope.row.clientModel);
    },
    getDate1(data) {
      this.tableData1 = data;
    },
    change(e) {
      console.log(e);
    },
    // 下拉
    xiala(row, event, column) {
      this.table = true;
    },
    f5() {
      location.reload();
    },
    // 进程
    jinc() {
      if (this.enquiryCourse == "") {
        enquiryCourse().then(res => {
          this.enquiryCourse = res.result;
        });
      }
    },
    //  优先级
    yxj() {
      if (this.enquiryPriority == "") {
        enquiryPriority().then(res => {
          this.enquiryPriority = res.result;
          console.log(res.result);
        });
      }
    },
    // 货期要求
    hq() {
      if (this.enquiryDeliveryRequire == "") {
        enquiryDeliveryRequire().then(res => {
          this.enquiryDeliveryRequire = res.result;
          console.log(res.result);
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
    // 客户
    kh() {
      if (this.client == "") {
        client().then(res => {
          this.client = res.result;
          console.log(this.client);
        });
      }
    },
    // 税率
    sl() {
      if (this.taxRate == "") {
        taxRate().then(res => {
          this.taxRate = res.result;
          console.log(this.taxRate);
        });
      }
    },
    // 公司
    gs() {
      if (this.companyAll == "") {
        companyAll().then(res => {
          // console.log(res)
          this.companyAll = res.result;
        });
      }
    },
    // 检索
    sear() {
      let data = {
        filterCourse: this.value,
        result: this.input2,
        data: this.valuess,
        number: this.input2dh,
        priority: this.value1,
        clientModel: this.input3,
        brandId: this.value2,
        enquiryNum: this.input7,
        deliveryRequire: this.value6,
        batchNumberRequire: this.input5,
        acceptPrice: this.input8,
        taxRate: this.value3,
        clientCode: this.value4,
        salesmanComId: this.value5,
        salesmanId: this.input6,
        salesmanRemarks: this.input4
      };
      enquiryAllList(data).then(res => {
        console.log(data);
        this.total = res.result.total;
        this.tableData = res.result.list;
        this.pages = res.result.pages;
        this.pageNum = res.result.pageNum;
        let row = {};
        this.tableData.unshift(row);
        console.log(res);
      });
    },
    // 获取客户型号
    getDitch(data) {
      this.dialogTableVisible = true;
      let tex = { clientModel: data };
      //  根据客户型号，查询增值渠道
      specType(tex).then(res => {
        this.ditch = res.result;
        console.log(this.ditch);
      });
    },
    all() {
      let datas = {
        enquiryId: this.enquiryId,
        clientModel: this.clientModel,
        pageSize: 100
      };
      historyOffer(datas).then(res => {
        this.result = res.result;
        this.clientModelid = row.id;
      });
    },
    // 获取询价单id 和 客户型号 查询询价单报价和历史报价
    getOffer(row) {
      this.table = true;
      let datas = { enquiryId: row.id, clientModel: row.clientModel };
      this.enquiryId = row.id;
      this.clientModel = row.clientModel;
      historyOffer(datas).then(res => {
        this.result = res.result;
        this.clientModelid = row.id;
        // , row.clientModel;
      });
    },
    // 分页加载
    currentChange(val) {
      let data = {
        filterCourse: this.value,
        result: this.input2,
        data: this.valuess,
        number: this.input2dh,
        priority: this.value1,
        clientModel: this.input3,
        brandId: this.value2,
        enquiryNum: this.input7,
        deliveryRequire: this.value6,
        batchNumberRequire: this.input5,
        acceptPrice: this.input8,
        taxRate: this.value3,
        clientCode: this.value4,
        salesmanComId: this.value5,
        salesmanId: this.input6,
        salesmanRemarks: this.input4,
        // 当前页码
        pageNumber: val,
        // 每页显示行数
        pageSize: 10
      };
      enquiryAllList(data).then(res => {
        this.total = res.result.total;
        this.tableData = res.result.list;
        let row = {};
        this.tableData.unshift(row);
        this.pages = res.result.pages;
        this.pageNum = res.result.pageNum;
        //  console.log(this.tableData)
      });
    },
    handleScroll(event) {
      //标准浏览器中：定义一个形参event，但当事件触发的时候，并没有给event赋实际的值，则浏览器会把”事件“的对象赋给这个形参e，这时这个e是个系统级的对象：事件；
      const scrollDistance =
        // 正文全文高
        event.target.scrollHeight -
        // 被卷去的高
        event.target.scrollTop -
        // 可见区域的宽度
        event.target.clientHeight;
      // 滚动条距离底部小于等于0证明已经到底了，可以请求接口了
      if (scrollDistance <= 20 && this.lookAll) {
        //这个开关是为了避免请求数据中 再次被请求
        if (this.onOff) return;
        this.onOff = true;
        // 当前页数和总页数在第一次请求数据就要保存起来
        let pageNum = this.pageNum;
        //当前页数小于总页数 就请求
        if (pageNum < this.pages) {
          pageNum += 1;
          let data = { pageNumber: pageNum, pageSize: 10 };
          enquiryAllList(data).then(res => {
            this.onOff = false;
            this.pageNum = res.result.pageNum;
            this.tableData = this.tableData.concat(res.result.list);
          });
        }
      }
    },
    // 节流
    throttle(fn, wait) {
      let context, args;
      let previous = 0;
      return function() {
        let now = +new Date();
        context = this;
        args = arguments; // 取throttle执行作用域的this
        if (now - previous > wait) {
          fn.apply(context, args); // 用apply指向调用throttle的对象，相当于throttle.fn(args);
          previous = now;
        }
      };
    },
    // 如果不封装 直接调用的话，每次调用都会创建一个新的(匿名)函数 [请参考MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
    throttleFun(event) {
      this.throttle(this.handleScroll(event), 1000);
    }
  },
  created() {
    let row = {};
    this.tableData.unshift(row);
    this.sear();
  },
  mounted() {
    window.addEventListener("scroll", this.throttleFun, true);
  }
};
</script>
<style scoped src="../unfinished/index.css"></style>
