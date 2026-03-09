<script setup lang="ts">

</script>

<template>
  <body>
    <main>
    <RouterView/>
  </main>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>  
  </nav>
  </body>
</template>

<style scoped>
nav {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  text-transform: uppercase;
}

</style>
