var serv = require('./index');

function meow() {
  return serv.numberOfTopStories(9);
}

console.log(meow());
