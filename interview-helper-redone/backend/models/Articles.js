var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
    releasedDate: Date,
    category: String, 
    title: String,
    synopsis: String, 
    referenceUrl: String, 
    releasedBy: String, 
    isRead: Boolean
}, {
    collection: 'articles'
  });
  module.exports = mongoose.model('Articles', ArticlesSchema);