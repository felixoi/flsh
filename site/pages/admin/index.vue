<template>
  <div>
    Admin Area
    {{ test }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: null,
    }
  },
  mounted() {
    this.fetchTest()
  },
  methods: {
    async fetchTest() {
      this.test = await (await fetch('https://link-dev.felixoi.com/api/urls', {
        method: 'POST'
      })).json()
    }
  }
}
</script>
