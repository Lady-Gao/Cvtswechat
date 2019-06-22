<template>
  <div>
    <p class="card">ee
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  mounted () {
    console.log(this.test)
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
