//Import NPM Packages

const express 			= require('express'),
	  bodyParser		= require('body-parser'),
	  methodOverride	= require('method-override'),
	  mongoose			= require('mongoose'),
	  sassMiddleware	= require('node-sass-middleware');

// Import Routes

const indexRoutes 		= require('./routes/index');
const directoryRoutes	= require('./routes/directory');


// Initialize Mongoose and connect Mongo DB

mongoose.connect('mongodb://localhost:27017/winebar-finder', {useNewUrlParser: true}, (err) => {
	if(err)
		console.log('MongoDB Connection failed... Error: ',err);
	else
		console.log('MongoDB Connection successful! Yay!!');
});

// Initialize Express

const app = express();

// Configure Node Sass 

app.use(sassMiddleware({
	src:  __dirname + '/sass',
	dest: __dirname + '/public',
	debug: true
}))

// Set View Engine

app.set('view engine','ejs');

//Configure Express Middleware

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Load Index Route

app.use(indexRoutes);
app.use(directoryRoutes);

//Start Server

app.listen('3000','127.0.0.1', () => console.log("Winebar-Finder Server started successfully!!"));










