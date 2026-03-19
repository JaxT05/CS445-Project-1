<script setup lang="ts">

</script>
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Afacad&display=swap" rel="stylesheet">

    <main>
        <header>

        </header>
      <div class="add-button">
        <p>+</p>
      </div>
    <RouterView/>
  </main>
  <nav>
    <RouterLink class="link" to="/"><h2>Home</h2></RouterLink>
    <h2>|</h2>
    <RouterLink class="link" to="/profile"><h2>Profile</h2></RouterLink>  
  </nav>
</template>

<style scoped>
#app body {
  width: 100%;
  display: flex;
  align-items: center;
}
header {
  background: var(--secondary-color);
  width: 100%;
  height: 4.5rem;
  position: fixed;
  top: 0;
  left: 0;
}
nav {
  font-family: 'Afacad', sans-serif;
  position: fixed;
  background: var(--white);
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  text-transform: uppercase;
  border: 2px solid black;
  h2 {
    color: black;
  }
}
.add-button {
  position: fixed;
  bottom: 100px;
  right: 25px;
  width: 5rem;
  height: 5rem;
  aspect-ratio: 1/1;
  padding: 0.5rem;
  background-color: var(--secondary-color);
  border-radius: 50%;
  p { 
    position: absolute;  
    top: 50%; 
    left: 50%;
    transform: translate(-51%, -122%);
    color: var(--white);
    font-size: 5rem;
    :active {
      transform: rotate(45)
    }
  }
}
</style>
