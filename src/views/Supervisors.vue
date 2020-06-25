<template>
  <div class="container">
    <h2>Manager für angelegte wissenschaftliche Betreuer</h2>
    <div
      class="alert alert-success"
      role="alert"
    >Wissenschaftliche Betreuer können hier verwaltet werden. Hinweis: Ziel ist die Verwendung normaler Moodle Accounts.</div>
    <div class="row">
      <div class="form-group col-8">
        <input class="form-control" placeholder="Suche" type="text" v-model="search" />
      </div>
      <div class="form-group col-4 d-flex justify-content-end">
        <button class="btn btn-primary" v-on:click="newSupervisorForm">Neuer Supervisor</button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Supervisor ID</th>
            <th scope="col">Vorname</th>
            <th scope="col">Nachname</th>
            <th scope="col">Titel</th>
            <th scope="col">Geschlecht</th>
            <th scope="col">Geburtstag</th>
            <th scope="col">Sprachen</th>
            <th scope="col">Adresse</th>
            <th scope="col">Stadt</th>
            <th scope="col">Postleitzahl</th>
            <th scope="col">Telefonnummer</th>
            <th scope="col">E-Mail</th>
            <th scope="col">IBAN</th>
            <th scope="col">Spezialisierung</th>
            <th scope="col">Topictyp</th>
            <th scope="col">Verfügbare Perioden</th>
            <th scope="col">Bachelorarbeit</th>
            <th scope="col">Pro Jahr</th>
            <th scope="col">Zur gleichen Zeit</th>
            <th scope="col">Angelegt</th>
            <th scope="col">Geändert</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="supervisor in filteredItems" :key="supervisor.id">
            <td>{{ supervisor.id }}</td>
            <td>{{ supervisor.firstname }}</td>
            <td>{{ supervisor.lastname }}</td>
            <td>{{ supervisor.title }}</td>
            <td>{{ formatGender(supervisor.gender) }}</td>
            <td>{{ new Date(parseInt(supervisor.birthdate)*1000 ).toLocaleDateString()}}</td>
            <td>{{ supervisor.languages }}</td>
            <td>{{ supervisor.address }}</td>
            <td>{{ supervisor.city }}</td>
            <td>{{ supervisor.postalcode }}</td>
            <td>{{ supervisor.phone }}</td>
            <td>{{ supervisor.email }}</td>
            <td>{{ supervisor.iban }}</td>
            <td>{{ supervisor.specialisation }}</td>
            <td>{{supervisor.topictype}}</td>
            <td>{{supervisor.supportperiod}}</td>
            <td>{{supervisor.bachelor}}</td>
            <td>{{parseInt(supervisor.peryear)+1}}</td>
            <td>{{parseInt(supervisor.atthesametime)+1}}</td>

            <td>{{ new Date(parseInt(supervisor.timecreated)*1000 ).toLocaleDateString()}}</td>
            <td>{{ new Date(parseInt(supervisor.timemodified)*1000 ).toLocaleDateString()}}</td>
          </tr>
        </tbody>
      </table>
    </div>

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
            <div class="container">Modal</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Änderungen sichern</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Schließen</button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modalNew"
      ref="modalNew"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalNew"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Neuer wissenschaftlicher Betreuer</h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <form>
                <div class="form-row">
                  <div class="col-md-12 mb-3">
                    <label for="validationServerUsername">Moodle User</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                      </div>
                      <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        placeholder="Moodle User"
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                      <div class="invalid-feedback">Bitte wählen Sie einen Moodle Nutzer aus.</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Änderungen sichern</button>
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
  computed: {
    filteredItems() {
      return this.supervisors.filter(supervisor => {
        return (
          supervisor.firstname
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1 ||
          supervisor.lastname.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.title.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.address.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.city.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.phone.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.email.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.iban.toLowerCase().indexOf(this.search.toLowerCase()) >
            -1 ||
          supervisor.specialisation
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1 ||
          supervisor.topictype
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1
        );
      });
    }
  },
  data() {
    return {
      newSupervisor:{
        firstnameValid: true,
        firstname: "Stephan",
      },
      search: "",
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
    newSupervisorForm() {
      $("#modalNew").modal("show");
    },
    formatGender: function(gender) {
      var genderString = "";
      switch (gender) {
        case "0":
          genderString = "männlich";
          break;
        case "1":
          genderString = "weiblich";
          break;
        case "2":
          genderString = "divers";
          break;

        default:
          genderString = "ungültig";
          break;
      }
      return genderString;
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
    }
  }
};
</script>