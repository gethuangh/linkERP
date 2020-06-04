<template>
  <div>

    <div class="import-box">
    
      <p>批量导入 - 复制粘贴导入（遇到相同型号，自动覆盖）</p>

      <div class="product-import-model">
        <div>零件型号</div>
        <div>制造商</div>
        <div>包装类型</div>
        <div>最小包装数量</div>
        <div>是否在售</div>
        <div>零件描述</div>
        <div>零件类别</div>
        <div>零件子类别</div>
      </div>

      <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>

      <el-button size="mini" type="success" plain>批量导入</el-button>

    </div>

    <div class="export-box">

      <p>批量导出 - 导出EXCEL格式</p>

      <el-button size="mini" type="success">批量导出</el-button>

    </div>

  </div>
</template>

<script>

import Pagination from '@/components/Pagination.vue'
import bus from '@/assets/Bus'
export default {
  name: 'productTypeSearch',
  components: {
    Pagination
  },
  data() {
    return {
      input: '',
      value: '',
      textarea: '',
    }
  },
  methods: {

  },
  created(){
    bus.$on('xxx',() => {
      this.dialogVisible = true
    })
  }
}
</script>

<style lang="scss" scoped>

.import-box {
  width: 1080px;
  padding-bottom: 50px;

  .product-import-model {
    display: flex;
    width: 100%;
    padding: 3px 0 10px;
    justify-content: space-between;
  }

  .el-textarea {
    width: 100%;
    padding-bottom: 5px;
  }

  .el-button {
    float: right;
  }
}

.el-button {
  margin: 10px 0;
}
 
</style>