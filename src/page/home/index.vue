<template>
  	<div class="home_container">
       1111122
       <div></div>
       <!--
       <vueCropper
		ref="cropper3"
		:img="example3.img"
		:autoCrop="example3.autoCrop"
		:autoCropWidth="example3.autoCropWidth"
		:autoCropHeight="example3.autoCropHeight"
		:fixedBox="example3.fixedBox"
	></vueCropper>
  -->
  x:{{x}}
  <input v-model="x"/>
  <item :value="x" @abc="abc"></item>
    </div>
</template>

<script>
import Item from '../item'
export default {
  name: 'home',
  data() {
    return {
      x: '22'
    }
  },
  components: {
    Item
  },
  created() {

  },
  methods: {
    abc() {
      alert(111)
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 1000px;
  width: 1000px;
  border: 1px solid red;
}
</style>
