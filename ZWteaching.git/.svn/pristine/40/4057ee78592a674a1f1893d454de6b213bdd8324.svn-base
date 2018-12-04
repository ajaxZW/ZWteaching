
<template>
    <div>
    	<br /><br /><br />
    	
    	<el-row>
    		<el-col :span="24" :offset="5">
    			<el-input v-model='title' placeholder="请输入标题"></el-input>
    			
    	  <div id="editorElem" style="text-align:left"></div>
   <button v-on:click="getContent">{{this.$route.query.index}}</button>
   <button v-on:click="get">反向获取</button>
   <div id="showContent"></div></el-col>
   </el-row>
    </div> 
</template>

<script>
  import E from 'wangeditor'
  export default { 
  	name: 'editor', 
  	data () { 
  		return { 
  			title:'',
  			editorContent: '' 
  		} 
  	},
  	methods: {
  		get:function(){
  			editor.txt.html('<p>用 JS 设置的内容</p>');
  		},
  		getContent: function () 
  		{ 
  			alert(this.editorContent) ;
  			var show = document.getElementById('showContent');
  			show.innerHTML=this.editorContent;
  		}
  	}, 
  	mounted() {
  		var editor = new E('#editorElem') 
  		editor.customConfig.onchange = (html) => { 
  			this.editorContent = html 
  		} 
  		
  		   editor.customConfig.menus = [
        'head',  // 标题
    'bold',  // 粗体
    'fontSize',  // 字号
    'fontName',  // 字体
    'italic',  // 斜体
    'underline',  // 下划线
    'strikeThrough',  // 删除线
    'foreColor',  // 文字颜色
    'backColor',  // 背景颜色
    'link',  // 插入链接
    'list',  // 列表
    'justify',  // 对齐方式
    'image',  // 插入图片
    'table',  // 表格
    'undo',  // 撤销
    'redo'  // 重复
    ]
  		editor.customConfig.uploadImgShowBase64 = true 
  		editor.customConfig.showLinkImg = false
  		editor.create() 
  		editor.txt.html('<p>用 JS 设置的内容</p>');
  	} 
  }

</script>

<style>
</style>