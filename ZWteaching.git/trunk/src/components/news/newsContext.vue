<template>
	<div>
		<br />
		<el-row>
			<el-col :span="20"  :offset="2">
				<el-card :body-style="{ padding: '0px' } " v-for="item in tableData">
					<img v-bind:src="item.url" class="image">
					<router-link :to=" /detail/ + item.date">
					<div style="padding: 14px;">
						<span>{{item.name}}</span>
						<div class="bottom clearfix">
							<time class="time">{{ item.address }}</time>
							
						</div>
					</div>
					</router-link>
				</el-card>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					url:require('../../../build/logo.png'),
					name: '标题',
					address: '学术讲座【环境法对传统法学理论的挑战和影响】学术讲座【环境法对传统法学理论的挑战和影响】'
				}, {
					date: '2016-05-04',
					url:require('../../../build/logo.png'),
					name: '标题',
					address: '学术讲座【环境法对传统法学理论的挑战和影响】'
				}, {
					date: '2016-05-01',
					url:require('../../../build/logo.png'),
					name: '标题',
					address: '学术讲座【环境法对传统法学理论的挑战和影响】'
				}, {
					date: '2016-05-03',
					url:require('../../../build/logo.png'),
					name: '标题',
					address: '学术讲座【环境法对传统法学理论的挑战和影响】'
				}]
			}
		}
	}
</script>

<style scoped>
	img {
		width: 60px;
		height: 60px;
		float: left;
	}
	a:link {color:black;text-decoration:none;}
a:visited {color:black;text-decoration:none;}
a:hover {color:black;text-decoration:none;}
a:active {color:black;text-decoration:none;}
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		margin-bottom: 10px;
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
		height: 60px;
		margin-bottom: 10px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>