var express = require('express');
var router = require('./app.routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

//set router
app.use(router);

app.use(express.static('public'));

// set the view folder
app.set('views', './views');

// set the view engine to ejs
app.set('view engine', 'ejs');

//set middleware that parses post fields 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* custom middleware */
app.use(function(req,res,next){
    next();
});

//connect to mongo db
var MLAB_MONGODB_URI = 'mongodb://user123:user123pass@ds221242.mlab.com:21242/worktracker';
mongoose.connect(MLAB_MONGODB_URI, { useNewUrlParser: true });
/* 
var employeeModel = mongoose.model('employee', { name: String });



app.get('/', function (req, res) {
    res.send('welcome to home!');
});


app.get('/employee-entry', function (req, res) {

    employeeModel.find(function (err, employees) {
        if (err) return console.error(err);
        res.render('index', {
            employees: employees
        });
    });



});

app.get('/save', function (req, res) {
    // console.log('query params', req.query.name);

    var em = new employeeModel({ name: req.query.name });
    em.save().then(function () { res.send('saved' + req.query.name); });



}); */

app.listen(4200);