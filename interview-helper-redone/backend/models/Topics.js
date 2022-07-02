var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicsSchema = new Schema({
    termId: Number,
    termName: String, 
    category: String, 
    definition: Array,
    referenceUrl: String
}, {
  collection: 'Topics'
});


module.exports = mongoose.model('Topics', TopicsSchema);