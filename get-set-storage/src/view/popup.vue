<template>
  <div class="main_app">
    <h1>flag {{flag}}</h1>
    <button type="button" v-on:click="flagRevert">Click me!</button>
  </div>
</template>

<script>
export default {
  name: 'popupView',
  data () {
    return {
      flag: false
    }
  },
  methods: {
    flagRevert: function (){
      this.flag = !this.flag;
      chrome.storage.local.set({ ['flag']: this.flag });
    }
  },
  mounted () {
    chrome.storage.local.get(['flag'], (result) => {
      this.flag = result.flag;
    });
  }
}

</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
