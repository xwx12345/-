<template>
  <div class="container">
	  <div class="left">
	  		  <el-menu class="menu" >
	  			  <el-submenu index="year">
	  			        <span slot="title" style="font-weight: 700;">
	  						<i class="el-icon-s-grid"></i>
	  						所有课程
	  					</span>
	  					<el-menu-item v-for="(item, index) in menuList1" :key="index" @click="handleClick(item)">
	  					  <template #title>
	  					    <span>{{item.name}}</span>
	  					  </template>
	  					</el-menu-item>
	  			  </el-submenu>
	  			  <el-submenu index="a">
	  			        <span slot="title" style="font-weight: 700;">
	  			  			<i class="el-icon-office-building"></i>
	  			  			我的收藏
	  			  		</span>
	  			  		<el-menu-item @click="handleAll()">不分类</el-menu-item>
	  			  		<el-menu-item v-for="(item, index) in menuList2" :key="index" @click="handleClick(item)">
	  			  		  <template #title>
	  			  			<span>{{item}}</span>
	  			  		  </template>
	  			  		</el-menu-item>
	  			  </el-submenu>
	  		  </el-menu>
	  </div>
	  <div class="right">
		  <div class="top">
		  		  <div>
		  			  <span>课程名</span>
					  {{course.name}}
		  		  </div>
		  		  <div>
		  			  <span>授课老师</span>
		  			  {{course.teacher}}
		  		  </div>
		  		  <div>
		  			  <span>课程信息</span>
		  			  {{course.info}}
		  		  </div>
				  <div>
				  	<span>课程公告</span>
				  	{{course.public}}
				  </div>
				  <div>
					  <el-button @click="jumpToGrade(course.id)">查看课程分数分配方案</el-button>
					  <el-button @click="modify(course.id)">编辑课程信息</el-button>
					  <el-button @click="addProject(course.id)">加入项目</el-button>
				  </div>
		  </div>
		  <div class="bottom">
		  		<div class="right_top">
		  		  	<span>项目信息</span>
		  		  	<span>截止时间</span>
		  		</div>
		  		<div class="right_middle">
		  		  	<div class="box" v-for="project in projectList" >
		  		  		<div class="cover" @click="jump()">
		  		  			<img :src="project.cover"/>
		  		  		</div>
		  		  		<div class="intro">
		  		  			<div class="title">{{project.title}}</div>
		  		  			<div class="info">{{project.info}}</div>
		  		  		</div>
		  		  		<div class="teacher">
		  		  			{{project.ddl}}
		  		  		</div>
		  		  	</div>
		  		</div>
		  		<!-- <div class="right_bottom">
		  		  	<el-pagination
		  		  		@current-change="handleCurrentChange"
		  		  		:current-page.sync="currentPage"
		  		  		:page-size="100"
		  		  		layout="total, prev, pager, next"
		  		  		:total="1000">
		  		  	</el-pagination>
		  		</div> -->
		  </div>
	  </div>
  </div>
</template>

<script>
import {getCourses} from '../../api/course'
export default {
  data () {
    return {
		currentPage:1,
		menuList1:[
			// {
			// 	id:'1',
			// 	name:'课程1'
			// },
			// {
			// 	id:'2',
			// 	name:'课程2'
			// }
		],
		menuList2:[
			'假数据1',
			'假数据4'
		],
		allCourseInfo:[],
		course:{
			id:1,
			name:'物理实验',
			teacher:'老师A',
			info:'物理实验就是物理实验',
			public:'一些公共信息'
		},
		projectList:[
			{
				cover:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				ddl:'1.1',
				title:'标题',
				info:'相关信息1',
			},
			{
				cover:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
				ddl:'1.2',
				title:'标题1',
				info:'相关信息2',
			},
			{
				cover:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
				ddl:'1.3',
				title:'标题2',
				info:'相关信息1',
			},
			{
				cover:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
				ddl:'1.4',
				title:'标题3',
				info:'相关信息244',
			},
			{
				cover:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
				ddl:'1.4',
				title:'标题3',
				info:'相关信息244',
			},
			{
				cover:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
				ddl:'1.4',
				title:'标题3',
				info:'相关信息244',
			}
		]
    }
  },
  methods: {
	  handleClick(item){
		  console.log(item)
		  this.course.id=item.id
		  this.course.name=item.name
	  },
	  handleAll(){
		  this.department='全部'
	  },
	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
	  },
	  jump(){
		  console.log('jump')
		  this.$router.push('/project')
	  },
	  jumpToGrade(id){
		  console.log('jump to grade')
		  this.$router.push('/courseGrade')
	  },
	  modify(id){
		  console.log('jump to modify')
		  this.$router.push('/courseModify')
	  },
	  addProject(id){
		  console.log('jump to add')
		  this.$router.push('/courseAddPro')
	  }
  },
  mounted () {
  },
  created () {
	  //得到所有课程
	  getCourses().then((r)=>{
		  console.log(r)
		  r.forEach(item=>{
			  this.menuList1.push(
			  {
				  id:item.courseid,
				  name:item.coursename
			  })
			  this.allCourseInfo.push(item)
		  })
	  }).catch((err)=>{
		  console.log(err)
	  })
	  console.log(this.allCourseInfo)
	  //更改课程主体
	  this.course.id=this.menuList1[0].id
	  this.course.name=this.menuList1[0].name
	  //渲染项目
	  
  }
}
</script>

<style scoped lang="scss">
.container{
	// background: #00aaff;
	width: 98%;
	margin: 0 auto;
	display: flex;
	.left{
		width: 20%;
		border-right: solid #968c88 1px;
	}
	.right{
		width: 76%;
		margin: 0 auto;
		.top{
			width: 60%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			// background-color: #db4900;
			div{
				padding: 10px;
			}
			span{
				display: inline-block;
				padding: 10px;
				background-color: #afc4db;
				color: white;
				font-weight: 800;
				border-radius: 5px;
			}
		}
		.bottom{
			display: flex;
			flex-direction: column;
			.right_top{
				display: flex;
				justify-content: space-between;
				background: #e3eef4;
				color: #968c88;
				width: 100%;
				// margin: 0 auto;
				span{
					display: inline-block;
					// background: #ffaa00;
					margin: 10px;
				}
			}
			.right_middle{
				// background: #aaaaff;
				.box{
					display: flex;
					padding: 10px;
					justify-content: space-between;
					.cover{
						padding: 10px;
						cursor: pointer;
						width: 70px;
						height: 80px;
						img{
							object-fit: contain;
							width: 100%;
							height: 100%;
						}
					}
					.teacher{
						width: 10%;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 16px;
					}
					.intro{
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: flex-start;
						width:90%;
						font-size:16px;
						.title{
							font-size:18px;
							font-weight: 600;
							// margin-right: 5px;
							cursor: pointer;
						}
						.title:hover{
							color:#db4900;
						}
						.info{
							color:#b7b7b7;
						}
					}
				}
			}
			.right_bottom{
				background: #f4f1f0;
				// color: #968c88;
			}
		}
	}
}
.box{
	
}
</style>