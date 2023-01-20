<script lang="ts">
import Document from '@tiptap/extension-document';
import Link from '@tiptap/extension-link';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null as any,
    };
  },

  props: {
    updateDescription: {
      type: Function,
      required: true,
    },
  },

  mounted() {
    this.editor = new Editor({
      content: '',
      extensions: [
        StarterKit,
        Document,
        Link.configure({
          openOnClick: false,
        }),
        Paragraph,
        Text,
        Underline,
      ],
      onUpdate: ({ editor }) => {
        this.updateDescription(editor.getHTML());
      },
    });
  },

  methods: {
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href;
      const url = window.prompt('URL', previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === '') {
        this.editor.chain().focus().extendMarkRange('link').unsetLink().run();

        return;
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run();
    },
  },

  beforeUnmount() {
    this.editor.destroy();
  },
});
</script>

<template>
  <div v-if="editor">
    <!-- Header 1 -->
    <button
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
    >
      h1
    </button>
    <!-- Header 2 -->
    <button
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
    >
      h2
    </button>
    <!-- Header 3 -->
    <button
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
    >
      h3
    </button>
    <!-- Header 4 -->
    <button
      @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
    >
      h4
    </button>
    <!-- Header 5 -->
    <button
      @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
    >
      h5
    </button>
    <!-- Header 6 -->
    <button
      @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
    >
      h6
    </button>
    <!-- Bold -->
    <button
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
    >
      bold
    </button>
    <!-- Italic -->
    <button
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().focus().toggleItalic().run()"
      :class="{ 'is-active': editor.isActive('italic') }"
    >
      italic
    </button>
    <!-- Underline -->
    <button
      @click="editor.chain().focus().toggleUnderline().run()"
      :disabled="!editor.can().chain().focus().toggleUnderline().run()"
      :class="{ 'is-active': editor.isActive('underline') }"
    >
      underline
    </button>
    <!-- Bullet List -->
    <button
      @click="editor.chain().focus().toggleBulletList().run()"
      :class="{ 'is-active': editor.isActive('bulletList') }"
    >
      bullet list
    </button>
    <!-- Ordered List -->
    <button
      @click="editor.chain().focus().toggleOrderedList().run()"
      :class="{ 'is-active': editor.isActive('orderedList') }"
    >
      ordered list
    </button>
    <!-- Paragraph -->
    <button
      @click="editor.chain().focus().setParagraph().run()"
      :class="{ 'is-active': editor.isActive('paragraph') }"
    >
      paragraph
    </button>
    <!-- Set Link -->
    <button
      @click="setLink"
      :class="{ 'is-active': editor.isActive('link') }"
    >
      setLink
    </button>
    <!-- Unset Link -->
    <button
      @click="editor.chain().focus().unsetLink().run()"
      :disabled="!editor.isActive('link')"
    >
      unsetLink
    </button>
  </div>
  <editor-content :editor="editor" />
</template>

<style lang="scss">
.ProseMirror {
  min-height: 150px;
}
</style>
