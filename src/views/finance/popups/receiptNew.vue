<template>
    <div class="finance">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">

            <!-- 操作按钮 -->
            <div class="operating-btn">
                <div class="operating-item" @click="submitForm('ruleForm')">
                    <i class="iconfont">&#xe61f;</i>
                    <span>保存</span>
                </div>
                <div class="operating-item">
                    <i class="iconfont">&#xe653;</i>
                    <span>修改</span>
                </div>
                <div class="operating-item">
                    <i class="iconfont">&#xe667;</i>
                    <span>删除</span>
                </div>
            </div>

            <div style="display: flex">

                <div class="form-left">

                    <el-form-item label="付款单号：">
                        <div class="form-item-cont cont-width-one">
                            <!-- <span >PAY190001</span> -->
                             <el-input style="color: #3800FD" size="mini" v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                    </el-form-item>
                    <div class="form-item">
                        <el-form-item label="财务科目：" prop="name1">
                            <div class="cont-width-one" style="padding-right: 45px;">
                                <el-select size="mini" v-model="ruleForm.name1" placeholder="请选择">
                                    <el-option
                               
                                v-for="item in financialAccount"
                                :key="item.value"
                                :label="item.attrName"
                                :value="item.id">
                                </el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                        <el-form-item label="科目明细：" prop="name2">
                            <div class="cont-width-one">
                                <el-select size="mini" v-model="ruleForm.name2" placeholder="请选择">
                                    <el-option
                                v-for="item in accountDetails"
                                :key="item.id"
                                :label="item.attrName"
                                :value="item.id">
                                </el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                    </div>

                    <div class="form-item"></div>

                    <el-form-item label="付款日期：" prop="input1">
                        <div class="cont-width-one">
                            <el-date-picker
                 size="mini"
      v-model="ruleForm.input1"
       value-format="yyyy-MM-dd"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
                        </div>
                    </el-form-item>

                    <el-form-item label="收款公司：" prop="input2">
                        <div class="cont-width-two">
    <el-autocomplete
    size="mini"
      class="inline-input"
      v-model="ruleForm.input2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
            </div>
                    </el-form-item>

                    <el-form-item label="收款银行：" prop="name3">
                        <div class="cont-width-two">
                            <el-select size="mini" v-model="ruleForm.name3" placeholder="请选择">
                              <el-option
                                v-for="item in bank"
                                :key="item.id"
                                :label="item.attrName"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-form-item>

                    <el-form-item label="收款人：" prop="input3">
                        <div class="cont-width-two">
                            <!-- <el-select size="mini" v-model="ruleForm.name" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select> -->
                               <el-input size="mini" v-model="ruleForm.input3" placeholder="请输入内容"></el-input>
                        </div>
                    </el-form-item>

                    <el-form-item label="发票号码：" prop="input4">
                        <div class="cont-width-two">
                            <el-input size="mini" v-model="ruleForm.input4" placeholder="请输入内容"></el-input>
                        </div>
                    </el-form-item>

                    <div class="form-item"></div>

                    <el-form-item label="税率：" prop="name4">
                        <div class="cont-width-one" style="padding-right: 20px;">
                            <el-select size="mini" v-model="ruleForm.name4" placeholder="请选择">
                               <el-option
                                v-for="item in taxRate"
                                :key="item.id"
                                :label="item.attrName"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-form-item>

                    <div class="form-item">
                        <el-form-item label="付款金额：" prop="input5">
                            <div class="cont-width-one" style="padding-right: 20px;">
                            <el-input size="mini" v-model="ruleForm.input5" placeholder="请输入内容"></el-input>
                            </div>
                        </el-form-item>
                        <!-- <el-form-item prop="name">
                            <div class="cont-width-one">
                                <el-select size="mini" v-model="ruleForm.name" placeholder="请选择">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-form-item> -->
                    </div>

                    <div class="form-item"></div>

                    <el-form-item label="付款银行：" prop="name5">
                        <div class="cont-width-two">
                            <el-select size="mini" v-model="ruleForm.name5" placeholder="请选择">
                                 <el-option
                                v-for="item in bank"
                                :key="item.id"
                                :label="item.attrName"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-form-item>

                    <el-form-item label="付款单位：" prop="name6">
                        <div class="cont-width-two">
                            <el-select size="mini" v-model="ruleForm.name6" placeholder="请选择">
                               <el-option
                  v-for="item in departmentPullDown"
                  :key="item.value"
                  :label="item.departmentName"
                  :value="item.departmentName"
                ></el-option>
                            </el-select>
                        </div>
                    </el-form-item>

                    <el-form-item label="财务备注：" prop="input6" class="red-font">
                        <div class="cont-width-two">
                            <el-input size="mini" v-model="ruleForm.input6" placeholder="请输入内容"></el-input>
                        </div>
                    </el-form-item>

                </div>

                <div class="form-right">

                    <el-form-item label="支付凭证：" style="align-items: flex-start">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                             drag
                            :auto-upload="false">
                            <el-input size="mini" placeholder="点击上传" slot="trigger" ></el-input>
                            <el-button size="mini" style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器</el-button>
                        </el-upload>
                    </el-form-item>

                    <div class="form-item"></div>

                    <el-form-item label="付款水单：" style="align-items: flex-start">
                        <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                              drag
                            :auto-upload="false">
                            <el-input size="mini" placeholder="点击上传" slot="trigger" ></el-input>
                            <el-button size="mini" style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器</el-button>
                        </el-upload>
                    </el-form-item>

                </div>

            </div>

        </el-form>

    </div>
</template>

<script>
import bus from "@/assets/Bus";
import{addReceipt,fuzzyCustomer} from '../../../api/finance'
export default {
    name: "receiptNew",
    components: {},
    data() {
        return {
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },{
                    value: '选项2',
                    label: '双皮奶'
                },{
                    value: '选项3',
                    label: '蚵仔煎'
                },{
                    value: '选项4',
                    label: '龙须面'
                },{
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            input: '',

            fileList: [
                {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
                {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            ],

            ruleForm: { 
                name1: '',
                name2: '',
                name3: '',
                name4: '',
                name5: '',
                name6: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
                input6: '',
            },
            rules: {
                name1: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                input1: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                 name2: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                input2: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                 name3: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                input3: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                 name4: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                input4: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                 name5: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                input5: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                 name6: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
                input6: [
                    { required: true, message: '请填写内容', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        //提交
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
               let data = {
            singleNumber: this.input,
            financialAccount: this.ruleForm.name1,
            accountDetails: this.ruleForm.name2,
            paymentDate: this.ruleForm.input1,
            linkerpSupplierId: this.ruleForm.input2,
            beneficiaryBank: this.ruleForm.name3,
            payee:this.ruleForm.input3,
            invoiceNumber:this.ruleForm.input4,
            taxRate:this.ruleForm.name4,
            paymentAmount:this.ruleForm.input5,
            paymentBank:this.ruleForm.name5,
            paymentUnit:this.ruleForm.name6,
            financialNotes:this.ruleForm.input6,
          };
          console.log(data)
          addReceipt(data).then(res => {
            console.log(res);
          });
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
         querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll(arr) {
        return arr
        },
       handleSelect(item) {
        console.log(item);
      }
    },
    props:['departmentPullDown','taxRate','financialAccount','accountDetails','bank'],
    created() {
        //bus.on('xxx',() => { })
    },
    mounted(){
    let data = {chineseName:""}
    let arr = []
    fuzzyCustomer(data).then(res =>{
     arr = res.result
     arr.forEach(el => {
     el.value =  el.chineseName
     });
      console.log(this.loadAll(arr))
      this.restaurants =this.loadAll(arr)
    })
  }
};
</script>

<style lang='scss' src="../style.scss"></style>