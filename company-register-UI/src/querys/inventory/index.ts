import { gql } from "@apollo/client";

export const FIND_INVENTORIES_BY_COMPANY = gql`
	query findInventoryByCompany($companyNit: ID!){
		getInventoryByCompanyNit(id: $companyNit) {
			name
			serial
			quantity
		}
	}
`;