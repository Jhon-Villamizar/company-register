import * as yup from "yup";

export const schema = yup
	.object({
        id: yup.string(),
		name: yup.string().required(),
		serial: yup.string().required(),
        quantity: yup.number().required(),
	})
	.required();