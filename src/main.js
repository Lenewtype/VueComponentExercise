import Vue from 'vue'
import App from './App.vue'

export const messageBus = new Vue({
	methods: {
		changeStatus(status) {
			this.$emit('statusChange', status);
		},
		selectServer(serverId) {
			this.$emit('serverSelected', serverId);
		}
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
