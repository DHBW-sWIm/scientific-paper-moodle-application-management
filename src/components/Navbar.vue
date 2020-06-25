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
          <button
            class="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            @click="logout"
            disabled
            v-if="loggedInSSO"
            data-container="body"
            data-toggle="popover"
            data-placement="bottom"
            data-content="NEU: SSO über Moodle Nutzer aktiv"
          >
            <span class="badge badge-success">SSO</span> Logout
          </button>
          <button
            class="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            @click="logout"
            v-else
          >Logout</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Vue from "vue";
export default {
  name: "Navbar",
  props: {
    page: {
      type: Number,
      default: 1
    },
    loggedIn: Boolean
  },
  mounted() {
    if (
      document.querySelector("#webservicetoken") &&
      document.querySelector("#webservicetoken").getAttribute("value")
    ) {
      this.loggedInSSO = true;
      this.saveToken(
        document.querySelector("#webservicetoken").getAttribute("value")
      );
      Vue.nextTick(function() {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="popover"]').popover("show");
        $("html").on("click", function(e) {
          if (
            typeof $(e.target).data("original-title") == "undefined" &&
            !$(e.target)
              .parents()
              .is(".popover.in")
          ) {
            $('[data-toggle="popover"]').popover("hide");
          }
        });
      });
    }
  },
  data() {
    return {
      user: "",
      psw: "",
      loginLoading: false,
      loggedInSSO: false
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
    saveToken: function(token) {
      var datev = new Date();
      datev.setTime(datev.getTime() + 1 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + datev.toUTCString();
      document.cookie = "wstoken=" + token + ";" + expires + ";path=/";
      this.$emit("loginCheck");
      this.loginLoading = false;
    },
    getToken: function() {
      this.loginLoading = true;
      axios
        .get((process.env.VUE_APP_MOODEL_URL || "") + "/login/token.php", {
          params: {
            username: this.user,
            password: this.psw,
            service: "serviceweb"
          }
        })
        .then(response => {
          this.saveToken(response.data.token);
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
          this.loginLoading = false;
        });
    }
  }
};
</script>

<style >
</style>
