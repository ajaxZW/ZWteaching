<template>
	<div>
		<el-row>
			<el-col :span="16" :offset="4">
				<div class="grid-content bg-purple">
					{{title}}
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="16" :offset="4">
				<div class="grid-content bg-purple">
					
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="16" :offset="4">
				<div class="grid-content bg-purple">
					{{context}}
					{{ $route.params.id }}
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				title:'这是标题',
				context:'这是内容'
				
			}
		}
	}
</script>

<style scoped>

	
	.el-row {
		margin-bottom: 5px;
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
</style>