## Installation

```javascript
$ npm install hack-news
```

## Usage
The examples below shows how to access the IDs of the top stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for the top stories on hacker news
hn.numberOfTopStories(10, (numberOfStories) => {
  console.log(numberOfStories);
});

/*Returns an array of article ids in the amount of your choice.
So if you wanted the top ten stories on Hacker News it would look like this.*/
hn.allTopStories( (allTheStories) => {
  console.log(allTheStories);
});
```
This is it for now but stay tuned I will be adding alot more.
