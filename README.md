# GiphyBot
A Node.js app that uses a GroupMe bot to post random gifs from Giphy.com similar to Slack's /giphy command.

I host my personal instance on Heroku for free, but I suppose you can host it where ever would work best for you.

**NOTE**: You also need to acquire an api key from giphy. The process is laid out nicely on GitHub at https://github.com/Giphy/GiphyAPI. On you have a key, insert that into index.js (Look for the phrase "GIHPY KEY HERE").

**NOTE 2**: This app requires the creation of a GroupMe Bot at https://dev.groupme.com/bots.
Once your bot is created, you can add that bot's ID in the corresponding places in index.js (Look for the phrase "GROUPME BOT ID HERE").

To use in GroupMe, just type "/giphy tags go here" and GiphyBot should post a gif that is *probably* close to the tags entered. Who knows? It could be a complete crap shoot! Giphy might not have any gifs that correspond to those tags! But after all, that's the fun of it.

Example:

![GiphyBot Example Picture](https://raw.githubusercontent.com/phill117/GiphyBot/master/example.jpg)
