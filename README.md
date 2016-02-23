## Installation

```javascript
$ npm install hack-news
```

## Usage

####Top Stories
The examples below shows how to access the IDs of the top stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for the top stories on hacker news

hn.allTopStories( (allTheStories, error) => {
  if (error) {
    console.log(error);
  }
  console.log(allTheStories);
});

//Using Promises
hn.allTopStories().then(stories => {console.log(stories);});

/*Returns an array of article ids in the amount of your choice.
So if you wanted the top ten stories on Hacker News it would look like this.*/

hn.numberOfTopStories(10, (numberOfStories, error) => {
  if (error) {
    console.log(error);
  }
  console.log(numberOfStories);
});

//Using Promises
hn.numberOfTopStories(10).then(numberOfStories => {console.log(numberOfStories);});
```
####New Stories
The examples below shows how to access the IDs of the new stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for the new stories on hacker news
hn.allNewStories( (allTheStories, error) => {
  if (error) {
    console.log(error);
  }
  console.log(allTheStories);
});

//Using Promises
hn.allNewStories().then(stories => {console.log(stories);});

/*Returns an array of article ids in the amount of your choice.
So if you wanted the top ten newest stories on Hacker News it would look like this.*/
hn.numberOfNewStories(10, (numOfStories, error) => {
  if (error) {
    console.log(error);
  }
  console.log(numOfStories);
});

//Using Promises
hn.numberOfNewStories(10).then(numberOfStories => {console.log(numberOfStories);});
```

####Ask, Show and Job Stories
The examples below shows how to access the IDs of Ask, Show and Job stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for Ask, Show and Job stories on hacker news.
//Just place 'ask', 'show', or 'job' as the first parameter to retrieve the array you need.
hn.askShowOrJobStories('ask', (asj, error) => {
  if (error) {
    console.log(error);
  }
  console.log(asj);
});

//Using Promises
hn.askShowOrJobStories('show').then(asj => {console.log(asj);});

//If you wanted the Top Ten Ask, Show, Job you ca use the numbOfAskShowOrJobStories method like so.
hn.numbOfAskShowOrJobStories('show', 10, (asj, error) => {
  if (error) {
    console.log(error);
  }
  console.log(asj);
});

//Using Promises
hn.numbOfAskShowOrJobStories('job', 10).then(asj => {console.log(asj);});
```

This is it for now but stay tuned I will be adding a lot more.
