var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var PORT = 3000;

var app = express();


// Set View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));


// Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Routes
app.use('/', index);
app.use('/api', tasks);


app.listen(PORT, function() {
    console.log('Server started on port ' + PORT);
});
