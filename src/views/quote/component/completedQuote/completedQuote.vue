<template>
  <div>
    <!-- 已生成的报价单 -->
    <div class="border-btt"></div>
    <div class="comple-box">
      <div class="comple-options">
        <div class="customer">
          <span>客户：</span>
          <div class="cust-option">
            <!-- <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> -->
            <span><b>{{ customer }}</b></span>
          </div>
        </div>

        <div class="customer">
          <span>来自：</span>
          <div class="cust-option">
            <!-- <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> -->
            <span>Link Technologies Ltd.</span>
          </div>
        </div>        

        <div class="customer">
          <span>采购员：</span>
          <div class="cust-option">
            <!-- <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> -->
            <span><b>Damon Liu</b></span>
          </div>
        </div>

        <div class="customer">
          <span>客户联系人：</span>
          <div class="cust-option">
            <!-- <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> -->
            <span>Michael Jiao</span>
          </div>
        </div>

        <div class="customer">
          <span>日期：</span>
          <div class="cust-option">
            <!-- <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select> -->
            <span>2019-8-12</span>
          </div>
        </div>
      </div>
      <div class="comple-content">
        <div class="cont-header flex">
          <span>QUOTE#: CQ1908120325</span>
          <div class="cont-options">
            <el-select size="mini" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="cont-copy">
            <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
              <!-- <button
                      class="tag-read"
                      data-clipboard-text="我是可以复制的内容，请点击复制"
                      @click.stop="copy"
              >立即阅读</button>-->
              <!-- <svg class="icon copy" aria-hidden="true" title="复制" @click.stop>
                <use xlink:href="#iconcopyfile" />
              </svg> -->
              <i class="icon copy iconfont" @click.stop>&#xe603;</i>
            </el-tooltip>
          </div>
          <div class="cont-copy">
            <el-tooltip class="item" effect="dark" content="PDF" placement="bottom">
              <!-- <button
                      class="tag-read"
                      data-clipboard-text="我是可以复制的内容，请点击复制"
                      @click.stop="copy"
              >立即阅读</button>-->
              <!-- <svg class="icon copy" aria-hidden="true" title="复制" @click.stop>
                <use xlink:href="#iconcopyfile" />
              </svg> -->
              <i class="icon copy iconfont" @click.stop>&#xe60c;</i>
            </el-tooltip>
          </div>
          <span class="header-right">Damon Liu - BBB ELECTRONICS</span>
        </div>
        <div class="cont-content">
          <el-table
            size="mini"
            :header-cell-style="{background:'rgb(153,204,0)',color:'#fff'}"
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column prop="name" label="MFG" width="80">
              <template scope="scope">
                <span v-if="hidee" style="color:blue; font-weight: 800;">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="RFQ PN" width="200">
              <template scope="scope">
                <span
                  v-if="hidee"
                  style="color:rgb(0,128,128); font-weight: 800;"
                >{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="MPN" width="230">
              <template scope="scope">
                <span
                  v-if="hidee"
                  style="color:rgb(0,128,128); font-weight: 800;"
                >{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="RFQ QTY" align="center" width="100">
              <template scope="scope">
                <span
                  v-if="hidee"
                  style="color:rgb(0,128,128); font-weight: 800;"
                >{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="QUOTED QTY" align="center" width="145">
              <template scope="scope">
                <span v-if="hidee">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="UNIT PRICE" align="center" width="150">
              <template scope="scope">
                <span v-if="hidee" style="color:blue; font-weight: 800;">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" align="center" label="D/C" width="100">
              <template scope="scope">
                <span v-if="hidee" style="color:blue; font-weight: 800;">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" align="center" label="LEAD TIME" width="120">
              <template scope="scope">
                <span v-if="hidee" style="color:blue; font-weight: 800;">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" align="center" label="SPQ" width="80">
              <template scope="scope">
                <span v-if="hidee">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" align="center" label="MOQ" width="80">
              <template scope="scope">
                <span v-if="hidee">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="DESCRIPTION">
              <template scope="scope">
                <span v-if="hidee">{{ scope.row.name}}</span>
                <el-input size="mini" v-else placeholder="请输入内容" v-model="scope.row.date"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="cont-btn">
          <el-button type="success" size="mini" @click="hold">保存</el-button>
          <el-button type="info" size="mini" @click="modi">修改</el-button>
        </div>
      </div>
      <div class="comple-btt">
        <div class="btt-header flex">
          <span>QUOTE#: CQ1908120325</span>
          <div class="btt-copys">
            <el-tooltip class="item" effect="dark" content="复制" placement="bottom">
              <!-- <button
                      class="tag-read"
                      data-clipboard-text="我是可以复制的内容，请点击复制"
                      @click.stop="copy"
              >立即阅读</button>-->
              <!-- <svg class="icon btt-copy" aria-hidden="true" title="复制" @click.stop>
                <use xlink:href="#iconcopyfile" />
              </svg> -->
              <i class="icon btt-copy iconfont" @click.stop>&#xe603;</i>
            </el-tooltip>
          </div>
        </div>
        <div class="btt-box">
          <div class="copy-text" v-for="item in tableData" :key="item.date">
            <span v-for="i in item" :key="i.date">{{i}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customer: 'BBB Electronics Inc.',
      hidee: true,
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  },
  methods: {
    // 修改
    modi() {
      this.hidee = !this.hidee;
    },
    // 保存
    hold() {
      this.hidee = true;
    }
  }
};
</script>
<style scoped src="./completedQuote.css">
</style>