<template>
  <div class="container">
    <div class="main">
      <div class="sub_div">
        <el-menu
          :default-active="activeIndex"
          :router="true"
          class="el-menu-vertical-demo"
          background-color="#ffffff"
          text-color="#7E789A"
          active-text-color="#000000">
          <el-menu-item index="/user/">
            <i class="el-icon-user-solid"></i>
            个人信息
          </el-menu-item>
          <el-menu-item index="/feedback">
            <i class="el-icon-question"></i>
            反馈中心
          </el-menu-item>
		  <el-menu-item index="/useradd">
		    <i class="el-icon-circle-plus-outline"></i>
		    加入用户
		  </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
		
    }
  },
  methods: {

  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  margin: 0 auto;
  .main{
    // background: #ffaa00;
    display: flex;
    .sub_div{
      width: 20%;
    }
    .right{
      // background: #fdf6f9;
      width: 80%;
    }
  }
}


</style>
