<script setup lang="ts">

</script>

<template>
  <div class="post-container">
    <div class="image-container">
      <h2>&#8592;</h2>
      <img :src="imageUrl">
      <h2>&rarr;</h2>
    </div>
  </div>
</template>

<script lang="ts">
    export default {
    name: 'HomepagePost',
    props: {
        imageUrl: {
        type: String,
        required: true
        }
    }
    };
</script>
<style scoped>
.post-container {
  background-color: var(--primary-color);
  box-shadow: 2px 4px 4px #00000030;
  border-radius: 5px;
  width: 100%;
  padding: 1.5rem;
  height: 20rem;
  .image-container {
    display: flex;
    align-items: center;
    height: 75%;
    gap: 1rem;
    h2 {
      font-size: 2rem;
      color: var(--white);
    }
    img {
    height: 100%;
    min-width: 20rem;
    object-fit: cover;
    border-radius: 5px;
  }
  }
}
</style>
