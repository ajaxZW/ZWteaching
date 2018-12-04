<template>
	<div>
	<el-row :gutter="1">
  <el-col :span="8"><div class="grid-content bg-purple">视频课程</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">ppt资料库</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">实验原理介绍</div></el-col>
</el-row>
	<el-row :gutter="1">
  <el-col :span="8"><div class="grid-content bg-purple">实验报告提交</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">论坛</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">成果展示</div></el-col>
</el-row>
	<el-row :gutter="1">
  <el-col :span="8"><div class="grid-content bg-purple">占位</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">占位</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">占位</div></el-col>
</el-row>
</div>
</template>

<script>
</script>

<style scoped>
	 .el-row {
    margin-bottom: 1px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
  	height: 5vw;
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
    height: 5vw;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>