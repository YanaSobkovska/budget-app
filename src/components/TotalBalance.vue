<template>
	<h2 :class="setColorBalance">Balance:{{ getTotalBalance }}</h2>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "TotalBalance",
	data() {
		return {
			totalBalance: 0,
		};
	},
	computed: {
		...mapState(["list"]),
		getTotalBalance() {
			return (this.totalBalance = this.list.reduce(
				(acc, item) => acc + item.value,
				0
			));
		},
		setColorBalance() {
			if (this.totalBalance > 0) {
				return "blue";
			} else if (this.totalBalance < 0) {
				return "red";
			} else {
				return "grey";
			}
		},
	},
};
</script>

<style>
h2 {
	transition: 0.3s;
	text-shadow: 1px 3px rgba(0, 0, 0, 0.346);
}
.blue {
	color: rgb(57, 125, 243);
}

.grey {
	color: rgb(108, 105, 105);
}

.red {
	color: red;
}
</style>
