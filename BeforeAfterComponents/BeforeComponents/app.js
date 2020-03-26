const tweets = 
[ 
  {
    id: 1,
    name: 'James',
    handle: '@jokerjames',
    img: 'images/cry.jpg',
    tweet: 'If you don\'t succeed, dust yourself off and try again.',
    likes: 10
  },
  {
    id: 2,
    name: 'Fatima',
    handle: '@fantasticfatima',
    img: 'images/girl.jpg',
    tweet: 'Better late than never but never late is better.',
    likes: 12
  },
  {
    id: 3,
    name: 'Xin',
    handle: '@xeroxin',
    img: 'images/manga.jpg',
    tweet: 'Beauty in the struggle, ugliness in the success.',
    likes: 10
  }   
];

Vue.component( 'tweet-content', {
  props: ['tweet'],
  template: `
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ tweet.name }}</strong>
          <small>{{ tweet.handle }}</small>
          <br>
          {{ tweet.tweet }}
        </p>
      </div>
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small">
            <i class="fas fa-heart"></i>
          </span>
          <span class="likes">
            {{ tweet.likes }}
          </span>
        </a>
        <a class="level-item" v-on:click="$emit( 'add', tweet )">
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
        </a>
      </div>
    </div> `
} );

Vue.component('tweet-component', {
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img v-bind:src="tweet.img">
            </figure>
          </div>
          <tweet-content v-bind:tweet="tweet" v-on:add="$emit( 'add', $event )"></tweet-content>
        </article>
      </div>
      <div class="control has-icons-left">
        <input class="input is-small"
          placeholder="Tweet your reply..." />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      </div> `
});

const app = new Vue( {
  el:'#app',
  data: { tweets },
  methods: {
    addTweetMessage( tweet ) {
      let newTweet = {};
      let lastTweetObjectID = this.tweets[this.tweets.length - 1].id;

      //Shallow copy tweet object
      newTweet = Object.assign( {}, tweet );

      //Set tweet id to be one greater than last tweet
      newTweet.id = lastTweetObjectID + 1;

      this.tweets.push( newTweet );
    }
  }
} );