import * as yup from "yup";

export const schema = yup
	.object({
		nit: yup.string().required(),
		name: yup.string().required(),
		address: yup.string().required(),
		phone: yup.string().required(),
	})
	.required();