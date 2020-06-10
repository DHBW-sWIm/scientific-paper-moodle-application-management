define(['mod_vuestest/vue', 'mod_vuestest/axios'], function (Vue) {
    "use strict";
    function init() {
        new Vue({
            delimiters: ["[[", "]]"],
            el: "#app",
            data: {
                message: "Binded message",
                count: 0,
                user: "",
                pw: "",
                token: "",
                loggedIn: false,
                courses: [],
                camundaMessage: ""
            },
            mounted: function () {
              this.checkLoginToken();
            },
            methods: {
                getToken: function () {
                    var axios = require('mod_vuestest/axios');
                    var self = this;
                    console.log(self);
                    axios
                        .get('/login/token.php', {
                            params: {
                                username: this.user,
                                password: this.pw,
                                service: 'moodle_mobile_app'
                            }
                        })
                        .then(function (response) {
                            console.log(response);
                            var datev = new Date();
                            datev.setTime(datev.getTime() + (1 * 24 * 60 * 60 * 1000));
                            var expires = "expires=" + datev.toUTCString();
                            document.cookie = "wstoken=" + response.data.token + ";" + expires + ";path=/";
                            self.checkLoginToken();
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                },
                getCourses: function () {
                    var axios = require('mod_vuestest/axios');
                    var self = this;
                    var postData = {
                        wstoken: self.token,
                        wsfunction: 'core_course_get_courses',
                        moodlewsrestformat: 'json'
                    };
                    var axiosConfig = {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    };
                    axios
                        .get('/webservice/rest/server.php', {
                            params: {
                                wstoken: self.token,
                                wsfunction: 'core_course_get_courses',
                                moodlewsrestformat: 'json'
                            }
                        }, axiosConfig)
                        .then(function (response) {
                            if (!response.data.exception) {
                                self.courses = response.data;
                            }                            
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                },
                callCamunda: function (processID) {
                    var axios = require('mod_vuestest/axios');
                    var self = this;
                    var axiosConfig = {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    };
                    axios
                        .post('http://localhost:8051/engine-rest/process-definition/key/'+processID+'/start', {
                            
                        }, axiosConfig)
                        .then(function (response) {
                            console.log();     
                            self.camundaMessage = 'Process started with id: ' + response.data.id;   
                        })
                        .catch(function (error) {
                            self.camundaMessage = error.message;
                        })
                },
                checkLoginToken: function(){
                    var cookie = document.cookie;
                    var splitted = cookie.split(";");
                    var cookieThere = false;
                    for (var index = 0; index < splitted.length; index++) {
                        if (splitted[index].substring(1,8)=="wstoken") {
                            cookieThere = true;
                            this.loggedIn = true;
                            this.token = splitted[index].substring(9);
                        }   
                    }
                    if (!cookieThere) {
                        this.loggedIn = false;
                    }
                }
            }
        });
    }
    return {
        init: init
    };
});
