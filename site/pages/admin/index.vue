<template>
  <div>
    Admin Area
    {{ test }}
  </div>
</template>

<script lang="ts">
import {authedFetch} from "~/utils/authedFetch";
import {useCookie} from "#app";

export default {
  data() {
    return {
      jwt: null,
      test: null,
    }
  },
  mounted() {
    this.jwt = useCookie('CF_Authorization')
    this.fetchTest()
  },
  methods: {
    async fetchTest() {
      this.test = await (await authedFetch('https://link-dev.felixoi.com/api/urls', {
        method: 'POST'
      }, this.jwt)).json()
    }
  }
}
</script>
