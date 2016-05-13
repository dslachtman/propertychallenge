var mongoose = require('mongoose'),
Property = mongoose.model('Property');

exports.findAll = function(req, res){
  Property.find({},function(err, results) {
    return res.send(results);
  });
};
exports.findById = function(req, res){
  var id = req.params.id;
  Property.findOne({'_id':id},function(err, result) {
    return res.send(result);
  });
};
exports.add = function(req, res) {
  Property.create(req.body, function (err, property) {
    if (err) return console.log(err);
    return res.send(property);
  });
}
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Property.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d properties', numberAffected);
      res.send(202);
  });
}
exports.delete = function(req, res){
  var id = req.params.id;
  Property.remove({'_id':id},function(result) {
    return res.send(result);
  });
};

exports.import = function(req, res){
  Property.create(
    {

		"id": 1,
		"address": "535 Mission St.",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94107",
		"latitude": 37.788840,
		"longitude": -122.398129,
		"image_url": "http://www.cbre.us/o/sanfrancisco/AssetLibrary/535Mission_thumb.jpg"
		},

		{

		"id": 2,
		"address": "1 Telegraph Hill Blvd",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94133",
		"latitude": 37.802378,
		"longitude": -122.405823,
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Coit_Tower_aerial.jpg"

		},

		{
		"id": 3,
		"address": "900 North Point St",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94109",
		"latitude": 37.805576,
		"longitude": -122.422947,
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Ghirardelli_Square_1.jpg"

		},

		{

		"id": 4,
		"address": "24 Willie Mays Plaza",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94107",
		"latitude": 37.778175,
		"longitude": -122.390725,
		"image_url": "http://www.ballparksofbaseball.com/nl/pictures/2013/att13_top2.jpg"
		},

		{

		"id": 5,
		"address": "3750 18th St",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94114",
		"latitude": 37.761717,
		"longitude": -122.427315,
		"image_url": "http://www.sfusd.edu/assets/sfusd­staff/schools­and­facilities/images/mission­high­school­470.jpg"

		},

		{

		"id": 6,
		"address": "712 Steiner St",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94117",
		"latitude": 37.776128,
		"longitude": -122.432684,
		"image_url": "http://www.towrs.com/Images/Building/System/2010/04/28/712SteinerStreetSanFranciscoCalifornia082009001a.jpg"

		},

		{

		"id": 7,
		"address": "490 Jamestown Ave",
		"city": "San Francisco",
		"state": "CA",
		"zip": "94124",
		"latitude": 37.713531,
		"longitude": -122.386139,
		"image_url":
		"http://1.bp.blogspot.com/­13fLlNoMJuM/UJWjMfNQzXI/AAAAAAAAC7c/2ybBK6q14IM/s1600/Stadium_TheRock.jpg"

		},

		{

		"id": 8,
		"address": "1301 2nd Ave",
		"city": "Seattle",
		"state": "WA",
		"zip": "98101",
		"latitude": 47.607828,
		"longitude": -122.338134,
		"image_url":"http://x.lnimg.com/photo/poster_768/edebe0efa14749c385f1f12bbb906d21.jpg"

		},

		{

		"id": 9,
		"address": "1401 N. Shoreline Blvd",
		"city": "Mountain View",
		"state": "CA",
		"zip": "94043",
		"latitude": 37.414323,
		"longitude": -122.077321,
		"image_url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Computer_history_museum.jpg"

		},

		{

		"id": 10,
		"address": "7000 Coliseum Way",
		"city": "Oakland",
		"state": "CA",
		"zip": "94621",
		"latitude": 37.750268,
		"longitude": -122.202609,
		"image_url":"http://www.theuntz.com/media/member/6/6/1/66146/oco­coliseum_raw.jpg"

}, function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};