var express = require('Express');
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var route = require('./routes/main.js');
app.use('/', route);

var route = require('./routes/admin/admin.js');
app.use('/', route);

var route = require('./routes/admin/job.js');
app.use('/', route);

var route = require('./routes/customer/customer.js');
app.use('/', route);

var route = require('./routes/jobs.js');
app.use('/', route);

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/pages/main.html');
});

app.get('/admin', function (req, res) {
   res.sendFile(__dirname + '/pages/admin/login.html');
});

// error handling
app.get('*', function(req, res){
   res.send('Sorry, invalid URL.');
});

app.listen(3000);