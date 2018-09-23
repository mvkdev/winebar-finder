const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String,
		picture: String
	},
	text: String
});

let comment = mongoose.model("comment",commentSchema);

module.exports = comment;