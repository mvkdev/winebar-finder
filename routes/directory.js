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


module.exports = router;