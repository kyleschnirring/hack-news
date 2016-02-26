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

//ask, show or job stories
exports.asjStories = function (asj, callback) {

  if (asj && typeof asj !== "string") {
    throw new Error("The paramter must be a string and be one of the following ask, show or job");
  }

  callback = callback || () => {};
   return new Promise((resolve, reject) => {

       https.get('https://hacker-news.firebaseio.com/v0/' + asj +'stories.json?print=pretty', (res) => {
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
//ask show or job top number of stories
exports.numbOfAsjStories = function (asj, numberOfArticles, callback) {

  if (asj && typeof asj != "string") {
    throw new Error("The paramter must be a string and be one of the following ask, show or job");
  }

  if (numberOfArticles && typeof numberOfArticles != 'number') {
    throw new Error("The second paramter must be a number");
  }

  callback = callback || () => {};
   return new Promise((resolve, reject) => {

       https.get('https://hacker-news.firebaseio.com/v0/' + asj +'stories.json?print=pretty', (res) => {
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

//get a story with a specific id
exports.storyWithId = function (id, callback) {

callback = callback || () => {};
   return new Promise((resolve, reject) => {

     https.get('https://hacker-news.firebaseio.com/v0/item/'+ id +'.json?print=pretty', (res) => {
       res.on('data', (d) => {
         const story = JSON.parse(d, (key, value) => {
           return value && value.type === 'Buffer'
             ? new Buffer(value.data)
             : value;
         });
         resolve(story);
         callback(story);
      });

    }).on('error', (e) => {
      reject(e);
      callback(e);
    });
  });
}
