/**
 * Created by mayureshp on 1/28/2015.
 */


var app = require('./config/express')();

app.set('port', (process.env.PORT || 5000));
require('./config/db')();
require('./config/routes')(app);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});