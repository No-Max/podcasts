var MongoClient = require('mongodb').MongoClient;

var client = new MongoClient('mongodb://localhost:27017',{ useNewUrlParser: true });

var state = {
	db:null
};

exports.connect = function(done){
	if (state.db){
		return done();
	}
	client.connect(function(err){
		if(err){
			return done(err);
		}
		state.db = client.db('podcasts');
		done();
	});
};


exports.get = function(){
	return state.db;
};