//Require Dependencies
var express                 = require("express"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require ("passport-local-mongoose"),
    app                     = express();

//Require Models
var User                    = require("./models/user");


//Configuration
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

//Mongo & Mongoose
//mongoose.connect("mongodb://bebner_mbs:megamooc2015@ds227570.mlab.com:27570/mbsx");
//mongoose.Promise = Promise;

//Authentication
app.use(require("express-session")({
    secret: "MBSx secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});



//Require routes
var mainRoutes          = require("./routes/mainRoutes");

//Use Routes
app.use(mainRoutes);


// Server start
var server = app.listen(process.env.PORT, process.env.HOST, function (){
    console.log("Server running")
})