/**
 * Created by mayureshp on 1/28/2015.
 */


var app = require('./config/express')();

app.set('port', (process.env.PORT || 5000));

require('./config/routes')(app);

app.listen(app.get('port'));

console.log("Server started on " + app.get('port'));
