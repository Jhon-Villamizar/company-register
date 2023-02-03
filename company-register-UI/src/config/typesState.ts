export type MyContextType = {
	logged: boolean,
	changeLogged: (newLogged: boolean) => void,
	userId: string,
	updateUser: (newUser: string) => void,
	company: any,
	updateCompany: (newCompany: any) => void
	companies: any,
	updateCompanies: (newCompanies: any) => void
	inventory: any,
	updateInventory: (newInventory: any) => void
}