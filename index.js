const https = require('https');

exports.numberOfTopStories = function (numberOfArticles) {

  if (numberOfArticles && typeof numberOfArticles != "number") {
        throw new Error("The number paramter must be a number");
  }

  https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
    res.on('data', (d) => {
      const stories = JSON.parse(d, (key, value) => {
         return value && value.type === 'Buffer'
          ? new Buffer(value.data)
          : value;
      });
      var finishedStories = stories.splice(0, numberOfArticles);
      console.log(finishedStories);
      return finishedStories;
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

exports.allTopStories = function () {

  https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {

    res.on('data', (d) => {
      const stories = JSON.parse(d, (key, value) => {
        return value && value.type === 'Buffer'
          ? new Buffer(value.data)
          : value;
      });
      console.log(stories);
      return stories;
    });

  }).on('error', (e) => {
    console.error(e);
  });
}
