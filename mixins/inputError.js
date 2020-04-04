export default {
  methods: {
    formError(field) {
      return {
        error: field.$error,
        invalid: field.$invalid,
        dirty: field.$dirty
      }
    }
  }
}
