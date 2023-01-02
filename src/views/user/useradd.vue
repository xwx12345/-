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
        <div class="button" @click="addUser()">
          <i class="el-icon-circle-plus-outline"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
		typeList:[
			{
				value: '1',
				label: '责任教师'
			},
			{
				value: '2',
				label: '教师'
			},
			{
				value: '3',
				label: '学生'
			}
		],
		user:{
			name:'000',
			id:'12345',
			password:'123456'
		}
    }
  },
  methods: {
	  addUser(){
		  
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
		    background: #aaaaff;
		    color: #fff;
		    padding: 10px;
		  }
		}
		.form{
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  background: rgba(255,255,255,0.5);
		  border-radius: 10px;
		  margin: 10px;
		  .main{
		    padding: 10px;
		    width: 50%;
		    span{
		      font-size: 16px;
		      font-weight: 600;
		      letter-spacing: 1px;
		      color: #d89f9f;
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
		    background: #aaaaff;
		    font-size: 16px;
		    color: #fff;
		    padding: 10px;
		  }
		}
	}
}
</style>