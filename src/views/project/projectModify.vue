<template>
  <div class="pc-container">
	  <div class="title">
		  <span style="font-size: 30px;">修改项目信息</span>
		  </br>
		  <span>id:{{project.id}}</span>
		  <el-button @click="save()">保存修改</el-button>
	  </div>
	  <div class="modify">
		  <span>项目名：</span>
		  <el-input v-model="project.name"></el-input>
	  </div>
	  <div class="modify">
	  		  <span>项目总分：</span>
	  		  <el-input v-model="project.point"></el-input>
	  </div>
	  <div class="modify">
	  		<span>项目信息简介：</span>
	  		<el-input type="textarea" v-model="project.info"></el-input>
	  </div>
	  <div class="modify">
	  		<span>项目实验报告要求：</span>
	  		<el-input type="textarea" v-model="project.re"></el-input>
	  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		project:{
			id:'1',
			name:'项目1',
			point:1,
			info:'一些简单描述',
			re:'简单的报告要求123'
		}
    }
  },
  methods: {
	  save(){
		  this.$message('已经保存修改')
		  this.$router.push('/project')
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