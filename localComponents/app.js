const counterOne = {
  template: `
  <button class="component-button" v-bind:click="counter++">
    You clicked me {{ counter }} times.
  </button> `,
  data() {
    return {
      counter: 0
    }
  }
};

const counterTwo = {
  template: `
  <button class="component-button" v-bind:click="counter++">
    You clicked me {{ counter }} times.
  </button> `,
  data() {
    return {
      counter: 0
    }
  }
};

const counterThree = {
  template: `
  <button class="component-button" v-bind:click="counter++">
    You clicked me {{ counter }} times
  </button> `,
  data() {
    return {
      counter: 0
    }
  }
};

new Vue( {
  el: '#app',
  data: {
    message: 'Greetings!'
  },
  components: {
    'counter-one': counterOne,
    'counter-two': counterTwo,
    'counter-three': counterThree
  }
} );