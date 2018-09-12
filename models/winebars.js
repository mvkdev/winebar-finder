const mongoose	= require('mongoose');

const barSchema = new mongoose.Schema({
	name: String,
	image: String,
	tagline: String,
	address: {
		line1: String,
		line2: String,
		line3: String
	},
	rating: Number,
	description: String
})

let bar = mongoose.model("bar",barSchema);

module.exports = bar;