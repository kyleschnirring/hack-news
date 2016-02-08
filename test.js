var serv = require('./index');

serv.numberOfTopStories(10, (numberOfStories) => {
  console.log(numberOfStories);
});

serv.allTopStories( (allTheStories) => {
  console.log(allTheStories);
});
