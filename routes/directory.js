const express = require('express');

let bars = require('../models/winebars');

router = express.Router();

router.get('/directory', (req,res) => {
	bars.find({}, (err,foundBars) => {
		if(err) 
			router.redirect('/')
		else
		res.render('directory/winebars',{winebars:foundBars})
	 });
});

router.get('/directory/:id', (req,res) => {
		bars.findById(req.params.id, (err,foundBar) => {
			if(err)
			{
				console.log("Error happens here!!!!",err);	
				res.redirect('/directory');
			}
			else
			{
				console.log(__dirname);
				res.render('directory/show',{bar: foundBar});
			}
		})
});


module.exports = router;