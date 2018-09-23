//Import NPM Packages

const express 			= require('express'),
	  bodyParser		= require('body-parser'),
	  methodOverride	= require('method-override'),
	  mongoose			= require('mongoose'),
	  path				= require('path'),
	  passport			= require('passport'),
	  localStrategy		= require('passport-local'),
	  expressSession	= require('express-session');


// Import Routes

const indexRoutes 		= require('./routes/index');
const directoryRoutes	= require('./routes/directory');
const commentRoutes		= require('./routes/comments');

// Import Models

let bars 	= require('./models/winebars'),
	user 	= require('./models/user'),
	comment = require('./models/comment');


// Initialize Mongoose and connect Mongo DB

mongoose.connect('mongodb://localhost:27017/winebar-finder', {useNewUrlParser: true}, (err) => {
	if(err)
		console.log('MongoDB Connection failed... Error: ',err);
	else
		console.log('MongoDB Connection successful! Yay!!');
});

// Initialize Express

const app = express();

// Setup Express Session

app.use(expressSession({
    secret: "wJods0oFstCGncp8nKzT",
    resave: false,
    saveUninitialized: false
}));

//Passport Configuration

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req,res,next) => {
    res.locals.currentUser = req.user;
    next();
});

//Seed DB

const seedDB = require('./seed');


// Set View Engine

app.set('view engine','ejs');

//Configure Express Middleware

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Load Index Route

app.use(indexRoutes);
app.use(directoryRoutes);
app.use(commentRoutes);

//Start Server

app.listen('3000','127.0.0.1', () => console.log("Winebar-Finder Server started successfully!!"));










