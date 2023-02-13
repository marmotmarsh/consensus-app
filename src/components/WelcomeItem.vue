<template>
  <div>
    <h2>
      <slot name="heading"></slot>
    </h2>
    <div class="desc">
      <slot></slot>
    </div>
    <b-button class="btn btn-primary">
      <slot name="button"></slot>
    </b-button>
  </div>
</template>

<style scoped>
h2 {
  font-size: 31.5px;
  margin: 10px 0;
}

.desc {
  margin: 0 0 10px;
}
</style>
