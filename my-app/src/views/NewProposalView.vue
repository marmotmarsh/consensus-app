<script lang="ts">
import { defineComponent } from 'vue';
import type { Editor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

import type { IProposal } from '../types';
import TipTap from '@/components/TipTap.vue';

export default defineComponent({
  data() {
    const proposal: IProposal = {
      title: '',
      description: '',
      name: '',
      email: '',
    };

    return {
      proposal,
      editor: {} as Editor,
    };
  },
  props: ['proposal'],

  components: {
    TipTap,
  },

  methods: {
    onSubmit(event: any): void {
      event.preventDefault();
      alert(JSON.stringify(this.proposal));
    },
  },
});
</script>

<template>
  <div class="container">
    <b-card>
      <b-form @submit="onSubmit">
        <b-form-group>
          <b-form-input
            id="input-title"
            v-model="proposal.title"
            placeholder="Proposal Title"
            required
          />
        </b-form-group>
        <b-form-group>
          <tip-tap />
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-name"
            v-model="proposal.name"
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
