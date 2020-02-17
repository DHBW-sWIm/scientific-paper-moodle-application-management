<template>
  <div class="container">
    <h2>Anlage Wissenschaftliche Arbeit</h2>
    <div
      class="alert alert-warning"
      role="alert"
    >
      Moodle unterstützt aktuell nicht die Erstellung von Assignments via Webservice API (v3.8).
      Bitte integrieren Sie manuell ein Assignment Plugin über die Kurs-Homepage.
      <a
        href="https://tracker.moodle.org/browse/MDL-40779"
        target="_blank"
      >Moodle Tracker MDL-40779</a>
    </div>
    <div class="mt-1">
      <div class="form-group">
        <label
          for="paperType"
          class="form-label"
        >Art der wissenschaftlichen Arbeit</label>
        <select
          id="paperType"
          class="form-control form-control-sm"
          disabled
        >
          <option>Projektarbeit 1</option>
          <option>Projektarbeit 2</option>
          <option>Bachelorarbeit</option>
        </select>
      </div>
      <div class="form-group">
        <label
          for="paperDue"
          class="form-label"
        >Abgabetermin</label>
        <div class="">
          <input
            class="form-control"
            type="datetime-local"
            value=""
            id="paperDue"
            disabled
          > 
        </div>
      </div>
      <div class="form-group">
        <label
          for="course"
          class="form-label"
        >Kurs</label>
        <div class="">
          <select
            id="course"
            class="form-control form-control-sm"
            disabled
          >
            <option>WWI 17 SCB</option>
            <option>WWI 17 SCI</option>
            <option>WWI 18 SCB</option>
          </select>
        </div>
      </div>
      <button
        class="btn btn-primary"
        disabled
      >
        Anlage
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {};
  },
  props: {},
  beforeCreate: function() {},
  methods: {}
};
</script>


<style lang="scss" scoped>
</style>