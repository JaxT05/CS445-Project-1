<script setup lang="ts">
import HomepagePost from '../components/HomepagePost.vue';
import { data } from "../data"
</script>

<template>
  <div class="feed-container">
    <h2>Your Feed:</h2>
    <div v-for="post in data.postData" :key="post.title">
      <HomepagePost :imageUrl=post.image :username=post.username />
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: 'Afacad', sans-serif;
  text-align:right;
  color: black;
}
.feed-container {
  margin: 5.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: left;
  justify-content: center;
}
</style>
