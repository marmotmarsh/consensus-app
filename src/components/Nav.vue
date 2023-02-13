<script lang="ts">
import { RouterLink } from 'vue-router';
import { CONSENSUS_BASICS_ROUTE, NEW_PROPOSAL_ROUTE } from '@/const';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      newProposalRoute: NEW_PROPOSAL_ROUTE,
      consensusBasicsRoute: CONSENSUS_BASICS_ROUTE,
    };
  },
});
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-bind:to="newProposalRoute">Create Proposal</RouterLink>
    <RouterLink v-bind:to="consensusBasicsRoute">Consensus Basics</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 14px;
  margin: 1em;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: inline-block; */
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
