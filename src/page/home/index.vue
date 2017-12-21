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
    <input type="file" name="image" accept="image/*"
                    style="font-size: 1.2em; padding: 10px 0;"
                    @change="setImage"
                />
  <Cropper :imgSrc="imgSrc" ref="cropper"/>
  <button style="font-size:30px;font-weight:bold;" @click="testRef"> test ref </button>
  <img :src="croppedSrc" alt="croppedSrc">

    </div>
</template>

<script>
import './iview-polyfill'
import Item from '../item'
import Page from './page'
import Modal from './modal'
import Cropper from './cropper'
export default {
  name: 'home',
  data() {
    return {
      showModal: false,
      imgSrc: null,
      croppedSrc: null,
      x: '22'
    }
  },
  components: {
    Item,
    Page,
    Modal,
    Cropper
  },
  created() {

  },
  methods: {
    setImage(e) {
      let file
      //在IE9下 没有e.target.files属性,而是 e.target.value 属性直接拿到了本地真实文件路径字符串
      if (!e.target.files && e.target.value) {
        // 走上传逻辑
      } else {
        file = e.target.files[0];
        if (!file.type.includes('image/')) {
          alert('请选择图片文件')
          return;
        }
        if (typeof FileReader === 'function') {
          const reader = new FileReader()
          reader.onload = (event) => {
            this.imgSrc = event.target.result
            this.$refs.cropper.$on('on-img-load', (base64) => {
              this.croppedSrc = base64
            })
          };

          reader.readAsDataURL(file)

        } else {
          console.error('Sorry, FileReader API not supported')
        }
      }
    },
    testRef() {
      debugger
      this.croppedSrc = this.$refs.cropper.getImgBase64()
    },
    myPageChange() {
      console.log('myPageChange', arguments)
    },
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
  border: 5px solid red;
}
</style>
