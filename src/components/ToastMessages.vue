<template>
  <div class="toast-container position-fixed pe-3 top-25 end-0" style="z-index: 1050">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/ToastView.vue';

export default {
  components: { Toast },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style, title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
