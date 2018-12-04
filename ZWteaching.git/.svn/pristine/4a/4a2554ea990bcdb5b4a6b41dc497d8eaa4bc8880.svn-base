<template>
	<div>
	
	<el-tree v-if="inputName" :data="data" :props="defaultProps"   node-key="id" :default-expanded-keys="[1]" @node-click="handleNodeClick"></el-tree>
	</div>
</template>

<script>
	export default {
		  props: {
      inputName: String,
      required: true
    },
    data() {
      return {
      	activeName:'1',
        data: [{
          label: '一级 1',
          id:1,
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          id:2,
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          id:3,
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
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
      }
    }
  };
</script>

<style>
	
</style>