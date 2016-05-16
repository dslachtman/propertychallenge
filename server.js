var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/properties';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
});

require('./models/property');
require('./routes')(app);

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
