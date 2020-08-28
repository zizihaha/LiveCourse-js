<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: Microsoft JhengHei, sans-serif;
}

h2{
  color: #41B883;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size:20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;
    &:hover{
      color: #db7093; 
    }
    &.router-link-exact-active {
      color: #db7093;
    }
  }
}
</style>
