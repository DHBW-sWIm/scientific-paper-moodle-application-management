<template>
  <div id="app">
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style="width: 95%"
        v-show="loadingShow"
        ref="loadingBar"
      />
    </div>
    <Navbar @loginCheck="checkLoginToken" :logged-in="loggedIn" />
    <router-view v-bind="routeProps" @loading="loading" @ajaxerror="$refs.ajerror.open();" />

    <Ajaxerror ref="ajerror" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Ajaxerror from "./components/Ajaxerror.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Ajaxerror
  },
  computed: {
    routeProps() {
      if (this.$route.name === "Manage") {
        return { courses: this.courses, token: this.token };
      } else if (this.$route.name === "Supervisors") {
        return { token: this.token };
      } else if (this.$route.name === "Create") {
        return {};
      } else {
        return {};
      }
    }
  },
  data() {
    return {
      loggedIn: false,
      token: "",
      courses: [],
      loadingShow: false
    };
  },
  mounted() {
    
    this.checkLoginToken();
  },
  methods: {
    loading(percentage, ending) {
      this.loadingShow = true;
      this.$refs.loadingBar.style.width = percentage;
      if (ending) {
        setTimeout(() => (this.loadingShow = false), 1000);
      }
    },
    checkLoginToken: function() {
      console.log(document.cookie); // eslint-disable-line
      var cookie = document.cookie;
      var splitted = cookie.split(";");

      var cookieThere = false;

      for (var index = 0; index < splitted.length; index++) {
        if (splitted[index].trim().substring(0, 7) == "wstoken") {
          cookieThere = true;
          this.loggedIn = true;
          this.token = splitted[index].trim().substring(8);
        }
      }

      if (!cookieThere) {
        this.loggedIn = false;
      }
    }
  }
};
</script>

<style>
</style>
