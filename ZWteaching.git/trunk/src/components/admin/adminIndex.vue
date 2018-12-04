<template>
	<div>
<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="20%" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[ ]"  @select="handleOpen" >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-view"></i>用户管理</template>       
          <el-menu-item index="11">用户管理</el-menu-item>
          <el-menu-item index="12">教师管理</el-menu-item>
          <el-menu-item index="13">管理员管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>发布</template>
          <el-menu-item index="21">发布首页新闻</el-menu-item>
    <el-menu-item index="22">发布首页公告</el-menu-item> 
    <el-menu-item index="23">发布实验原理</el-menu-item> 
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-upload"></i>下载资源管理</template>
          <el-menu-item index="31">视频资源管理</el-menu-item> 
          <el-menu-item index="32">PPT资源管理</el-menu-item>    
      </el-submenu>
         <el-submenu index="4">
        <template slot="title"><i class="el-icon-search"></i>资源统计</template>
          <el-menu-item index="41">资源统计 </el-menu-item>
          <el-menu-item index="42">资源统计2 </el-menu-item>   
      </el-submenu>
    </el-menu>
    
  </el-aside>

  <el-container>
  	
	<router-view></router-view>
  </el-container>
</el-container>
  </div>
  </template>
<style>
	body{
		margin: 0;
		padding: 0;
	}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-submenu{
  	text-align: left;
  }
 	a {color:#252525; text-decoration:none;}
	a:visited {text-decoration:none;}
	a:hover {color:#252525;text-decoration:none;}
	a:active {color:#252525;} 
</style>

<script>
	import wangeditor from './wangeditor.vue'
  export default {
    data() {
      return {
        tableData: []
      }
    },
created: function() {
			
//			this.$ajax
//			.get('http://127.0.0.1:8888/api/getArticle')
//			.then(response => (this.tableData = response.data))
		},
  components: {
    wangeditor
   },
    methods: {
      handleOpen(key, keyPath) {
       
       
       
        switch (key){
        	case "11":  	  
        	this.$router.push({path:'/table',query:{type:"user"}});
        	break;
        	case "12":      	  
        	this.$router.push({path:'/table',query:{type:"teacher"}});
        	break;
        	case "13":      	  
        	this.$router.push({path:'/table',query:{type:"admin"}});
        	break;
        	case "21":       	  
        	this.$router.push({path:'/publishList',query:{type:"news"}});
        	break;
        	case "22":      	  
        	this.$router.push({path:'/publishList',query:{type:"notice"}});
        	break;
        	case "23":       	  
        	this.$router.push({path:'/publishList',query:{type:"theory"}});
        	break;
        	case "31":       	  
        	this.$router.push({path:'/upload',query:{type:"video"}});
        	break;
        	case "32":       	  
        	this.$router.push({path:'/upload',query:{type:"ppt"}});
        	break;
        }
      }
    }
  };
</script>