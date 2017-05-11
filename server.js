var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');

var app = express();

app.set('PORT', process.env.PORT || 8080);

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(app.get('PORT'), function() {
    console.log('Listening on port', app.get('PORT'));
});
