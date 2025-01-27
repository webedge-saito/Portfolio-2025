<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Greeting from './components/Greeting.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Greeting msg="Hi!" />

      <nav>
        <RouterLink to="/">FrontEnd</RouterLink>
        <RouterLink to="/coding">Coding</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer> © E.S. portfolio 2025 </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-white);
  background: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  opacity: 0.7;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  margin:0 0.1rem;
  color: var(--color-text);
  border-radius: 12px;
}
footer{
  margin-top: 10vw;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 430px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  footer{
    margin-top: 1rem;
  }
}
</style>
