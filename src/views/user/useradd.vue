<template>
  <div class="pc-container">
    <div class="add">
      <div class="button">
        <span>增加用户</span>
      </div>
      <div class="form">
        <div class="main">
          <span>用户名:</span>
          <input v-model="user.name"/>
          <br />
          <span>学工号</span>
          <input v-model="user.id"/>
          <br />
          <span>密码:</span>
          <input v-model="user.password"/>
		  <br />
		  <span>邮箱:</span>
		  <input v-model="user.email"/>
		  <br />
		  <span>用户类型:</span>
		  <el-select v-model="user.type" placeholder="请选择用户类型">
		  <el-option
		    v-for="item in typeList"
		    :key="item.value"
		    :label="item.label"
		    :value="item.value"
		    >
		  </el-option>
		  </el-select>
		</div>
        <div class="button" @click="addUser()">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
    </div>
	<div class="button">
	    <span>增加课程</span>
	</div>
	  <div class="form">
	    <div class="main">
	      <span>课程名:</span>
	      <input v-model="course.name"/>
	      <br />
	      <span>课程id</span>
	      <input v-model="course.id"/>
	      <br />
		  <span>教师id:</span>
		  <input v-model="course.teacher"/>
		  <br />
		  <span>课程简介</span>
		  <el-input type="textarea" v-model="course.info"/>
		  <br />
		</div>
	    <div class="button" @click="addCourse()">
	      <i class="el-icon-circle-plus-outline"></i>
	    </div>
	  </div>
	  <div class="button">
	      <span>为课程增加学生</span>
	  </div>
	    <div class="form">
	      <div class="main">
	        <span>课程id</span>
	        <input v-model="course.id"/>
	        <br />
	  	    <span>学生id:</span>
	  	    <input v-model="student"/>
	  	  </div>
	      <div class="button" @click="courseAddStu()">
	        <i class="el-icon-circle-plus-outline"></i>
	      </div>
	    </div>
  </div>
</div>
</template>

<script>
import {UserAdd,CourseAddStudent,createCourse} from '../../api/user'
export default {
  data () {
    return {
		typeList:[
			{
				value: 'main_teacher',
				label: '责任教师'
			},
			{
				value: 'teacher',
				label: '教师'
			},
			{
				value: 'student',
				label: '学生'
			}
		],
		user:{
			name:'000',
			id:'12345',
			password:'123456',
			email:'123@qq.com',
			type:'student'
		},
		course:{
			name:'课程1',
			id:'001',
			teacher:'010',
			info:'一句话简介'
		},
		student:'124'
    }
  },
  methods: {
	  addUser(){
		  UserAdd ({
		    userid: this.user.id,
			username:this.user.name,
		    password: this.user.password,
			email:this.user.email,
			user_type:this.user.type
		  }).then((r)=>{
			  console.log(r)
			  consolg.log(r.data)
			  this.$message(r.data)
		  }).catch((err)=>{
		    console.log(err)
		  })
	  },
	  addCourse(){
		  console.log('增加课程')
		  createCourse({
			  courseid:this.course.id,
			  coursename:this.course.name,
			  userid:this.course.teacher,
			  courseinfo:this.course.info
		  }).then((r)=>{
			  console.log(r)
			  this.$message(r.data)
		  }).catch((err)=>{
			  console.log(err)
		  })
	  },
	  courseAddStu(){
		  console.log('课程增加学生')
		  CourseAddStudent({
			  userid:this.student,
			  courseid:this.course.id
		  }).then((r)=>{
			  console.log(r)
			  this.$message(r.data)
		  }).catch((err)=>{
			  console.log(err)
		  })
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
	.add{
		.button{
		  margin: 10px;
		  span{
		    display: inline-block;
		    border-radius: 10px;
		    background: #aacfff;
		    color: #fff;
		    padding: 10px;
		  }
		}
		.form{
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  background: #e1ecff;
		  border-radius: 10px;
		  margin: 10px;
		  .main{
		    padding: 10px;
		    width: 50%;
		    span{
		      font-size: 16px;
		      font-weight: 600;
		      letter-spacing: 1px;
		      color: #927d9e;
		      margin-right: 10px;
		    }
		    input{
		      color: #908eb4;
		      width: 80%;
		      border: 1px solid #ffffff;
		      border-radius: 4px;
		      height: 28px;
		      font-size: 16px;
		      margin: 6px 0;
		      letter-spacing: 1px;
		      transition: 1s;
		    }
		    input:focus{
		      color: #d89f9f;
		      font-size: 17px;
		      letter-spacing: 2px;
		    }
		    textarea{
		      color: #908eb4;
		      width: 80%;
		      border: 1px solid #ffffff;
		      border-radius: 4px;
		      height: 200px;
		      font-size: 16px;
		      margin: 6px 0;
		      letter-spacing: 1px;
		      transition: 1s;
		    }
		  }
		  .button{
		    border-radius: 10px;
		    background: #aacfff;
		    font-size: 16px;
		    color: #fff;
		    padding: 10px;
		  }
		}
	}
}
</style>