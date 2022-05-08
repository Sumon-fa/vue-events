const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 20) {
        this.counter = 0;
      } else if (value < 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    remove() {
      this.counter = this.counter - 1;
    },
    add() {
      this.counter = this.counter + 1;
    },
  },
});

app.mount('#events');
