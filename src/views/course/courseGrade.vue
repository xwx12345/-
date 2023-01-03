<template>
  <div class="pc-container">
	  <div class="title">
		  <span style="color: #6a66a2;">{{course.title}}(id:{{course.id}})</span>
		  <span>成绩管理</span>
	  </div>
	  <div class="modify">
		  <span>修改选中项目成绩为:</span>
		  <el-input v-model="point" placeholder="请输入要修改的成绩"></el-input>
		  <el-button @click="save()">保存课程成绩分配</el-button>
	  </div>
	  <div class="table">
		  <el-table
		      :data="tableData"
		      border
			  show-summary
			  :default-sort = "{prop: 'no', order: 'ascending'}">
		      <el-table-column
		        fixed
		        prop="no"
		        label="项目序号"
				sortable>
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="名称"
				sortable>
		      </el-table-column>
		      <el-table-column
		        prop="point"
		        label="项目分数"
				sortable>
		      </el-table-column>
			  <el-table-column
			    fixed="right"
			    label="操作">
			    <template slot-scope="scope">
			      <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
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
		course:{
			title:'软件工程实验',
			id:''
		},
		point:1,
		tableData: [
			{
				no: '00',
				name: '考勤',
				point:12
			}, 
			{
				no: '01',
				name: '项目1',
				point:12
		    }, 
			{
				no: '02',
				name: '项目2',
				point:12
			}, 
			{
				no: '03',
				name: '项目3',
				point:123
			}
		]
    }
  },
  methods: {
	  handleClick(item){
		  item.point=this.point
		  this.$message('已成功修改！请前往保存')
	  },
	  save()
	  {
		  this.$message('已成功保存当前成绩分配方案')
	  }
  },
  mounted () {
  },
  created () {
	  this.course.id = this.$route.query.id;
  }
}
</script>

<style scoped lang="scss">
.pc-container{
	width: 80%;
	margin:0 auto;
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
		background-color: aliceblue;
	}
}
</style>