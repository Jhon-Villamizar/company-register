import * as yup from "yup";

export const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required().min(8),
	})
	.required();