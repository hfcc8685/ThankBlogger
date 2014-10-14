var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * [ArticleSchema description]
 * id: 文章Id
 * bloggerId: 所属博主Id 
 * userId: 推荐此文章的用户Id
 * url: 文章Url
 * title: 文章标题
 * count: 被推荐的次数
 * createDate：文章被推荐时间
 * @type {Schema}
 */
var ArticleSchema = new Schema({
	id: Number,
	bloggerId: Number,
	userId: Number,
	url: String,
	title: String,
	count: Number,
	createDate: Date
});
