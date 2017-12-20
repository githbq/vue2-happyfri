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
  <Page @on-change="myPageChange" :total="100">
  </Page>
    </div>
</template>

<script>
import Item from '../item'
import Page from './page'
import 'iview/dist/styles/iview.css'
export default {
  name: 'home',
  data() {
    return {
      x: '22'
    }
  },
  components: {
    Item,
    Page
  },
  created() {

  },
  methods: {
    myPageChange() {
      console.log('myPageChange', arguments)
    },
    abc() {
      alert(111)
    }
  }
}
</script>
<style lang="less">
@import "./iview-rewrite.less";
</style>

<style lang="less" scoped>
.home_container {
  height: 1000px;
  width: 1000px;
  border: 5px solid red;
}
</style>
