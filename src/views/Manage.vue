<template>
  <div class="container">
    <h2>Manager für angelegte Arbeiten</h2>
    <div
      class="alert alert-success"
      role="alert"
    >Wissenschaftliche Betreuer, sowie unternehmensinterne Ansprechpartner können den Studenten im jeweiligen Assignment zugeordnet werden.</div>
    <table class="table" v-for="course in courses" :key="course.id">
      <thead>
        <tr>
          <th scope="col">Assignment ID</th>
          <th scope="col">Assignment CMID</th>
          <th scope="col">Kurs</th>
          <th scope="col">Assignment Name</th>
          <th scope="col">Abgabe</th>
          <th scope="col">Studenten</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="assignment in course.assignments" :key="assignment.id">
          <td>{{ assignment.id }}</td>
          <td>{{ assignment.cmid }}</td>
          <td>{{ course.fullname }}</td>
          <td>{{ assignment.name }}</td>
          <td>{{ assignment.duedate }}</td>
          <td>
            <button
              class="btn btn-primary"
              type="button"
              @click="showStudents(assignment)"
            >Studenten</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="modal fade"
      id="modalStudents"
      ref="modalStudents"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalStudents"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Diesem Assignment zugewiesene Studenten</h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <table class="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Aktueller Wiss. Betreuer</th>
                    <th scope="col">Neuer Wiss. Betreuer</th>
                    <th scope="col">Submission</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>{{ student.firstname }} {{ student.lastname }}</td>
                    <td>{{ student.currentSupervisor }}</td>
                    <td>
                      <div class="form-group">
                        <select
                          name="supervisors"
                          id="supervisors"
                          class="form-control form-control-sm mt-2"
                          @change="student.changed=true"
                          v-model="student.newSupervisor"
                        >
                          <option value="NULL" />
                          <option
                            v-for="supervisor in supervisors"
                            :key="supervisor.id"
                            :value="supervisor.id"
                          >{{ supervisor.firstname }} {{ supervisor.lastname }}</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div>
                        <button
                          class="btn btn-primary"
                          type="button"
                          ref="'button'+student.id+'assign'"
                          @click="signature($event, student.id)"
                        >Signieren</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="saveData"
            >Änderungen sichern</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Schließen</button>
          </div>
        </div>
      </div>
    </div>
    <Infotoast ref="infotoastref" :message="toastmessage" />
    <Docusign ref="docusigner"></Docusign>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Infotoast from "@/components/Infotoast.vue";
import Docusign from "@/components/Docusign.vue";
export default {
  name: "About",
  components: {
    Infotoast,
    Docusign
  },
  data() {
    return {
      students: [],
      showModal: false,
      supervisors: [],
      courses: [],
      selectedAssignment: "",
      toastmessage: "",
      url: ""
    };
  },
  props: {
    token: {
      type: String,
      default: ""
    }
  },
  beforeCreate: function() {},
  mounted() {
    this.getSupervisors();
    this.getCourses();
  },
  created() {},
  methods: {
    signature(event, studentid) {
      this.$emit("loading", "10%", false);
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "mod_assign_get_submissions",
              moodlewsrestformat: "json",
              "assignmentids[0]": this.selectedAssignment
            }
          },
          axiosConfig
        )
        .then(response => {
          this.$emit("loading", "90%", false);
          var urlToOpen = "";
          if (!response.exception && response.data.assignments.length == 1) {
            for (
              let i = 0;
              i < response.data.assignments[0].submissions.length;
              i++
            ) {
              const element = response.data.assignments[0].submissions[i];
              if (element.userid == studentid) {
                for (let j = 0; j < element.plugins.length; j++) {
                  const fileElement = element.plugins[j];
                  if (
                    fileElement.type == "file" &&
                    fileElement.fileareas.length == 1 &&
                    fileElement.fileareas[0].files.length == 1
                  ) {
                    const webserviceUrl =
                      fileElement.fileareas[0].files[0].fileurl;
                    const publicUrl = webserviceUrl.replace("webservice/", "");
                    console.log(publicUrl); // eslint-disable-line
                    urlToOpen = publicUrl;
                  }
                }
              }
            }
            if (urlToOpen != "") {
              this.$refs.docusigner.signApi(urlToOpen);
            } else {
              event.target.innerHTML = "n.A.";
              event.target.disabled = true;
            }
            this.$emit("loading", "100%", true);
          }
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    saveData() {
      var changedStudents = [];
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].changed) {
          changedStudents.push({
            studentid: this.students[i].id,
            supervisorid: this.students[i].newSupervisor,
            assignid: this.selectedAssignment,
            corporatepartnerid: 1
          });
        }
      }
      var jsonData = {
        changes: changedStudents
      };

      var data = {
        variables: {
          dbchanges: {
            value: JSON.stringify(jsonData),
            type: "String"
          }
        }
      };
      this.$emit("loading", "10%", false);
      axios
        .post(
          (process.env.VUE_APP_CAMUNDA_URL ||
            "https://camunda.scientific-paper.swimdhbw.de/") +
            "engine-rest/process-definition/key/application_for_paper/start",
          data,
          {
            headers: {
              "Content-type": "application/json"
            }
          }
        )
        .then(response => {
          this.$emit("loading", "100%", true);
          if (response.status == 200) {
            this.toastmessage = "Die Zuordnung wurde erfolgreich angefordert.";
          } else {
            this.toastmessage =
              "Bei der Anforderung der Zuordnung ist ein Fehler aufgetreten.";
          }
          this.$refs.infotoastref.open();
        });
    },
    showStudents(assignment) {
      var aid = assignment.course;
      this.selectedAssignment = assignment.id;
      this.$emit("loading", "10%", false);
      this.students = [];
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "core_enrol_get_enrolled_users",
              moodlewsrestformat: "json",
              courseid: aid
            }
          },
          axiosConfig
        )
        .then(response => {
          if (!response.exception) {
            this.students = this.filterStudents(response.data);
            axios
              .get(
                (process.env.VUE_APP_MOODEL_URL || "") +
                  "/webservice/rest/server.php",
                {
                  params: {
                    wstoken: this.token,
                    wsfunction: "local_spsupman_get_studenthassupervisor",
                    moodlewsrestformat: "json"
                  }
                },
                axiosConfig
              )
              .then(respo => {
                if (!respo.exception) {
                  for (let i = 0; i < respo.data.length; i++) {
                    for (let j = 0; j < this.students.length; j++) {
                      if ((this.students[j].id == respo.data[i].studentid) && (respo.data[i].assignmentid == this.selectedAssignment)) {
                        this.students[j].currentSupervisor = respo.data[i].supervisorid;
                      }
                      
                    }
                    
                  }
                  $("#modalStudents").modal("show");
                  this.$emit("loading", "100%", true);
                }
              })
              .catch(error => {
                console.log(error); // eslint-disable-line
                this.$emit("loading", "100%", true);
                this.$emit("ajaxerror");
              });

          }
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    getSupervisors: function() {
      this.$emit("loading", "10%", false);
      this.supervisors = [];
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "local_spsupman_get_supervisors",
              moodlewsrestformat: "json"
            }
          },
          axiosConfig
        )
        .then(response => {
          if (!response.data.exception) {
            this.supervisors = response.data;
            this.$emit("loading", "100%", true);
          } else {
            this.$emit("loading", "100%", true);
            this.$emit("ajaxerror");
          }
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
        });
    },
    filterStudents(allStudents) {
      var filteredStudents = [];
      for (let i = 0; i < allStudents.length; i++) {
        var isStudent = false;
        for (let j = 0; j < allStudents[i].roles.length; j++) {
          if (allStudents[i].roles[j].roleid == 5) {
            isStudent = true;
          }
        }
        if (isStudent) {
          allStudents[i].currentSupervisor = "";
          allStudents[i].changed = false;
          allStudents[i].newSupervisor = "";
          filteredStudents.push(allStudents[i]);
        }
      }
      return filteredStudents;
    },
    getCourses: function() {
      this.$emit("loading", "10%", false);
      var axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      };
      axios
        .get(
          (process.env.VUE_APP_MOODEL_URL || "") +
            "/webservice/rest/server.php",
          {
            params: {
              wstoken: this.token,
              wsfunction: "mod_assign_get_assignments",
              moodlewsrestformat: "json"
            }
          },
          axiosConfig
        )
        .then(response => {
          this.$emit("loading", "100%", true);

          if (!response.exception) {
            this.courses = response.data.courses;
            console.log(this.courses); // eslint-disable-line
          }
        })
        .catch(error => {
          this.$emit("loading", "100%", true);
          this.$emit("ajaxerror");
          console.log(error); // eslint-disable-line
        });
    }
  }
};
</script>