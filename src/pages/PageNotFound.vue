<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/" class="home-link">Go back to Home</router-link>
  </div>
</template>

<script setup>
// No script logic needed for basic view
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 80px 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ff4d4f;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.home-link:hover {
  background-color: #369f6b;
}
</style>
