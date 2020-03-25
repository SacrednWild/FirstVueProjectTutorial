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

const app = new Vue( {
  el:'#app',
  data: { tweets }
} );

const tweetComponent = Vue.component( 'tweet-component', {
  //Options
  template: `
    <div v-for="tweet in tweets" v-bind:key="tweet.id" class="tweet">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img v-bind:src="images/cry.jpg">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong> James </strong>
              <small> @jokerjames </small>
              <br>
              If you don't succeed, dust yourself off and try again.
            </p>
          </div>
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small">
                <i class="fas fa-heart"></i>
              </span>
              <span class="likes"> 10 </span>
            </a>
          </div>
        </div>
      </article>
    </div>
    <div class="control has-icons-left">
      <input class="input is-small" placeholder="Tweet your reply..."/>
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
    </div>
  </div>
  `
} )