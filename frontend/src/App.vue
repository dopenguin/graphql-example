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
$btn-color-bright: #d1a860;
$btn-color-dark: #9e6809;

body,
html {
  height: 99%;
}
body {
  background: linear-gradient(120deg, #cde099, #7c9e1c);
}
.grid {
  display: grid;
  place-items: center;
  height: 100%;

  #anchor {
    background: linear-gradient(to right, $btn-color-dark, $btn-color-bright);
    background-size: 150%;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin: 4px 2px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    transition-property: background-position, box-shadow;
    transition-duration: 1s;
    transition-timing-function: ease;
    width: 10rem;

    &:hover {
      background-position: right;
      box-shadow: 0 6px 25px 0 rgba(0, 0, 0, 0.6);
    }
  }
}
</style>
