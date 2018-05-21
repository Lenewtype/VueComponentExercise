<template>
    <li class="list-group-item" @click="selectServer">
    	Server #{{server.id}}
    </li>

</template>

<script>
	import {messageBus} from '../../main';
	export default {
		props: ['server'],
		methods: {
			changeStatus() {
				this.status = 'Normal';
				messageBus.changeStatus(this.status);
			},
			selectServer() {
				messageBus.$emit('serverSelected', this.server);
			}
		}
	}
</script>

<style>

</style>