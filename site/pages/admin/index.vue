<template>
  <div>
    Admin Area
    {{ test }}
  </div>
</template>

<script>
import {useRequestHeaders} from "nuxt3";

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
        method: 'POST',
        headers: {
          ...useRequestHeaders()
        }
      })).json()
    }
  }
}
</script>
