import { useState } from "react"

const useData = () => {
	const [logged, setLogged] = useState<boolean>(false)
	const [userId, setUserId] = useState<string>('')
	const [company, setCompany] = useState<any>(null)
	const [companies, setCompanies] = useState<any>(null)
	const [inventory, setInventory] = useState<any>(null)
	const changeLogged = (newLogged: boolean) => setLogged(newLogged)
	const updateUser = (newUser: string) => setUserId(newUser)
	const updateCompany = (newCompany: any) => setCompany(newCompany)
	const updateCompanies = (newCompanies: any) => setCompanies(newCompanies)
	const updateInventory = (newInventory: any) => setInventory(newInventory)

	return [
		logged,
		changeLogged,
		userId,
		updateUser,
		company,
		updateCompany,
		companies,
		updateCompanies,
		inventory,
		updateInventory
	]
}

export default useData;
