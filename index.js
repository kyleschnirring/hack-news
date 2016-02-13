const https = require('https');

//get specific number of top stories
exports.numberOfTopStories = function (numberOfArticles, callback) {

  if (numberOfArticles && typeof numberOfArticles != "number") {
    throw new Error("The number paramter must be a number");
  }

  callback = callback || () => {};
   return new Promise((resolve, reject) => {

       https.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', (res) => {
         res.on('data', (d) => {
           const stories = JSON.parse(d, (key, value) => {
             return value && value.type === 'Buffer'
               ? new Buffer(value.data)
               : value;
           });
           resolve(stories.splice(0, numberOfArticles));
           callback(stories.splice(0, numberOfArticles));
         });

    }).on('error', (e) => {
      reject(e);
      callback(e);
    });
  });
}

//get all top stories
exports.allTopStories = function (callback) {

callback = callback || () => {};
   return new Promise((resolve, reject) => {

     https.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', (res) => {
       res.on('data', (d) => {
         const stories = JSON.parse(d, (key, value) => {
           return value && value.type === 'Buffer'
             ? new Buffer(value.data)
             : value;
         });
         resolve(stories);
         callback(stories);
      });

    }).on('error', (e) => {
      reject(e);
      callback(e);
    });
  });
}

//get specific number of new stories
exports.numberOfNewStories = function (numberOfArticles, callback) {

  if (numberOfArticles && typeof numberOfArticles != "number") {
    throw new Error("The number paramter must be a number");
  }

  callback = callback || () => {};
   return new Promise((resolve, reject) => {

       https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
         res.on('data', (d) => {
           const stories = JSON.parse(d, (key, value) => {
             return value && value.type === 'Buffer'
               ? new Buffer(value.data)
               : value;
           });
           resolve(stories.splice(0, numberOfArticles));
           callback(stories.splice(0, numberOfArticles));
         });

    }).on('error', (e) => {
      reject(e);
      callback(e);
    });
  });
}

//get all new stories
exports.allNewStories = function (callback) {

callback = callback || () => {};
   return new Promise((resolve, reject) => {

     https.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty', (res) => {
       res.on('data', (d) => {
         const stories = JSON.parse(d, (key, value) => {
           return value && value.type === 'Buffer'
             ? new Buffer(value.data)
             : value;
         });
         resolve(stories);
         callback(stories);
      });

    }).on('error', (e) => {
      reject(e);
      callback(e);
    });
  });
}
