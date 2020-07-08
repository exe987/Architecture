const mongoose = require('mongoose');
const { Schema } = mongoose;
var img = new Schema(
    {
        img:
            { data: Buffer, contentType: String }
    }
);


module.exports = mongoose.model('Image', img);