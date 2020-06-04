<template>
  <div>
    <!-- 弹窗表格 -->
    <div class="tan-box">
      <el-button type="success"  size="mini">授权代理商</el-button>
      <el-table
        border
        show-header
        :resizable="false"
        size="mini"
        ref="filterTable"
        :data="agent"
        style="width: 100%"
      >
        <!-- v-if="ditch.type" -->
        <el-table-column :resizable="false" prop="createTime" label="日    期" width="100" @click="s(row)">
        </el-table-column>
        <el-table-column
          prop="modelNumber"
          label="原厂型号"
          sortable
          :resizable="false"
          width="170"
          @click="s(row)"
        ></el-table-column>
        <el-table-column :resizable="false" prop="price" label="单价" width="75"></el-table-column>
        <el-table-column :resizable="false" prop="deliveryValue" label="货期" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="spq" label="SPQ" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="moq" label="MOQ" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="supCode" label="代码" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="supName" label="供应商" width="125"></el-table-column>
        <el-table-column :resizable="false" prop="supLinkmanName" label="联络人" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="buyerName" label="采购员"></el-table-column>
      </el-table>
    </div>

     <div class="tan-boxs">
      <el-button type="success"  size="mini">增值贸易商</el-button>
      <el-table
        border
        show-header
        :resizable="false"
        size="mini"
        ref="filterTable"
        :data="trade"
        style="width: 100%"
      >
        <!-- v-if="ditch.type" -->
        <el-table-column :resizable="false" prop="createTime" label="日    期" width="100" @click="s(row)">
        </el-table-column>
        <el-table-column
          prop="modelNumber"
          label="原厂型号"
          sortable
          :resizable="false"
          width="170"
          @click="s(row)"
        ></el-table-column>
        <el-table-column :resizable="false" prop="price" label="单价" width="75"></el-table-column>
        <el-table-column :resizable="false" prop="deliveryValue" label="货期" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="spq" label="SPQ" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="moq" label="MOQ" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="supCode" label="代码" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="supName" label="供应商" width="125"></el-table-column>
        <el-table-column :resizable="false" prop="supLinkmanName" label="联络人" width="76"></el-table-column>
        <el-table-column :resizable="false" prop="buyerName" label="采购员"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 代理
       agent:[],
      //  贸易
      trade:[]
      // dialogTableVisible: false,
      // tableData:[]
    };
  },
  props: ["ditch"],
  watch:{
    ditch: "setDitch"
  },
  methods: {
    setDitch(){
        this.ditch.forEach(item => {
      if(item.type==0){
        this.agent.push(item)
      }else if(item.type==1){
         this.trade.push(item)
      }
    });
    }
  }
};
</script>
<style scoped src="../../unfinished/index.css"></style>