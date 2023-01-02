<template>
  <div class="pc-container">
	  <div class="top">
		  <div class="title">具体要求</div>
		  <span>{{demand}}</span>
	  </div>
    <div>
		<el-upload
		    class="upload-demo"
		      :on-success="handlePreview"
		      :on-remove="handleRemove"
			  :on-change="fileChange"
		      :before-upload="beforeUpload"
		      :on-preview="Previewf"
		      multiple
		      :limit="5"
		      :on-exceed="handleExceed"
		      :file-list="fileList"
			  :auto-upload="false">
		    <el-button slot="trigger" icon="el-icon-upload2" @click="uploadFileClick($event)">选择实验报告</el-button>
			<el-button style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器</el-button>
		</el-upload>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		demand:'我是实验报告的要求',
		fileList:[
			{
				name: 'food.jpeg',
				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
			},
			{
				name: 'food2.jpeg', 
				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
			}]
    }
  },
  methods: {
	  handleRemove(file, fileList) {
	          console.log(file, fileList);
	        },
	  handlePreview(file) {
	          console.log(file);
	        },
	fileChange(file, fileList){
		this.fileList=fileList
	},
	submitUpload (file, fileList) {
		// axios将数据发送到服务器
		let setting = {
		    url: 'http://localhost:8080/uploadfile',
		    method: 'post',
		    headers: {
		      'Content-Type': 'application/x-www-form-urlencoded'
		    },
		    data: this.formData
		  }
		  this._axiosMock(setting).then(res => {
		    console.log(res)
		  })
		},
	  Previewf(file) 
	  {
		  console.log(file);
		  if (file) {
		    const addTypeArray = file.name.split(".");
		    const addType = addTypeArray[addTypeArray.length - 1];
		    if (addType === "pdf") {
		      let routeData = this.$router.resolve({
		        path: "/insurancePdf",
		        query: { url: file.response, showBack: false },
		      });
		      window.open(routeData.href, "_blank");
		    }
		    //".rar, .zip, .doc, .docx, .xls, .txt, .pdf, .jpg,  .png, .jpeg,"
		    else if (addType === "doc" || addType === "docx" || addType === "xls") {
		      window.open(
		        "http://view.officeapps.live.com/op/view.aspx?src=" + file.url
		      );
		    } else if (addType === "txt") {
		      window.open(file.url);
		    } else if (["png", "jpg", "jpeg"].includes(addType)) {
		      window.open(file.url);
		    } else if (addType === "rar" || addType === "zip") {
		      this.$message({
		        message: "该文件类型暂不支持预览",
		        type: "warning",
		      });
		       return false;
		    }
      }
    }
  },
  mounted () {
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.top{
	background-color: aliceblue;
	margin:20px;
	padding: 10px;
	.title{
		padding: 10px;
		font-size: 30px;
		font-weight: 800;
	}
}
</style>