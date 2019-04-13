var express = require('express');
var expressHandlebars = require('express-handlebars');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log('Server listening on: http://localhost: ' + PORT);
});
