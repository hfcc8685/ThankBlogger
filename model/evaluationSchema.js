var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * [evaLuationSchema description]:
 * id: 评价Id
 * bloggerId: 所属博主Id
 * userId: 撰写用户Id
 * content: 评价内容
 * createDate: 评价创建时间
 * recommendUserIds：赞同该条评价的用户
 * referEvaluationId: 引用评论Id
 * @type {Schema}
 */
var EvaLuationSchema = new Schema({
	id: Number,
	bloggerId: Number,
	userId: Number,
	recommendUserIds：[Number],
	content: String,
	referEvaluationId: Number,
	createDate: Date
});