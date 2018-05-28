const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// TODO: this is terrible but whatever
var fuck = 0;
var shit = 0;
var damn = 0;
var other = 0;
var nigger = 0;

app.use('/', express.static(`${__dirname}/build`));

app.get('/api/counts', (req, res) => {

  res.send({	
  				"fuck": fuck,
  				"shit": shit,
  				"damn": damn,
  				"other": other,
  				"nigger": nigger 
  			});
});

app.get('/api/fuck', (req, res) => {
	fuck = fuck + 1
  res.send({ express: 'Hello From Express' });
});

app.get('/api/shit', (req, res) => {
	shit = shit + 1
  res.send({ express: 'Hello From Express' });
});

app.get('/api/damn', (req, res) => {
	damn = damn + 1
  res.send({ express: 'Hello From Express' });
});

app.get('/api/nigger', (req, res) => {
	nigger = nigger + 1
  res.send({ express: 'Hello From Express' });
});

app.get('/api/other', (req, res) => {
	other = other + 1
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
