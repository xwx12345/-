<template>
  <div class="pc-container">
	  <div class="title">
		  <span style="font-size: 30px;">修改课程信息</span>
		  </br>
		  <span>id:{{course.id}}</span>
		  <el-button @click="save()">保存修改</el-button>
	  </div>
	  <div class="modify">
		  <span>课程名：</span>
		  <el-input v-model="course.name"></el-input>
	  </div>
	  <div class="modify">
	  		<span>课程教师id：</span>
	  		<el-input v-model="course.teacher"></el-input>
	  </div>
	  <div class="modify">
	  		<span>课程信息简介：</span>
	  		<el-input type="textarea" v-model="course.info"></el-input>
	  </div>
	  <div class="modify">
	  		<span>课程公告：</span>
	  		<el-input type="textarea" v-model="course.public"></el-input>
	  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		course:{
			id:'1',
			name:'课程1',
			teacher:'123',
			info:'一些简单描述',
			public:'公共内容'
		}
    }
  },
  methods: {
	  save(){
		  this.$message('已经保存修改')
		  this.$router.push('/course')
	  }
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.pc-container{
	width: 80%;
	margin:0 auto;
	.title{
		padding: 10px;
		font-size: 20px;
		font-weight: 800;
		// background-color: #cdf0ff;
	}
	.modify{
		width: 60%;
		margin:0 auto;
		padding: 10px;
		display: flex;
		span{
			width: 50%;
		}
	}
}
</style>