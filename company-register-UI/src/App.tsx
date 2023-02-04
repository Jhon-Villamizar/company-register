import {
  RouterProvider,
} from "react-router-dom";
import { AdminProvider } from "./config/context";
import Router from './routes'
import useData from './config/useData'
import './App.scss'

function App() {
  const [
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
  ] = useData()

  return (
    <AdminProvider value={{
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
    }}>
        <RouterProvider router={Router} />
    </AdminProvider>
  )
}

export default App
