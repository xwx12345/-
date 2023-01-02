<template>
    <el-dialog title="登录账号" :visible.sync="detailVisible" width="40%">
		<div class="login" v-if="islogin">
			<el-tabs v-model="activeName">
			    <el-tab-pane label="密码登录" name="password">
					<div class="input">
						<input type="text" placeholder="学工号" v-model="number"/>
						<input type="password" placeholder="密码" v-model="password"/>
						<span @click="forget()">忘记密码？</span>
					</div>
				</el-tab-pane>
			</el-tabs>
			<div class="button">
				<button @click="login()">登录</button>
			</div>
		</div>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            detailVisible: false,
			islogin:true,
			activeName: 'password',
			number:'',
			password:'',
			repassword:'',
			code:'',
			email:''
        }
    },
    methods: {
		init(data) {
		    this.detailVisible = true;
		},
		change() {
			this.islogin=!this.islogin
		},
		forget(){
			console.log('忘记密码')
			this.$router.push('/forgetPwd')
		},
		getcode(){
			this.$message('已发送验证码')
		},
		login(){
			console.log('login')
			if(this.activeName==='password'){
				if(!this.number){
					this.$message.error('请输入账号')
					return
				}
				if(!this.password){
					this.$message.error('请输入密码')
					return
				}
			}else{
				
			}
		},
		register(){
			console.log('register')
		}
    }
}
</script>

<style scoped lang="scss">
.input{
	// background: #ffffff;
	transition: 1s;
	transition-delay: 0.2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	input{
	  background-color: #ffffff;
	  color: #b1797a;
	  width: 70%;
	  border: 1px solid #3d3d3d;
	  border-radius: 3px;
	  text-indent: 10px;
	  height: 30px;
	  font-size: 16px;
	  margin: 6px 0;
	  letter-spacing: 1px;
	}
	.code{
		width: calc(70% + 4px);
		display: flex;
		input{
			padding: 0;
		}
		.codeb{
			border: none;
		}
	}
	input::placeholder{
	  color:#b1797a;
	}
	span{
		cursor: pointer;
	}
	span:hover{
		color: #CF797A;
	}
}
.button{
	button{
	  width:60%;
	  margin-top: 20px;
	  outline: none;
	  border: none;
	  background: #CF797A;
	  border-radius: 8px;
	  padding: 13px;
	  font-size: 16px;
	  letter-spacing: 2px;
	  color: #fff;
	  transition: 1s;
	}
	button:hover{
	  background: #DE797A;
	}
}
.bottom{
	position: relative;
	margin-top: 5%;
	font-size: 18px;
	span{
		cursor: pointer;
	}
	span:hover{
		color: #CF797A;
	}
}
</style>