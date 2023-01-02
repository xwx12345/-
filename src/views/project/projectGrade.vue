<template>
  <div class="pc-container">
	  <div class="title">
		  实验报告评分
	  </div>
	  <div class="modify">
		  <span>修改报告得分为:</span>
		  <el-input v-model="point" placeholder="请输入要修改的得分"></el-input>
		  <el-button @click="save()">更新学生成绩</el-button>
	  </div>
	  <div class="table">
		  <el-table
		      :data="tableData"
			  :default-sort = "{prop: 'id', order: 'ascending'}"
		      >
		      <el-table-column
		        fixed
		        prop="id"
		        label="学号"
		        width="100"
				sortable>
		      </el-table-column>
			  <el-table-column
			    prop="name"
			    label="学生姓名"
			    width="150">
			  </el-table-column>
		      <el-table-column
		        prop="file"
		        label="报告"
		        width="120">
		      </el-table-column>
		      <el-table-column
		        prop="point"
		        label="得分"
		        width="120"
				sortable>
		      </el-table-column>
		      <el-table-column
		        label="操作"
		        width="120">
		        <template slot-scope="scope">
		          <el-button
		            @click="modify(scope.row)"
		            type="text"
		            size="small">
		            修改评分
		          </el-button>
		        </template>
		      </el-table-column>
			  <el-table-column
			    label="操作"
			    width="120">
			    <template slot-scope="scope">
			      <el-button
			        @click="gotoPdf(scope.row)"
			        type="text"
			        size="small">
			        查看文件
			      </el-button>
			    </template>
			  </el-table-column>
		    </el-table>
	  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		point:1,
		PDF:{
			name:'',
			url:''
		},
		tableData: [
			{
				id:'123',
				name:'学生1',
				file:'文件1',
				point:12
		    },
			{
				id:'12321',
				name:'学生2',
				file:'文件2',
				point:14
			},
			{
				id:'12345',
				name:'学生3',
				file:'文件3',
				point:15
			}
			]
    }
  },
  methods: {
	   modify(item){
	   		  item.point=this.point
	   		  this.$message('已成功修改！请前往保存')
	   },
	   gotoPdf(item){
		   console.log(item.file)
		   // var reader = new FileReader()
		   // reader.readAsDataURL(event.target.files[0])//读取文件
		   // reader.onload = function (e) {
		   //   _this.getPdfUrl(event.target.files[0])//将得到的blob传出读取
		   //   _this.PDF.name = event.target.files[0].name
		   //   inputDOM.value = null //将input置空 否则上传相同文件无反应 (不过置空后28行的打印 就看不到 event.target.files 文件数据（可以先注释此行看下数据--就是pdf文件）   )
		   // }
		   
		   window.open(this.PDF.url)
	   },
	   getPdfUrl (file) {
	     let url = URL.createObjectURL(file) //将blob文件转化成url
	     this.PDF.url = url  //赋值给url
	     console.log(url)  // blob:http://localhost:8080/f2049a9d-31a6-4bd9-8a94-23dee457218f
	     return url
	   },
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
	.pc-container{
		.title{
				padding: 10px;
				font-size: 30px;
				font-weight: 800;
			}
		.modify{
			display: flex;
			padding: 10px;
			font-weight: 800;
			el-input{
				width: 50%;
			}
		}
		.table{
			width: 80%;
			margin: 0 auto;
		}
	}
</style>