<template>
	<div>

		<el-row :gutter="5">
			<el-col :span="8" :offset="1">
				<div class="grid-content">
					<p style="text-align: left;font-size: 20px;">新闻</p>
					<el-table :data="tableData">
						<el-table-column prop="address" label="标题">
						</el-table-column>
						<el-table-column prop="date" label="日期" width="100px">
						</el-table-column>
					</el-table>
		
				</div>
			</el-col>
			<el-col :span="8" >
				<div class="grid-content">
					<p style="text-align: left;font-size: 20px;">公告</p>
					<el-table :data="tableData">
						<el-table-column prop="address" label="标题">
						</el-table-column>
						<el-table-column prop="date" label="日期" width="100px">
						</el-table-column>
					</el-table>
		
				</div>
			</el-col>
			<el-col :span="7">
				<div class="grid-content"><register></register></div>
			</el-col>
		</el-row>
		<el-row :gutter="5">
			<el-col :span="3" :offset="1">
				
				<sudoku></sudoku>
			</el-col>
		 <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 1 : 1">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/67f212e29dbb4681a1217bfa35db5537.jpg" class="image">
      <div style="padding: 14px;">
        <span>推荐课程名称</span>
        <div class="context">
    			推荐课程内容推荐课程内容推荐课程内容推荐课程内容推荐课程内容推荐课程内容推荐课程内容推荐课程内容推荐课程内容
        </div>
      </div>
    </el-card>
  </el-col>
			
		</el-row>
	</div>
</template>

<script>
	import register from './register.vue'
	import sudoku from './sudoku.vue'
	export default {
		components:{register,sudoku},
		data() {
			return {
				info:'a',
				 currentDate: new Date(),
				tableData: [
				]
			}
		},
			created: function() {
			console.log('created it');
			this.$ajax
  			.get('http://127.0.0.1:8888/api/getArticle', {
    params: {
        id: 123,
        name: 'Henry',
        sex: 1,
        phone: 13333333
    }
})
  			.then(response => (this.tableData = response.data))
		},


		methods: {
 
    }
	}
</script>

<style scoped>
	.context{
		    font-size: 13px;
    color: #999999;
    text-align: left;
	}
	.el-table {
		width: 100%;
	}
	
	.el-table-column {
		width: 180px;
	}
	
	.el-row {
		margin-bottom: 20px;
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
	.image{
		width: 100%;
		 display: block;
	}
	
</style>