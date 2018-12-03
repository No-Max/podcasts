const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const app = express();
const podcastsController = require('./controllers/podcasts');
const PORT = process.env.PORT || 3012; //heroku special port variable

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));﻿
app.use(express.static(path.join(__dirname, 'application/dist')));
app.set('view engine', 'html')


app.get('/', (req, res) => res.render('application/dist/index'))

app.get('/podcasts', podcastsController.all);

app.get('/podcasts/:id', podcastsController.findById);

app.post('/podcasts', podcastsController.create);

app.put('/podcasts/:id', podcastsController.update);

app.delete('/podcasts/:id', podcastsController.delete);


db.connect(function(err) {
	if(err){ return console.log(err) };
	app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
});

