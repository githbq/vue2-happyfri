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
  <Page @on-change="myPageChange" :total="100">
  </Page>
  <button @click="showModal=!showModal">toggle modal</button>
  <Modal v-model="showModal">
  <span>hello modal</span>
  </Modal>
    </div>
</template>

<script>
import Item from '../item'
import Page from './page'
import Modal from './modal'
import 'iview/dist/styles/iview.css'
export default {
  name: 'home',
  data() {
    return {
      showModal: false,
      x: '22'
    }
  },
  components: {
    Item,
    Page,
    Modal
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
