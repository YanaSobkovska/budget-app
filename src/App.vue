<template>
	<div id="app">
		<h1 class="title">My Budget</h1>
		<FormApp />
		<TotalBalance />
		<BudgetList />
	</div>
</template>

<script>
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";
import FormApp from "@/components/Form.vue";

export default {
	components: {
		BudgetList,
		TotalBalance,
		FormApp,
	},
};
</script>

<style>
body {
	height: 100vh;

	background-repeat: no-repeat;
	background-size: cover;
}
#app {
	font-family: sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #6c6b6b;
	margin-top: 100px;
}

.title {
	text-transform: uppercase;
	text-shadow: 1px 3px rgba(0, 0, 0, 0.346);
}
</style>
