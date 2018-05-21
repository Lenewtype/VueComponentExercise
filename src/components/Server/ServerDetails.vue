<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a server</p>
        <p v-else>Server #{{server.id}} selected. Status: 
        	<span :class="getStatusClass(server.status)">{{server.status}}</span>
        	<br/>
        	<button @click="resetStatus" class="btn btn-danger" v-if="server.status != 'Normal' ">Return to Normal</button>
    	</p>
    </div>

</template>

<script>

	import {messageBus} from '../../main';

	export default {
		data: function() {
			return {
				server: null
			}
		},
		methods: {
			getStatusClass: function (status) {
				switch(status) {
					case 'Unknown':
						return 'text-warning';
						break;
					case 'Critical':
						return 'text-danger';
						break;
					default:
						return 'text-success';
						break;
				}
			},
			resetStatus() {
				//since this is an object, updating it here changes the same reference in memory that the other components use
				this.server.status = 'Normal';
			}
		},
		created() {
			messageBus.$on('serverSelected', 
				(server) => 
					this.server = server
			);
		}
	}
</script>

<style>

</style>
