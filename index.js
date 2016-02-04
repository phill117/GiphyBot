var request = require('request');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));

app.post('/random', function(req, res) {

	var body = req.body;
	var words = body.text.split(' ');
	var cmd = words[0].toLowerCase();
	if((cmd === '/giphy' || cmd === '\\giphy' || cmd === '/gihpy') && words.length > 1){

		var queryStrings = {api_key: 'GIHPY KEY HERE'};

		var tags = words[1];
		for(var i = 2; i < words.length; i++){
			tags += (' ' + words[i]);
		}

		console.log(tags);

		queryStrings.tag = tags;

		var giphyOptions = {
			url: 'http://api.giphy.com/v1/gifs/random',
			method: 'GET',
			qs: queryStrings
		};

		request(giphyOptions, function(cError, cResponse, cBody) {
			if (!cError && cResponse.statusCode == 200) {
			    var info = JSON.parse(cBody);
			    var image = info.data.image_url;

			    if (image == null || image == ''){
			    	image = 'no gifs found for tags: ' + tags;
			    } 
				    
				sendGMMessage(image);
				
			}
		});
	}
});

var sendGMMessage = function(text){
	//'text' is just the param name, it is actally most the picture url
	var gmBody= makeEmptyGMbody(text);

	var botOptions = {
		url: 'https://api.groupme.com/v3/bots/post',
		method: 'POST',
		json: true,
		body: gmBody
	}

    request(botOptions, function(botError, botResponse, botBody){});
}

var makeEmptyGMbody = function(message) {
	return {
		"bot_id"  : "GROUPME BOT ID HERE",
		"text"    : message
	};
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});