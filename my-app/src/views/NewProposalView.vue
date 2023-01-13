<script lang="ts">
import { defineComponent } from 'vue';

import ProposalForm from '@/components/ProposalForm.vue';
import type { INewProposal } from '../../../types';
import { createProposal } from '@/services';

interface ProposalData {
  proposal: INewProposal;
}

export default defineComponent({
  data() {
    const proposal: INewProposal = {
      title: '',
      description: '',
      name: '',
      email: '',
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
