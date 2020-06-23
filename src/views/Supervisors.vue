<template>
  <div class="container">
    <h2>Manager für angelegte wissenschaftliche Betreuer</h2>
    <div
      class="alert alert-success"
      role="alert"
    >Wissenschaftliche Betreuer können hier verwaltet werden. Hinweis: Ziel ist die Verwendung normaler Moodle Accounts.</div>
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">Supervisor ID</th>
          <th scope="col">Vorname</th>
          <th scope="col">Nachname</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="supervisor in supervisors" :key="supervisor.id">
          <td>{{ supervisor.id }}</td>
          <td>{{ supervisor.firstname }}</td>
          <td>{{ supervisor.lastname }}</td>
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
            <h5 class="modal-title">Modal</h5>
          </div>
          <div class="modal-body">
            <div class="container">
              Modal
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
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
      showModal: false,
      supervisors: [],
      toastmessage: ""
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
  },
  created() {},
  methods: {
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
    }
  }
};
</script>