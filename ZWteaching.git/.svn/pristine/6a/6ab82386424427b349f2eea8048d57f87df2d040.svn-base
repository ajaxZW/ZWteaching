<template>
	<div class="hello">
		<el-row :gutter="24">
			<el-col :span="6" :offset="3">
				<div class="grid-content bg-purple">logo</div>
			</el-col>
		
		</el-row>
		<el-row :gutter="24">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
				<el-menu-item index="1"><router-link to="/main">首页</router-link></el-menu-item>
				<el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
					<el-menu-item index="2-3">选项3</el-menu-item>
					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3"><router-link to="/news">新闻中心</router-link></el-menu-item>
			
			</el-menu>

		</el-row>
		<el-row :gutter="24">
			<el-col :span="20" :offset="2">
			<div class="block">

				<el-carousel trigger="click" height="300px">
					<el-carousel-item v-for="(img,index) in imgList" :key="index">
						<img v-bind:src="img.url">
					
						
					</el-carousel-item>
				</el-carousel>
				
			</div>
			</el-col>
		</el-row>
		<el-row :gutter="24">
			<el-col :span="20" :offset="2">
				<router-view/>
			</el-col>
		
		</el-row>
		<el-row :gutter="24">
				<div class="footer"> footer</div>
		</el-row>
		
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
//				imageItem:[{src:'/Teaching/src/assets/38628323-0205-4db5-8939-e89717946163.jpg'},{src:'../assets/61cb6a85-8db9-4577-85ff-cf567460a19f.jpg'}],
		 imgList:[
        {url:require('../assets/61cb6a85-8db9-4577-85ff-cf567460a19f.jpg')},
        {url:require('../assets/38628323-0205-4db5-8939-e89717946163.jpg')}
      ],
		activeIndex: '1',
				activeIndex2: '1'

			};
		},
		methods: {
			
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	img{
		width: 100%;
	}
	.footer{
		height: 50px;
		background: lightblue;
	}
	.el-row {
		margin-bottom: 0px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	
	.el-menu-demo {
		background-color: white;
		padding-left: 12vw;
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>