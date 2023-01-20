<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Editor } from '@tiptap/vue-3';

import type { NewProposal } from '../../../types';
import TipTap from '@/components/TipTap.vue';

export default defineComponent({
  data() {
    return {
      proposalDescription: '',
    };
  },
  props: {
    proposal: {
      type: Object as PropType<NewProposal>,
      required: true,
    },
  },

  components: {
    TipTap,
  },

  methods: {
    submitProposal() {
      console.log(this.proposal.title);
      const payload = {
        proposal: {
          ...this.proposal,
          description: this.proposalDescription,
        },
      };
      this.$emit('submitProposal', payload);
      // TODO: this.clearForm();
    },
    updateDescription(newDesc: string) {
      if (newDesc !== this.proposalDescription) {
        this.proposalDescription = newDesc;
      }
    },
  },
});
</script>

<template>
  <div class="container">
    <b-card>
      <b-form @submit="submitProposal">
        <b-form-group>
          <b-form-input
            id="input-title"
            v-model="proposal.title"
            placeholder="Proposal Title"
            required
          />
        </b-form-group>
        <b-form-group>
          <tip-tap :update-description="updateDescription" />
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-name"
            v-model="proposal.userName"
            placeholder="Your Name (Optional)"
            required
          />
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-email"
            v-model="proposal.email"
            placeholder="Your Email (Optional)"
            type="email"
          />
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
        >
          Submit
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>
