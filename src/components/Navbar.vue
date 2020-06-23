<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/create" class="nav-link">Anlage</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/manage" class="nav-link">Manager</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/supervisors" class="nav-link">Wiss. Betreuer</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" @submit.prevent v-if="!loggedIn">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="User"
            aria-label="User"
            v-model="user"
          />
          <input
            type="password"
            class="form-control mr-sm-2"
            id="psw"
            placeholder="Password"
            v-model="psw"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="getToken">
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              v-if="loginLoading"
            />
            <span class="sr-only" v-if="loginLoading">Loading...</span>
            Login
          </button>
        </form>
        <form class="form-inline my-2 my-lg-0" @submit.prevent v-if="loggedIn">
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logout">Logout</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  props: {
    page: {
      type: Number,
      default: 1
    },
    loggedIn: Boolean
  },
  data() {
    return {
      user: "",
      psw: "",
      loginLoading: false
    };
  },
  methods: {
    click: function(dest) {
      this.$emit("click", dest);
    },
    logout: function() {
      document.cookie = "wstoken=" + ";" + "Max-Age=-99999999" + ";path=/";
      this.$emit("loginCheck");
    },
    getToken: function() {
      var self = this;
      this.loginLoading = true;
      axios
        .get((process.env.VUE_APP_MOODEL_URL || "") + "/login/token.php", {
          params: {
            username: this.user,
            password: this.psw,
            service: "serviceweb"
          }
        })
        .then(function(response) {
          var datev = new Date();
          datev.setTime(datev.getTime() + 1 * 24 * 60 * 60 * 1000);
          var expires = "expires=" + datev.toUTCString();
          document.cookie =
            "wstoken=" + response.data.token + ";" + expires + ";path=/";
          self.$emit("loginCheck");
          self.loginLoading = false;
        })
        .catch(function(error) {
          console.log(error); // eslint-disable-line
          self.loginLoading = false;
        });
    }
  }
};
</script>

<style >
</style>
