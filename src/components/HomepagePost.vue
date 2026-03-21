<script setup lang="ts">

</script>

<template>
  <div class="post-container">
    <div class="image-container">
      <h2>&#8592;</h2>
      <img class="post-image" :src="imageUrl">
      <h2>&rarr;</h2>
    </div>
    <div class="text-container">
      <img class="profile-icon" src="/assets/icons/profile-icon-2.svg">
      <p>{{ username }}</p>
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
        },
        username: {
        type: String,
        required: true
        }
    }
    };
</script>
<style scoped>
.post-container {
  font-family: 'Afacad', sans-serif;
  background-color: var(--primary-color);
  color: var(--white);
  box-shadow: 2px 4px 4px #00000030;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  height: fit-content;
  .image-container {
    display: flex;
    align-items: center;
    height: 10rem;
    width: 100%;
    gap: 1rem;
    h2 {
      font-size: 2rem;
      color: var(--white);
    }
    .post-image {
    height: 100%;
    min-width: 20rem;
    object-fit: cover;
    border-radius: 5px;
  }
  }
  .text-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    .profile-icon {
      height: 2rem;
      width: 2rem;
    }
    p {
      font-size: 1.7rem;
      margin-left: 1rem;
    }
  }
}
</style>
