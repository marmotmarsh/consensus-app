<script lang="ts">
import { defineComponent } from 'vue';

import ProposalForm from '@/components/ProposalForm.vue';
import type { NewProposal } from '../../types';
import { createProposal } from '@/services';

interface ProposalData {
  proposal: NewProposal;
}

export default defineComponent({
  data() {
    const proposal: NewProposal = {
      title: '',
      description: '',
      email: '',
      userName: '',
      userId: '',
    };
    return { proposal };
  },
  components: {
    ProposalForm,
  },

  methods: {
    createProposal(data: ProposalData) {
      console.log('data:::', data.proposal);
      createProposal(data.proposal).then((response) => {
        console.log(response);
      });
    },
  },
});
</script>

<template>
  <ProposalForm
    :proposal="proposal"
    @submitProposal="createProposal($event)"
  />
</template>
