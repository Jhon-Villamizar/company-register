import { useState } from "react"

const useData = () => {
	const [logged, setLogged] = useState<boolean>(false)
	const [userId, setUserId] = useState<string>('')
	const [company, setCompany] = useState<any>(null)
	const changeLogged = (newLogged: boolean) => setLogged(newLogged)
	const uploadUser = (newUser: string) => setUserId(newUser)
	const uploadCompany = (newCompany: any) => setCompany(newCompany)

	return [
		logged,
		changeLogged,
		userId,
		uploadUser,
		company,
		uploadCompany,
	]
}

export default useData;
