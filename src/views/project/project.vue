<template>
  <div class="container">
    <div class="left">
		<el-menu
		  :default-active="activeIndex"
		  :router="false"
		  class="menu"
		  mode="vertical"
		  background-color="#ffffff"
		  text-color="#7E789A"
		  active-text-color="#000000">
		   <el-menu-item @click="home()" index="/project/">
		   		<i class="el-icon-s-home"></i>项目主页
		   </el-menu-item>
		   <el-menu-item @click="repo()" index="/projectRepo">
		   		<i class="el-icon-message-solid"></i>实验报告上传
		   </el-menu-item>
		   <el-menu-item @click="grade()" index="/projectGrade">
		   		<i class="el-icon-view"></i>实验报告评分
		   </el-menu-item>
		</el-menu>
	</div>
	<div class="right">
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		activeIndex:'projectDetail',
		id:''
    }
  },
  methods: {
	  home(){
		  this.$router.push({
		    path: '/project',
		    query: { id: this.id }
		  })
	  },
	  repo(){
		  this.$router.push({
		    path: '/projectRepo',
		    query: { id: this.id }
		  })
	  },
	  grade(){
	  		  this.$router.push({
	  		    path: '/projectGrade',
	  		    query: { id: this.id }
	  		  })
	  }
	  

  },
  mounted () {
  },
  created () {
	  this.id=this.$route.query.id;
  }
}
</script>

<style scoped lang="scss">
.container{
	display: flex;
	.left{
		width: 20%;
	}
	.right{
		width: 80%;
	}
}
</style>