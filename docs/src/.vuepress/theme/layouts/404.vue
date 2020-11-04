<template>
  <div class="theme-container">
    <div class="theme-default-content centered">
      <h1>404 page not found</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      

      <RouterLink to="/">
        <h3>Take me home</h3>
      </RouterLink>
      <br />
      <h3>Redirecting in {{counter}}s....</h3>
    </div>
  </div>
</template>

<script>
const msgs = [
  `Looks like we've got some broken links.`
]

export default {
  data () {
    return {
      counter: 3
    }
  },
  mounted() {
    this.countDown()
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
    countDown() {
      if(this.counter >0) {
        setTimeout(()=>{
          this.counter--
          this.countDown()
        }, 1000)
      }
      if(this.counter === 0 ){
        window.location.href="http://bashpound.github.io"
      }
    }
  }
}
</script>


<style scoped>

.centered  {
  margin: auto;
}

</style>