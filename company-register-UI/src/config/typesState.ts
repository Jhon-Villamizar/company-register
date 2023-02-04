export type MyContextType = {
	userId: string,
	updateUser: (newUser: string) => void,
	companyUser: any,
	updateCompanyUser: (newCompanyUser: any) => void
	companies: any,
	updateCompanies: (newCompanies: any) => void
	inventory: any,
	updateInventory: (newInventory: any) => void
	nit: any,
	updateNit: (newNit: any) => void
	actions: boolean,
	updateActions: (newActions: boolean) => void
	modal: Modal,
	updateModal: (newModal: Modal) => void
}

export type Modal = {
	active: boolean,
	companyNit: string
} | null