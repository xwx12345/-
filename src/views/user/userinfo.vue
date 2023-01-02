<template>
  <div class="pc-container">
	  <div class="info">
		  <el-descriptions title="个人信息" direction="vertical" class="margin-top" :column="2" border>
			<template slot="extra">
			    <el-button type="primary" size="small" @click="keep()">保存</el-button>
			</template>
		    <el-descriptions-item label="姓名">{{user.name}}</el-descriptions-item>
		    <el-descriptions-item label="手机号"><el-input v-model="user.tele" clearable></el-input></el-descriptions-item>
		    <el-descriptions-item label="学工号">{{user.id}}</el-descriptions-item>
		    <el-descriptions-item label="邮箱地址"><el-input v-model="user.email" clearable></el-input></el-descriptions-item>
		  </el-descriptions>
	  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		user:{
			name:'kooriookami',
			tele:1234567,
			id:2052529,
			email:'xxxx@qq.com'
		}
    }
  },
  methods: {
	  keep(){
		  this.$message('已保存！')
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
	width: 100%;
	display: flex;
	// background-color: #aaffff;
	justify-content: center;
	.info{
		background-color: #ebf3f5;
		width: 80%;
		margin: 5%;
		padding: 30px;
	}
}
</style>