<template>
	<div class="form-container">
		<ElCard>
			<ElForm :model="formData" :rules="rules" ref="ruleForm">
				<ElFormItem label="Type" prop="type">
					<ElSelect
						class="type-select"
						v-model="formData.type"
						placeholder="Choose type..."
					>
						<ElOption label="Income" value="INCOME"></ElOption>
						<ElOption label="Outcome" value="OUTCOME"></ElOption>
					</ElSelect>
				</ElFormItem>
				<ElFormItem label="Comment" prop="comment">
					<ElInput
						v-model="formData.comment"
						placeholder="Comment...."
					></ElInput>
				</ElFormItem>
				<ElFormItem label="Value" prop="value">
					<ElInput
						v-model.number="formData.value"
						placeholder="Value..."
					></ElInput>
				</ElFormItem>
				<ElFormItem>
					<ElButton type="primary" @click="FormSubmit">Submit</ElButton>
				</ElFormItem>
			</ElForm>
		</ElCard>
	</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "FormApp",
	data() {
		return {
			formData: {
				type: "INCOME",
				comment: "",
				value: 0,
			},
			rules: {
				type: [{ required: true, message: "Please select", trigger: "blur" }],
				comment: [
					{
						required: true,
						message: "Please input comment",
						trigger: "change",
					},
				],
				value: [
					{
						required: true,
						message: "Please input value",
						trigger: "change",
					},
					{
						type: "number",
						required: true,
						message: "Please pick a time",
						trigger: "change",
					},
					{ validator: this.validateValue, trigger: "blur" },
				],
			},
		};
	},
	computed: {},
	methods: {
		...mapMutations(["ON_FORM_SUBMIT"]),
		validateValue(rule, value, callback) {
			if (value === 0) {
				callback(new Error("Value cannot be zero"));
			} else {
				callback();
			}
		},
		FormSubmit() {
			this.$refs.ruleForm.validate((valid) => {
				if (valid) {
					const newObj = {
						...this.formData,
						id: String(Math.random()),
					};
					if (newObj.type === "OUTCOME") {
						newObj.value *= -1;
					}
					this.ON_FORM_SUBMIT(newObj);
					this.$refs.ruleForm.resetFields();
				} else {
					return new Error();
				}
			});
		},
	},
};
</script>

<style scoped>
.form-container {
	max-width: 500px;
	margin: auto;
}
.type-select {
	width: 100%;
}
</style>
