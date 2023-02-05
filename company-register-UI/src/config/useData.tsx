import { useState } from "react"
import { Modal } from "./typesState"

const useData = () => {
	const [user, setUser] = useState<any>('')
	const [companyUser, setCompanyUser] = useState<any>(null)
	const [companies, setCompanies] = useState<any>(null)
	const [inventory, setInventory] = useState<any>(null)
	const [nit, setNit] = useState<any>(null)
	const [actions, setActions] = useState<boolean>(false)
	const [modal, setModal] = useState<Modal>({active: false, from: '', id: '', item: null})
	const updateUser = (newUser: any) => setUser(newUser)
	const updateCompanyUser = (newCompanyUser: any) => setCompanyUser(newCompanyUser)
	const updateCompanies = (newCompanies: any) => setCompanies(newCompanies)
	const updateInventory = (newInventory: any) => setInventory(newInventory)
	const updateNit = (newNit: any) => setNit(newNit)
	const updateActions = (newActions: boolean) => setActions(newActions)
	const updateModal = (newModal: Modal) => setModal(newModal)

	return [
		user,
		updateUser,
		companyUser,
		updateCompanyUser,
		companies,
		updateCompanies,
		inventory,
		updateInventory,
		nit,
		updateNit,
		actions,
		updateActions,
		modal,
		updateModal
	]
}

export default useData;