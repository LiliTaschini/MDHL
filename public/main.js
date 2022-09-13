const { createApp } = Vue

createApp({
  data(){
    return{
    other: false,
    uniform: true,
    hidden: false,
    errors: [],
    name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    country: "",
    zip: "",
    birth: "",
    parent: "",
    phone: "",
    page: "home",
    full: "",
    date: "",
    sign: "",
  }
},
methods:{
  otherChk: function() {
    this.other = !this.other
    },
  haveUnif: function() {
    this.uniform = !this.uniform
  },
  showNav: function() {
    this.hidden = !this.hidden
  },
  checkForm: function (e) {
    if (this.name && this.last_name) {
      return true;
    }

    this.errors = [];

    if (!this.name) {
      this.errors.push('The name is required.');
    }
    if (!this.last_name) {
      this.errors.push('The last_name is required.');
    }
    if(!this.email) {
      this.errors.push("Email required.");
    } else if(!this.validEmail(this.email)) {
      this.errors.push("Valid email required.");
    }
    if(!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
  }
}).mount('#app')

