<template>
	<div>
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item title="一致性 Consistency" name="1" >
				<el-tree :data="data" :props="defaultProps" @node-click="childClick" ></el-tree>
			</el-collapse-item>
			<el-collapse-item title="反馈 Feedback" name="2">
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" ></el-tree>
			</el-collapse-item>
			<el-collapse-item title="效率 Efficiency" name="3">
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</el-collapse-item>
			<el-collapse-item title="可控 Controllability" name="4">
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</el-collapse-item>
		</el-collapse>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				childValue: '我是子组件的数据',
				activeName: '1',
				data: [{
					label: '一级 1',
					id:1,
					children: [{
						label: '二级 1-1',
						id:11,
						children: [{
							id:0,
							label: '三级 1-1-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data.label);
			},
			sendMsgToParent(data) {
				this.$emit("listenToChild", data.id);
			},
			childClick(data) { // childByValue是在父组件on监听的方法 // 第二个参数this.childValue是需要传的值 
				this.$emit('childByValue', data.id)
			}

		}
	};
</script>

<style>

</style>