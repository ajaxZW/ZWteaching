<template>
	<div>

		<el-container>
			<el-aside width="200px">
				<Mainaside v-on:childByValue="childByValue"></Mainaside>
			</el-aside>
			<el-aside width="200px">
				<Mainaside2 :inputName="name"></Mainaside2>
			</el-aside>
			<el-main><Maintable v-if="name"></Maintable>
			<transfer v-else></transfer></el-main>
		</el-container>

	</div>
</template>

<script>
	import Mainaside from './aside.vue'
	import Mainaside2 from './aside2.vue'
	import Maintable from './table.vue'
	import transfer from './transfer.vue'
	export default {
		components: {
			Mainaside,
			Mainaside2,
			Maintable,
			transfer
		},
		data() {
			return {
				name: ''
			}
		},
		methods: {
			showMsgFromChild: function(data) {
				console.log(data);
			},
			childByValue: function(childValue) {
				// childValue就是子组件传过来的值
				this.name = childValue
			}
		}
	}
</script>

<style>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>