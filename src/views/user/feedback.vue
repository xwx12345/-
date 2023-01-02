<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <i class="el-icon-edit"></i>
        <span>反馈问题：</span>
      </div>
      <div class="middle">
        <el-input
          placeholder="请输入您的反馈..."
          v-model="input"
          :autosize="{ minRows: 8}"
          type="textarea"
          maxlength="300"
          show-word-limit
          class="txt">
        </el-input>
      </div>
      <div class="bottom">
        <button @click="submit()">submit</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { addFeedBack } from '@/api/user';

export default {
  data () {
    return {
      input:'',
    }
  },
  methods: {
    
      // submit(){
      //   addFeedBack({
      //     content:this.input
      //     }).then((r)=>{
      //     if(r.code===0){
      //       this.$message(r.message);
      //     }
      //     else{
      //       this.$message.error(r.message);
      //     }
      //   })
      // }
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.container{
  display:flex;
  width: 100%;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  .content{
    background-color: aliceblue;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    .top{
      display: flex;
      justify-content: flex-start;
      padding: 30px;
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 2px;
      color: #757a97;
    }
    .middle{
      display: flex;
      justify-content: center;
      width: 100%;
      padding:0 0 35px 0;
      .txt{
        width: 90%;
      }
    }
    .bottom{
      display: flex;
      justify-content: center;
      padding: 20px;
      button{
        width:200px;
        background-color:#757a97;
        color:white;
        font-size: 16px;
        padding:14px 20px;
        border:none;
        border-radius:4px;
        cursor:pointer;
        transition: 1s;
      }
      button:hover{
        background-color:#a89bcc;
      }
    }
  }
}
</style>
