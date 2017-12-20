<template>
  	<div>
      I am item {{x}}
      <input v-model="x"/>
      <button @click="clickMe">11111</button>
    </div>
</template>

<script>
export default {
  name: 'item',
  props: ['value'],
  data() {
    return {
      a: 1,
      x: this.$props.value
    }
  },
  watch: {
    value(newValue) {
      this.x = newValue
    }
  },
  components: {
  },
  methods: {
    clickMe() {
      debugger
      this.$emit('abc','abcefg')
    }
  }

}

</script>

<style lang="less">

</style>
