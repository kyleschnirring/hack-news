const https = require('https');

exports.numberOfTopStories = function (numberOfArticles) {

  https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
    res.on('data', (d) => {
      var stories = JSON.parse(d, (key, value) => {
        return value && value.type === 'Buffer'
          ? new Buffer(value.data)
          : value;
      });
      var finishedStories = stories.splice(0, numberOfArticles);
      return finishedStories;
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

exports.allTopStories = function () {

  https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
    res.on('data', (d) => {
      var stories = JSON.parse(d, (key, value) => {
        return value && value.type === 'Buffer'
          ? new Buffer(value.data)
          : value;
      });
      return stories;
    });

  }).on('error', (e) => {
    console.error(e);
  });
}
