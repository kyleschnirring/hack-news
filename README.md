## Installation

```javascript
$ npm install hack-news
```

## Usage

####Top Stories
The examples below show how to access the IDs of the top stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for the top stories on hacker news

hn.allTopStories( (error, allTheStories) => {
  if (error) {
    console.log(error);
  }
  console.log(allTheStories);
});

//Using Promises
hn.allTopStories().then(stories => {console.log(stories);});

/*Returns an array of article ids in the amount of your choice.
So if you wanted the top ten stories on Hacker News it would look like this.*/

hn.numberOfTopStories(10, (error, numberOfStories) => {
  if (error) {
    console.log(error);
  }
  console.log(numberOfStories);
});

//Using Promises
hn.numberOfTopStories(10).then(numberOfStories => {console.log(numberOfStories);});
```
####New Stories
The examples below show how to access the IDs of the new stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for the new stories on hacker news
hn.allNewStories( (error, allTheStories) => {
  if (error) {
    console.log(error);
  }
  console.log(allTheStories);
});

//Using Promises
hn.allNewStories().then(stories => {console.log(stories);});

/*Returns an array of article ids in the amount of your choice.
So if you wanted the top ten newest stories on Hacker News it would look like this.*/
hn.numberOfNewStories(10, (error, numOfStories) => {
  if (error) {
    console.log(error);
  }
  console.log(numOfStories);
});

//Using Promises
hn.numberOfNewStories(10).then(numOfStories => {console.log(numOfStories);});
```

####Ask, Show and Job Stories
The examples below show how to access the IDs of Ask, Show and Job stories on Hacker News.

```javascript
var hn = require('hack-news');

//Returns an array of all the article ids for Ask, Show and Job stories on hacker news.
//Just place 'ask', 'show', or 'job' as the first parameter to retrieve the array you need.
hn.asjStories('ask', (error, asj) => {
  if (error) {
    console.log(error);
  }
  console.log(asj);
});

//Using Promises
hn.asjStories('show').then(asj => {console.log(asj);});

//If you wanted the Top Ten Ask, Show, Job you ca use the numbOfAskShowOrJobStories method like so.
hn.numbOfAsjStories('show', 10, (error, asj) => {
  if (error) {
    console.log(error);
  }
  console.log(asj);
});

//Using Promises
hn.numbOfAsjStories('job', 10).then(asj => {console.log(asj);});
```

####IDs
The examples below show how to select a single story with its ID you can also use
the ID method with the other methods provided.

All items have some of the following properties, with required properties in bold.

| Field | Description |
| ----- | :---------- |
| **id** | The item's unique id. |
| deleted | true if the item is deleted. |
| type | The type of item. One of "job", "story", "comment", "poll", or "pollopt". |
| by | The username of the item's author. |
| time | Creation date of the item, in Unix Time. |
| text | The comment, story or poll text. HTML. |
| dead | true if the item is dead. |
| parent | The item's parent. For comments, either another comment or the relevant story. For pollopts, the relevant poll. |
| kids | The ids of the item's comments, in ranked display order. |
| url |	The URL of the story. |
| score |	The story's score, or the votes for a pollopt. |
| title |	The title of the story, poll or job. |
| parts |	A list of related pollopts, in display order. |
| descendants |	In the case of stories or polls, the total comment count. |


```javascript
var hn = require('hack-news');

//This will return a object filled with data corresponding to the ID that was used.
hn.storyWithId(002, (error, story) => {
  if (error) {
    console.log(error);
  }
  console.log(story);
});

//Used with another method
hn.numberOfNewStories(10, (error, numOfStories) => {
  var myArray = numOfStories;
  hn.storyWithId(myArray[0], (error, story) => {
    console.log(story);
  });
});

//Using Promises
hn.storyWithId(12303).then(story => {console.log(story);});

//Used with another method.
hn.numbOfAsjStories('job', 10).then(asj => {
  var myArray = asj;
  hn.storyWithId(myArray[6]).then(story => {console.log(story);});
});
```

####Users
The examples below show how to select a single user with his or hers ID you can also use
the user method with the other methods provided.

All users have some of the following properties, with required properties in bold.

| Field | Description |
| ----- | :---------- |
| **id** |	The user's unique username. Case-sensitive. Required. |
| delay |	Delay in minutes between a comment's creation and its visibility to other users. |
| **created** |	Creation date of the user, in Unix Time. |
| **karma** |	The user's karma. |
| about |	The user's optional self-description. HTML. |
| submitted |	List of the user's stories, polls and comments. |


```javascript
var hn = require('hack-news');

//This will return a object filled with data corresponding to the ID that was used.
hn.userWithId('thefox', (error, user) => {
  if (error) {
    console.log(error);
  }
  console.log(user);
});

//Used with another method
hn.storyWithId(7567, (error, story) => {
  var myUser = story.by;
  hn.userWithId(myUser, (error, user) => {
    console.log(user);
  });
});

//Using Promises
hn.userWithId('thefox').then(user => {console.log(user);});

//Used with another method.
hn.storyWithId(7875).then(story => {
  var myUser = story.by;
  hn.storyWithId(myUser).then(user => {console.log(user);});
});
```

####Changed items and profiles
The examples below show how to access the changed or updated items and profiles on Hacker News.

```javascript
var hn = require('hack-news');

//This will return a object with two properties, one for the items and another for the profiles.
hn.changedItemsAndProfiles( (error, itemsProfiles) => {
  if (error) {
    console.log(error);
  }
  console.log(itemsProfiles);
});

//Using Promises
hn.changedItemsAndProfiles().then(itemsProfiles => {console.log(itemsProfiles);});
```

####Max Item
The examples below show how to grab the max item on hacker news.

```javascript
var hn = require('hack-news');

//This will return the max item.
hn.maxItem( (error, mItem) => {
  if (error) {
    console.log(error);
  }
  console.log(mItem);
});

//Using Promises
hn.maxItem().then(mItem => {console.log(mItem);});
```
