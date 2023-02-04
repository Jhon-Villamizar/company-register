import {
  createBrowserRouter
} from "react-router-dom";
import Company from '../pages/company';
import Dashboard from '../pages/dashboard';
import Inventory from '../pages/ineventory';
import Login from '../components/login'
import Action from "../components/modal";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "dashboard",
		element: <Dashboard />,
	},
	{
		path: "company",
		element: <Company />,
	},
	{
		path: "inventory",
		element: <Inventory />,
	},
	{
		path: "action",
		element: <Action />,
	},

]);

export default Router