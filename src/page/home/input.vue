<template>
  <div class="zpfe-iview-input" :className="className">
     <IViewInput
     v-model="selfValue"
     :type="type"
     :rows="rows"
     :placeholder="placeholder">
     </IViewInput>
  </div>
</template>

<script>
import IViewInput from 'iview/src/components/input'
export default {
  props: {
    placeholder: { default: '' },
    value: { default: undefined },
    type: { default: undefined },
    rows: { default: undefined },
    className: { default: '' }
  },
  data() {
    return { selfValue: '' }
  },
  watch: {
    value(newValue) {
      this.$data.selfValue = newValue
    },
    selfValue(newValue) {
      this.$emit('input', newValue)
    }
  },
  components: {
    IViewInput
  },
  methods: {

  }
}
</script>
<style lang="less">
.zpfe-iview-input {
}
</style>
