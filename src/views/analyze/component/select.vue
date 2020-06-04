<template>
  <div>
      
    <el-select @change="change(value)" size="mini" v-model="value" :placeholder="pla" >
      <el-option  size="mini" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
     data() {
      return {
        value:""
      }
    },
    props:["options","pla"],
    created() {
        this.options = this.options
    },
    methods:{
      change(value){
        this.$emit('fnc',value)
      } 
    }
};
</script>