var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PropertySchema = new Schema({
  	id: Number,

	address: String,

	city: String,

	state: String,

	zip: String,

	latitude: Number,

	longitude: Number,

	image_url: String
});

mongoose.model('Property', PropertySchema);