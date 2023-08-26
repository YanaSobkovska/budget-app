<template>
	<div class="budget-list-wrap">
		<ElCard :header="header">
			<div class="button-filter">
				<ElButton @click="selectedCategory('all')" size="mini" type="success"
					>All</ElButton
				>
				<ElButton @click="selectedCategory('INCOME')" size="mini" type="primary"
					>Income</ElButton
				>
				<ElButton @click="selectedCategory('OUTCOME')" size="mini" type="danger"
					>Outcome</ElButton
				>
			</div>
			<template v-if="isEmpty">
				<div class="list-item" v-for="item in filteredList" :key="item.id">
					<span class="budget-comment">{{ item.comment }}:</span>
					<span :class="defineColorValue(item.value)" class="budget-value"
						><i class="icon" :class="defineIconType(item.value)"></i>
						{{ item.value }}</span
					>
					<ElButton
						@click="openDialog(item)"
						type="danger"
						icon="el-icon-delete"
						circle
					></ElButton>
				</div>
			</template>
			<el-alert :closable="false" v-else :title="title" type="info" show-icon />
		</ElCard>
		<DeleteItem v-model="dialogVisible" :delete-obj="deleteObj" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import DeleteItem from "@/components/Deleteitem.vue";

export default {
	name: "BudgetList",
	components: {
		DeleteItem,
	},
	data() {
		return {
			header: "Budget",
			title: "you don't have a budget yet",
			dialogVisible: false,
			deleteObj: {},
			selectedOrder: "all",
		};
	},
	computed: {
		...mapState(["list"]),
		isEmpty() {
			return this.list.length > 0;
		},
		filteredList() {
			if (this.selectedOrder === "all") {
				return this.list;
			} else {
				return this.list.filter((item) => item.type === this.selectedOrder);
			}
		},
	},
	methods: {
		openDialog(item) {
			this.dialogVisible = true;
			this.deleteObj = item;
		},
		selectedCategory(value) {
			this.selectedOrder = value;
		},
		defineIconType(value) {
			if (value > 0) {
				return "el-icon-top";
			} else {
				return "el-icon-bottom";
			}
		},
		defineColorValue(value) {
			if (value > 0) {
				return "blue";
			} else {
				return "red";
			}
		},
	},
};
</script>

<style scoped>
.budget-list-wrap {
	max-width: 500px;
	margin: auto;
}
.button-filter {
	padding-bottom: 20px;
}
.list-item {
	display: flex;
	align-items: center;
	border: 1px solid rgb(201, 193, 193);
	padding: 10px;
	margin: 10px;
}
.budget-comment {
	font-size: 16px;
	font-weight: 600;
}
.budget-value {
	margin-right: 20px;
	margin-left: auto;
}
.icon {
	padding: 10px;
}
</style>
