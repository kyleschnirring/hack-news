var serv = require('./index');
var me;
me = serv.allTopStories();
setTimeout( () => {
  console.log(me[0]);
}, 3000);
