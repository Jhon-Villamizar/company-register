export type MyContextType = {
	logged: boolean,
	changeLogged: (newLogged: boolean) => void,
	userId: string,
	uploadUser: (newUser: string) => void,
	company: any,
	uploadCompany: (newCompany: any) => void
}