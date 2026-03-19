<script setup lang="ts">
import HomepagePost from '../components/HomepagePost.vue';
import postData from '../data.json'
</script>

<template>
  <div class="feed-container">
    <div v-for="post in postData.posts" :key="post.title">
      <HomepagePost :imageUrl=post.image />
    </div>
  </div>
</template>

<style scoped>
.feed-container {
  margin: 5.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
</style>
