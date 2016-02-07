var serv = require('./index');
serv.allTopStories();
setTimeout( () => {
  console.log(serv.allTopStories());
}, 3000);
