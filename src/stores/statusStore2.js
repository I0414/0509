import { defineStore } from 'pinia'
import emitter from '@/methods/emitter'

export default defineStore('statusStore2', {
  state: () => ({
    isLoading: false,
    loadingItem: '',
    messages: []
  }),
  actions: {
    addMessage(response, title = '更新', content = null, successCallback = null) {
      if (response.data.success) {
        this.pushMessage({
          style: 'success',
          title: `${title}成功`,
          content: content || response.data.message || `${title}成功`
        })
        if (successCallback && typeof successCallback === 'function') {
          successCallback() // 执行成功响应时的回调函数
        }
      } else {
        const message =
          typeof response.data.message === 'string'
            ? [response.data.message]
            : response.data.message
        this.pushMessage({
          style: 'danger',
          title: `${title}失敗`,
          content: message.join('、')
        })
      }
    },
    pushMessage(data) {
      const { title, content, style } = data
      this.messages.push({ style, title, content })
      emitter.emit('push-message', { style, title, content }) // 將消息推送給 ToastMessages.vue
    }
  }
})
