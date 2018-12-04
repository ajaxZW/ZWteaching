<template>
	<div class="deit">
		<div class="crumbs">
			<div class="cantainer">
				<el-button size="medium" type="success" @click="handleUpdate(99999)">添加</el-button>
				
				<el-table style="width: 100%;" :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
					<el-table-column>
						<!--<template slot-scope="props">
							<el-form label-position="left" inline class="demo-table-expand">
								<el-form-item label="商品名称">
									<el-input v-model="props.row.date" placeholder="请输入内容"></el-input>
								</el-form-item>
								<el-form-item label="用户姓名">
									<el-input v-model="props.row.name" placeholder="请输入内容"></el-input>
								</el-form-item>
								<el-form-item label="邮箱">
									<el-input v-model="props.row.email" placeholder="请输入内容"></el-input>
								</el-form-item>
								<el-form-item label="地址">
									<el-input v-model="props.row.address" placeholder="请输入内容"></el-input>
								</el-form-item>
								<el-button type="primary" @click="handleClick(props.$index)">提交</el-button>
								</el-form-item>
							</el-form>
						</template>-->
					</el-table-column>
					<el-table-column type="index" :index="indexMethod" width="50">
					</el-table-column>
					<el-table-column label="日期" prop="date" width="180">
					</el-table-column>
					<el-table-column label="用户姓名" prop="name" width="180">
					</el-table-column>
					<el-table-column label="邮箱" prop="email" width="100">
					</el-table-column>
					<el-table-column label="地址" prop="address" width="100">
					</el-table-column>
					<el-table-column label="操作" width="200">
						<template slot-scope="scope">
							<el-button size="mini" type="primary" @click="handleUpdate(scope.$index)">{{$route.query.type}}</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
							
						</template>
					</el-table-column>

					</el-table-column>
				</el-table>
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 20, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="userList.length">
				</el-pagination>
			</div>
			
		</div>
		<div class="right" v-if="edited">
				<el-form  :model="userList[index]" label-width="80px">
  <el-form-item>
    姓名：<el-input v-model="userList[index].name" style="width:200px"></el-input>
    <br />
    地址：<el-input v-model="userList[index].address"style="width:200px"></el-input>
    <br />
    时间：<el-input v-model="userList[index].date"style="width:200px"></el-input>
    
  </el-form-item>
  </el-form>
  
			</div>
	</div>
</template>
<style scoped>
	.right{
		position: absolute;
		right: 100px;
		top: 0px;
	}
</style>
<script>
	import register from '../register.vue'
	export default {
	
		components:{register},
		data() {
			return {
				index:1,
				edited:false,
				currentPage: 1, //初始页
				pagesize: 10, //    每页的数据
				userList: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		created() {
			this.handleUserList()
		},
		methods: {
			handleDelete(index, row) {
				this.index=index;
				console.log('created it');
//				this.$ajax
//					.get('http://127.0.0.1:8888/api/deleteArticle', {
//						params: {
//							id: index
//						}
//					})
//					.then(response => (this.tableData = response.data));

				this.userList.splice(index, 1);
			},
			handleUpdate(index){
				var user={
					date: ' ',
					name: ' ',
					address: ' '
				};
				this.index=index+(this.currentPage-1)*this.pagesize;
				if(index==99999){
					this.edited=true;
					this.userList.push(user);
					this.index=this.userList.length-1;
				}else{
				this.edited=!this.edited;}
			},
			indexMethod(index) {
				return index + 1;
			},
			handleClick(index) {
				this.userList[index].date = " ";
			},
			// 初始页currentPage、初始每页数据数pagesize和数据data
			handleSizeChange: function(size) {
				this.pagesize = size;
				console.log(this.pagesize) //每页下拉显示数据
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				console.log(this.currentPage) //点击第几页
			},
			handleUserList() {
				//          this.$http.get('http://127.0.0.10:8081/phpteaching/test.php').then(res => {  //这是从本地请求的数据接口，
				//              this.userList = res.body
				//          })
//				this.$ajax
//					.get('http://127.0.0.1:8888/api/getArticle')
//					.then(response => (this.userList = response.data))
			}
		}

	}
</script>