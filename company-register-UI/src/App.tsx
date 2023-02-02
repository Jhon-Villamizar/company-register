import {
  RouterProvider,
} from "react-router-dom";
import { AdminProvider } from "./config/context";
import Router from './routes'
import useData from './config/useData'
import './App.scss'

function App() {
  const [logged, changeLogged, userId, uploadUser, company, uploadCompany] = useData()

  return (
    <AdminProvider value={{logged, changeLogged, userId, uploadUser, company, uploadCompany}}>
        <RouterProvider router={Router} />
    </AdminProvider>
  )
}

export default App
