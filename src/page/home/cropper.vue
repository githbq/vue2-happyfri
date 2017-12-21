<template>
  <div class="zpfe-cropper zpfe" :className="className">
        <vue-cropper
            ref="cropper"
            :guides="guides"
            :view-mode="viewMode"
            :drag-mode="dragMode"
            :auto-crop-area="autoCropArea"
            :min-container-width="minContainerWidth"
            :min-container-height="minContainerHeight"
            :background="background"
            :rotatable="rotatable"
            :src="imgSrc"
            :alt="alt"
            :img-style="imgStyle"
            >
        </vue-cropper>
</div>
</template>

<script>
import VueCropper from 'vue-cropperjs';
export default {
  props: {
    //是否显示选框虚线
    guides: { default: true },
    viewMode: { default: 2 },
    dragMode: { default: 'crop' },
    autoCropArea: { default: 0.5 },
    minContainerWidth: { default: 250 },
    minContainerHeight: { default: 180 },
    background: { default: true },
    rotatable: { default: true },
    //显示的图片base64 或远程服务器的url地址
    imgSrc: { default: undefined },
    //图片样式
    imgStyle: {
      default: () => { return { width: '400px', height: '500px' } }
    },
    className: { default: null },
    alt: { default: '源图片' }
  },
  components: {
    VueCropper
  },
  watch: {
    imgSrc(newValue) {
      if (newValue) {
        this.$refs.cropper.replace(newValue)
        this.$emit('on-img-load', this.getImgBase64())
      }
    }
  },
  methods: {
    getImgBase64() {
      return this.$refs.cropper.getCroppedCanvas().toDataURL()
    },
    rotate(deg = 90) {
      this.$refs.cropper.rotate(deg);
    }
  }
}
</script>
<style lang="less">

</style>
