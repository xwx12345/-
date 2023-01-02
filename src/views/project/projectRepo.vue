<template>
  <div class="pc-container">
	  <div class="top">
		  <div class="title">具体要求</div>
		  <span>{{project.demand}}</span>
		  <br />
		  <span style="font-weight: 700;">报告得分：{{project.point}}</span>
	  </div>
	  <div class="up">
		  <div class="choose">
			  <el-button icon="el-icon-document-copy" type="primary" @click="checkFile">选择文件</el-button>
			  <input id="fileinput" type="file" style="display: none;" @change="uploadPdf($event)" />
			  <span>请上传pdf类型的文件</span>
		  </div>
		  <div v-if="PDF.name" @click="gotoPdf()" class="pdf">
		    <span>{{PDF.name}}</span>
		    <span @click.stop.prevent="delPdf()" style="color: crimson;"><i class="el-icon-delete"></i></span>
		  </div>
	  </div>
	  <div>
		  <el-button @click="submit">上传文件</el-button>
	  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
		project:{
			demand:'我是实验报告的要求',
			point:1
		},
		file:{
			
		},
		PDF:{
			name:'',
			url:'',
		}
    }
  },
  methods: {
	  uploadPdf (event) {
	    console.log(event)
	    if (event.target.files[0].type != 'application/pdf') {
	      return this.$message.warning('请选择上传pdf文件')
	    }
		this.file=event.target.files[0]
		console.log(this.file)
	    let inputDOM = event.target
	    let _this = this
	    var reader = new FileReader()
	    reader.readAsDataURL(event.target.files[0])//读取文件
	    reader.onload = function (e) {
	      _this.getPdfUrl(event.target.files[0])//将得到的blob传出读取
	      _this.PDF.name = event.target.files[0].name
	      inputDOM.value = null //将input置空 否则上传相同文件无反应 (不过置空后28行的打印 就看不到 event.target.files 文件数据（可以先注释此行看下数据--就是pdf文件）   )
	    }
	  },
	  getPdfUrl (file) {
	    let url = URL.createObjectURL(file) //将blob文件转化成url
	    this.PDF.url = url  //赋值给url
	    console.log(url)  // blob:http://localhost:8080/f2049a9d-31a6-4bd9-8a94-23dee457218f
	    return url
	  },
	  handleRemove(file, fileList) {
	          console.log(file, fileList);
	  },
	  gotoPdf(){
	  	window.open(this.PDF.url)
	  },
	  submit(){
	  	console.log('upload')
	  },
	  delPdf () {
	  	this.file=''
	    this.PDF.name = ''
	    this.PDF.url = ''
	  },
	  checkFile () {
	      document.querySelector('#fileinput').click()
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
.up{
	// background-color: #ffaa00;
	font-size: 14px;
	color:#3d4a55;
	padding: 10px;
	.choose{
		padding: 10px;
		color:#6b8194;
	}
	.pdf{
		cursor: pointer;
	}
}
</style>