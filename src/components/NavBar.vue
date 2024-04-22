<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="nav-container">
    <nav>
      <ul>
        <li><RouterLink class="link" to="/">Home</RouterLink></li>
        <li><RouterLink class="link" to="/newpost">New Post</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-container {
  background-color: rgb(53, 106, 221);
}

nav {
  margin-left: 60px;
  padding: 20px;
}

nav ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 2px;
  list-style: none;
}

nav ul li {
  border-radius: 5px;
  padding: 7px;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out; /* Add transition properties */
}

nav ul li:hover {
  background-color: rgb(90, 140, 214);
  border-radius: 5px;
  transform: scale(1.05); /* Add a slight scale effect on hover */
}

.link {
  color: white;
  text-decoration: none;
}
</style>
