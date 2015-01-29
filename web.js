/**
 * Created by mayureshp on 1/28/2015.
 */

var PORT = 8000;

var app = require('./config/express')();

require('./config/routes')(app);

app.listen(PORT);

console.log("Server started on " + PORT);