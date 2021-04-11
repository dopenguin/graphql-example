<template>
  <div class="grid">
    <a id="anchor" href="/graphql" role="button">Bring me to GraphQL</a>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body,
html {
  height: 99%;
}
.grid {
  display: grid;
  place-items: center;
  height: 100%;
}
#anchor {
  background-color: darkolivegreen;
  border: 1px solid black;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 4px 2px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  transition: all 1s ease;
  width: 10rem;

  &:hover {
    background-color: lightgreen;
    box-shadow: 0 6px 25px 0 rgba(0, 0, 0, 0.6);
    color: black;
  }
}
</style>
