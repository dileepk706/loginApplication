const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const {v4: uuidv4} = require('uuid')

const app = express();

var PORT = process.env.PORT||3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//session creation
app.use(session({
    secret: uuidv4(),//sfd6f5d6f6fsd4sfd47sdf47
    resave: false,
    saveUninitialized: true
}));

//to import routes.js files
var homeRouter = require('./router/home');
var dashbordRouter = require('./router/dashBord');
var logoutRouter = require('./router/logout');


//to use view engin
app.set('view engine','ejs');

// to use public
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

 
//to use route files
app.use('/',homeRouter);
app.use('/dashbord',dashbordRouter);
app.use('/logout',logoutRouter);
 
app.listen(3000,()=> console.log('server is running'));

 