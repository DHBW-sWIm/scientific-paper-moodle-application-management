<template >
    <div aria-live="polite" aria-atomic="true" style="position: absolute; bottom: 50px; right: 50px;">
      <div class="toast" id="infotoast"  data-autohide="true" data-delay="5000">
        <div class="toast-header">
          <strong class="mr-auto">Hinweis</strong>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            
          </button>
        </div>
        <div class="toast-body">{{ message }}</div>
      </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Toast",
  props: {
    message: String
  },
  data() {
    return {

    };
  },
  methods: {
    open: function() {
      $("#infotoast").toast("show");
    },
  }
};
</script>

<style >
</style>
