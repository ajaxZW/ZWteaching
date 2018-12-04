<template>
	<div>

		<el-table :data="questionList" style="width: 100%">
			<el-table-column prop="context" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="title" label="姓名" width="180">
			</el-table-column>
		</el-table>
		<el-row :gutter="24">
			<el-col :span="20">
				<div>{{title}}</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="addQButton" @click="click()" @mouseover="selectStyle()" :class="{'active':active}" @mouseout="outStyle()">添加问题</div>
				<div v-if="show">
					<el-row :gutter="20">
						<el-col :span="6" :offset="3">
							<el-button @click="dialogFormVisible = true,type='radio'">单选题</el-button>
						</el-col>
						<el-col :span="6">
							<el-button @click="dialogFormVisible = true,type='checkbox'">多选题</el-button>
						</el-col>
						<el-col :span="6">
							<el-button @click="dialogFormVisible = true,type='textbox'">文本题</el-button>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
		<el-dialog :visible.sync="dialogFormVisible">
			<p>分别在下面的输入框中输入问题的名称以及选项, 选项用半角逗号","分隔开</p>
			<el-form :model="question">
				<el-form-item label="名称" :label-width="formLabelWidth">
					<el-input v-model="question.title" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="选项内容" :label-width="formLabelWidth">
					<el-input v-model="question.context" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="正确选项内容" :label-width="formLabelWidth">
					<el-input v-model="question.right" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false,addQ()">确 定</el-button>
			</div>
		</el-dialog>
		<div v-for="(q,index) in questionList">
			
			<div v-if="q.type=='radio'">
				<el-button @click="upQ(index)">{{index}}</el-button>
				<el-radio v-model="question.context" label="a">备选项</el-radio>
				<el-radio v-model="question.context" label="b">备选项2</el-radio>
			</div>
			<div v-if="q.type=='checkbox'">
				<el-checkbox-group v-model="checkList">
					<el-button @click="upQ(index)">{{index}}</el-button>
					<el-checkbox label="复选框 A"></el-checkbox>
					<el-checkbox label="复选框 B"></el-checkbox>
					<el-checkbox label="复选框 C"></el-checkbox>
				</el-checkbox-group>
			</div>
			<div v-if="q.type=='textbox'">
				<el-button @click="upQ(index)">{{index}}</el-button>
				<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
				</el-input>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {

			return {
				textarea: '',
				checkList: ['选中且禁用', '复选框 A'],
				type: 'radio',
				show: false,
				active: false,
				title: 'homeworktitle',
				questionList: [],
				dialogFormVisible: false,
				question: {
					type: '',
					title: '',
					context: '',
					right: ''
				},
				formLabelWidth: '120px'
			}
		},
		methods: {
			addQ() {
				var question = {
					type: '',
					title: '',
					context: '',
					right: ''
				};
				question.type = this.type;
				question.title = this.question.title;
				question.context = this.question.context;
				this.questionList.push(question);
				this.$options.methods.createQ(question.context);
			},
			upQ(index){
				if(index==0){
					console.log("it cant up");
				}else{
					var temp=this.questionList[index-1];
					console.log("temp"+temp);
					this.questionList[index-1]=this.questionList[index];
					this.questionList[index]=temp;
				}
			},
			click() {
				this.show = !this.show;
			},
			selectStyle() {
				this.active = true;
			},
			outStyle() {
				this.active = false;
			},
			createQ(context) {
				var select = context.split(",");
			}

		}
	}
</script>

<style scoped>
	.addQButton {
		width: 500px;
		height: 60px;
		padding-top: 30px;
		display: block;
		background-color: #efefef;
	}
	
	.active {
		background: #475669;
	}
</style>