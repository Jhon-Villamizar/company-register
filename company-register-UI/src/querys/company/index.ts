import { gql } from "@apollo/client";

export const FIND_COMPANY = gql`
  query findCompanyByUser($userId: ID!){
		getCompanyByUserId(id: $userId){
			nit
			name
			phone
			address
		}
	}
`;

export const ALL_COMPANIES = gql`
	query{
		getAllCompanies {
			nit
			name
			address
			phone
			userId
		}
	}
`;