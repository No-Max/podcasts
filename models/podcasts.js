var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

exports.all = function (cb) {
	db.get().collection('podcasts').find().toArray(
		function(err, docs){
			cb(err, docs);
		});
}

exports.findById = function(id, cb){
	db.get().collection('podcasts').findOne(
		{_id: ObjectID(id)}, 
		function(err, doc){
			cb(err, doc);
		});
};

exports.create = function(podcast, cb){
	db.get().collection('podcasts').insertOne(
		podcast, 
		function(err, result){
		cb(err, result);
	});
};

exports.update = function(id, newData, cb){
	db.get().collection('podcasts').updateOne(
		{ _id: ObjectID(id) },
		{ $set: newData },
		{ upsert: false, multi: false },
		function (err, result) {
			cb(err, result);
		});
};

exports.delete = function(id, cb){
	db.get().collection('podcasts').deleteOne(
		{ _id: ObjectID(id)},
		function (err, result) {
			cb(err, result);
		});
};