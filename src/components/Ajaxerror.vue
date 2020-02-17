<template>
  <div
    class="modal fade"
    id="modalAjax"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalStudents"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Verbindungsfehler.
          </h5>
        </div>
        <div class="modal-body">
          <div class="container">
            Bei der Verbindung mit Ihrem Webservice ist ein Fehler aufgetreten.
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Ajaxerror",
  props: {

  },
  data() {
    return {

    };
  },
  methods: {
    open: function() {
      $("#modalAjax").modal("show");
    },
  }
};
</script>

<style >
</style>
