<script setup lang="ts">
import {data} from "../data"
const analytics = data.analytics
</script>

<template>
  <div class="profile">
    <h2>Events:</h2>
    <div class="section">
      <div class="event-container" v-for="event in data.eventData">
        <div class="event-info">
          <h3>{{ event.name }}</h3>
          <h3>{{ event.date }} </h3>
          <h3>{{ event.time }}</h3></div>
        </div>
      </div>
    <h2>Outfits:</h2>
    <div class="section">
      <div class="outfit-container" v-for="post in data.personalPostData">
        <div>
          <img :src=post.image >
      </div>
    </div>
    </div>
    <h2>Wardrobe:</h2>
    <h2>Analytics:</h2>
    <h3>Most Worn:</h3>
    <p>Brands: {{ }}</p>
    <p>Materials: </p>
    <p>Size: </p>
    <div class="section">
      <div class="outfit-container" v-for="post in data.personalPostData">
        <div>
          <img :src=post.image >
      </div>
    </div>
    </div>
    <h3>Least Worn:</h3>
    <p>Brands: {{ }}</p>
    <p>Materials: </p>
    <p>Size: </p>
    <div class="section">
      <div class="outfit-container" v-for="post in data.personalPostData">
        <div>
          <img :src=post.image >
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  font-family: 'Afacad', sans-serif;
  margin: 5rem 1rem;
  color: black;
  .section {
     display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow: scroll;
  }
  .event-container {
    background-color: #B2ADB3;
    padding: 0.5rem;
    border-radius: 10px;
    .event-info {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }
  .outfit-container {
    background-color: #B2ADB3;
    height: 10rem;
    width: auto;
    border-radius: 10px;
    img {
      width: 15rem;
      height: 10rem;
      padding: 1rem;
      object-fit: cover;
    }
  }

}

</style>
