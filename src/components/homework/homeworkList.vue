<template>
	<div>
  <el-table
    ref="multipleTable"
    :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      width="200"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column label="操作" width="400">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click=""
          v-bind:disabled="scope.row.state!='未发布'"
          >编辑</el-button>
             <el-button
          size="mini"
          @click="">查看试卷</el-button>
             <el-button
          size="mini"
          @click="">查看数据</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handelDelete(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData3.length">
				</el-pagination>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      	currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
        tableData3: [{
          date: '2016-05-03',
          title:'作业一',
          state:'未发布',
          context:''
        }, 
        {
          date: '2016-05-03',
          title:'作业一',
          state:'未发布',
          context:''
        },{
           date: '2016-05-03',
          title:'作业二',
          state:'未发布',
          context:''
        }, {
        date: '2016-05-03',
          title:'作业一',
          state:'发布',
          context:''
        }, {
       date: '2016-05-03',
          title:'作业一',
          state:'未发布',
          context:''
        }, {
       date: '2016-05-03',
          title:'作业一',
          state:'发布中',
          context:''
        }, {
    date: '2016-05-03',
          title:'作业一',
          state:'已发布',
          context:''
        }, {
        date: '2016-05-03',
          title:'作业一',
          state:'未发布',
          context:''
        }],
        multipleSelection: []
      }
    },

    methods: {
    		handleSizeChange: function(size) {
				this.pagesize = size;
				console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage) //点击第几页
			},
    	handelDelete(index){
    		console.log('index'+index);
    		this.tableData3.splice(index, 1);
    	},
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>