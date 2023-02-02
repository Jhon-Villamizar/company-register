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