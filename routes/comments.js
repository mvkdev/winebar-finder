const express = require('express');

let bars 	  = require('../models/winebars'),
    comment	  = require('../models/comment'),
    user	  = require('../models/user');


let router = express.Router();

router.post('/directory/:id/comment/new', (req,res) => {
	bars.findById((req.params.id), (err,foundBar) => {
		if(err) {
			console.log("Well...this didnt work...");
			res.redirect("/directory");
		}
		else {
			comment.create(new comment({text: req.body.text}), (err,createdComment) => {
				if(err) {
				console.log(err);
				res.redirect("/directory");
				}
				else{
					createdComment.author._id = req.user._id;
					createdComment.author.username = req.user.username;
					createdComment.author.picture = req.user.picture;
					createdComment.save();
					foundBar.comments.push(createdComment);
					foundBar.save();
					res.redirect("/directory/" + req.params.id);
				}
			})
		   } 
		})
});

module.exports = router;