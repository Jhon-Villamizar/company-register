import { gql } from "@apollo/client";

export const FIND_INVENTORIES_BY_COMPANY = gql`
	query findInventoryByCompany($companyNit: ID!){
		getInventoryByCompanyNit(id: $companyNit) {
			name
			serial
			quantity
			companyNit
		}
	}
`;

export const CREATE_INVENTORIES = gql`
	query addInventory($companyNit: String!, $name: String!, $serial: String!, $quantity: String!, $companyId: String!){
		createInventory(name: $name, serial: $serial, quantity: $quantity, companyId:  $companyId) {
			name
			serial
			quantity
			companyNit
		}
	}
`;