const app = new Vue( {
  el: '#app',
  data: {
    name: 'Loading...',
    email: 'Loading...',
    company: {
      name: 'Loading...',
      chatchPhrase: 'Loading...'
    }
  },
  created() {
    //L'istanza viene creata
    axios.get( 'https://jsonplaceholder.typicode.com/users' ).then( ( response ) => {
      //Use response to update data
      const data = response.data;
      const randomUser = response.data[ Math.floor( Math.random() * data.length ) ];

      this.name = randomUser.name;
      this.email = randomUser.email;
      this.company.name = randomUser.company.name;
      this.company.chatchPhrase = randomUser.company.chatchPhrase;
    } );
  },
  mounted() {
    //L'istanza viene montata
    console.log( this.$el );
  },
  updated() {
    //L'istanza viene aggiornata
    console.log( this.$el );
  },
  destroyed() {
    //L'istanza viene distrutta
  }
} );