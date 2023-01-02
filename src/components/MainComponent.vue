<template>
  <div class="container">
	<div class="top">
		<el-menu
		  :default-active="activeIndex"
		  :router="true"
		  class="menu"
		  mode="horizontal"
		  background-color="#c7cbf9"
		  text-color="#7E789A"
		  active-text-color="#ffffff">
		  <div class="left">
			
		  </div>
		  <div class="middle">
			  <el-menu-item index="/">
			  			  <i class="el-icon-s-home"></i>首页
			  </el-menu-item>
			  <el-menu-item index="/user">
			  			  <i class="el-icon-user"></i>用户
			  </el-menu-item>
			  <el-menu-item index="/course">
			  			  <i class="el-icon-s-home"></i>课程
			  </el-menu-item>
		  </div>
		  <div class="right" @click="login()">
		  	<span>登录</span>
		  </div>
		</el-menu>
	</div>
	<div class="main">
	  <router-view />
	</div>
	<login v-if="Visible" ref="login"></login>
  </div>
</template>

<script>
import login from '@/components/login.vue'
export default {
  components:{
	  login
  },
  data () {
    return {
		Visible:false,
		activeIndex:'/',
		ishome:true,
		searchContent:''
    }
  },
  methods: {
	  login() {
	    this.Visible = true;
	    this.$nextTick(() => {
	      this.$refs.login.init();
	    })
	  },
	  search() {
		  
	  }
  },
  watch:{
	  $route(newValue, oldValue) {
		if(newValue.name==='home'){
			this.ishome=true
		}else{
			this.ishome=false
		}
	}
  },
  mounted () {
  },
  created () {
	  if(this.$route.name==='home'){
		  this.ishome=true
	  }else{
		  this.ishome=false
	  }
  }
}
</script>

<style scoped lang="scss">
.container{
	.top{
		width: 100%;
		//margin:0 0 100px 0;
		.menu{
			display: flex;
			justify-content: space-between;
			padding: 8px;
			.left{
				width: 15%;
				.logo{
					width: 100%;
					height: 100%;
				}
			}
			.right{
				// background: #ffaa7f;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				span{
					display: inline-box;
					background: #ffffff;
					box-shadow: 0 5px 10px rgba(0,0,0,0.2);
					// border: #aaaaff solid 2px;
					border-radius: 5%;
					padding: 8px 10px;
				}
			}
			.search {
			  margin: auto 0;
			  input {
			    background-color: #ffffff;
			    color: #676767;
			    border: 1px solid #ffffff;
			    border-radius: 4px;
				box-shadow: 0 5px 10px rgba(0,0,0,0.2);
				// box-shadow: #676767 10px ;
			    text-indent: 10px;
			    height: 35px;
			    font-size: 14px;
			    letter-spacing: 1px;
			  }
			  button {
				margin: 5px;
			    outline: none;
			    border: none;
			    height: 37px;
			    width: 37px;
			    background: #db4900;
			    border-radius: 100%;
			    font-size: 12px;
			    letter-spacing: 2px;
			    color: #fff;
			    transition: 1s;
			  }
			  button:hover {
			    background: #b83d00;
			  }
			}
			.middle{
				display: flex;
			}
		}
	}
}
</style>