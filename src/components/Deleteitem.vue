<template>
	<ElDialog
		title="Tips"
		v-model="localDialogVisible"
		:visible.sync="localDialogVisible"
		width="30%">
		<span>Are you sure you want to delete this comment?</span>
		<span slot="footer" class="dialog-footer">
			<el-button @click="localDialogVisible = false">No</el-button>
			<el-button type="primary" @click="deleteItem">Yes</el-button>
		</span>
	</ElDialog>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "DeleteTask",
	props: {
		value: Boolean,
		deleteObj: Object,
	},
	computed: {
		localDialogVisible: {
			get() {
				return this.value;
			},
			set(newValue) {
				this.$emit("input", newValue);
			},
		},
	},
	methods: {
		...mapMutations(["DELETE_ITEM"]),
		deleteItem() {
			this.DELETE_ITEM(this.deleteObj.id);
			this.localDialogVisible = false;
		},
	},
};
</script>
