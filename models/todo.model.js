/**
 * Created by mayureshp on 1/30/2015.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
   todoText : {
       type: String,
       required: true
   },

    completed: {
        type: Boolean,
        default: false,
        required: true
    }

});

mongoose.model('Todo',TodoSchema);
