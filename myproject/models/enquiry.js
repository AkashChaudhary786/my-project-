var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var Enquiry = new Schema(
    {name : String, email : String,
        subject : String, message: String
    }
);
    mongoose.model('enqs', Enquiry)
