<template>
  <transition name="sx-zoom-in-center">
    <div class="sx__tag" :class="'sx__tag--'+color">
      <span class="sx__tag--desc"><slot></slot></span>
      <i class="sx-icon-close2 sx__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'SxTag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
