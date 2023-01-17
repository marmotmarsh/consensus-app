<script lang="ts">
import { defineComponent } from 'vue';
import WelcomeItem from './WelcomeItem.vue';

export default defineComponent({});
</script>

<template>
  <div class="container">
    <div class="welcome">
      <h2 class="welcome__header">Welcome to Consensus Check!</h2>

      <p class="welcome__body">
        Lots of back and forth over email can be confusing. ConsensusCheck
        complements group decision making over email by making the proposal and
        responses clear and easy.
      </p>
      <p>
        <b-button
          class="btn btn-success btn-large"
          href="/new"
        >
          Create a Old Proposal
        </b-button>
      </p>
      <p>
        <b-button
          class="btn btn-primary btn-med"
          href="/example"
        >
          View an example proposal
        </b-button>
      </p>
    </div>
    <div class="welcome-items">
      <WelcomeItem>
        <template #heading>Consensus Basics</template>
        Consensus is a cooperative process in which group members develop and
        agree to support a decision in the best interest of the whole.
        <template #button>Learn More About Consensus</template>
      </WelcomeItem>

      <WelcomeItem>
        <template #heading>Feedback</template>
        Thank you for using this early version of ConsensusCheck! I would love
        to hear any ideas or feedback you could give me about how to make
        ConsensusCheck support you better!
        <template #button>Send Me Feedback!</template>
      </WelcomeItem>

      <WelcomeItem>
        <template #heading>Consensus Basics</template>
        Consensus is a cooperative process in which group members develop and
        agree to support a decision in the best interest of the whole.
        <template #button>Learn More About Consensus</template>
      </WelcomeItem>
    </div>
  </div>
</template>

<style lang="scss">
.welcome {
  margin-top: 10px;
  align-self: center;
  padding: 60px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 200;
  line-height: 30px;
  color: inherit;
  background-color: #eee;
  border-radius: 6px;

  &__header {
    margin-bottom: 20px;
    text-align: center;
  }

  &__body {
    font-weight: bold;
  }

  p {
    text-align: center;
  }
}

.welcome-items {
  display: grid;
  column-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px 16px 0 16px;
}
</style>
