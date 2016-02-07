const https = require('https');

exports.numberOfTopStories = function (numberOfArticles) {

  https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
    console.log('statusCode: ', res.statusCode);
    console.log('headers: ', res.headers);

    res.on('data', (d) => {
      const stories = JSON.parse(d, (key, value) => {
        return value && value.type === 'Buffer'
          ? new Buffer(value.data)
          : value;
      });
      console.log(stories.splice(0, numberOfArticles));
      var finishedStories = stories.splice(0, numberOfArticles);
      return finishedStories;
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

exports.allTopStories = function () {

  https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
    console.log('statusCode: ', res.statusCode);
    console.log('headers: ', res.headers);

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
