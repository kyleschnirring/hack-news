var serv = require('./index');
var me;
me = serv.numberOfTopStories(9);
setTimeout( () => {
  console.log(me);
}, 3000);
