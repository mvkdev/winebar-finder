const express 		= require('express'),
	  passport		= require('passport'),
	  user			= require('../models/user');

const router = express.Router();



router.get('/', (req,res) => res.render('index'));

router.get('/login', (req,res) => res.render('login'));
router.get('/register', (req,res) => res.render('register'));

router.post('/register', (req,res) => {
	user.register(new user({username: req.body.username, picture: "../img/user/dummy_picture.png"}),req.body.password,(err,newUser) => {
			if(err) {
				console.log("Register didnt work...");
				res.redirect("/register");
				}
			else {
				passport.authenticate("local")(req,res, () => 
				res.redirect('/directory'));
			   }
	})
})

router.post('/login', passport.authenticate("local", {
	successRedirect: "/directory",
	failureRedirect: "/login"
}), (req,res) => {});

router.get('/logout', (req,res) => {
	req.logout();
	res.redirect('/directory');
})


module.exports = router;
