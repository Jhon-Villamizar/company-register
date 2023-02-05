import { gql } from "@apollo/client";

export const FIND_COMPANY = gql`
  query findCompanyByUser
  (
	  $userId: ID!
  ){
		getCompanyByUserId
    (
      id: $userId
    ){
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

export const CREATE_COMPANY = gql`
	mutation newCompany
  (
    $nit: String!,
    $name: String!,
    $address: String!,
    $phone: String!,
    $userId: ID!,
  ){
		createCompany
    (
      nit: $nit,
      name: $name,
      address: $address,
      phone: $phone,
      userId: $userId
    ){
			success,
			message
		}
	}
`;

export const UPDATE_COMPANY = gql`
	mutation changeCompany
  (
    $nit: String!,
    $name: String!,
    $address: String!,
    $phone: String!,
    $userId: ID!,
  ){
		updateCompany
    (
      nit: $nit,
      name: $name,
      address: $address,
      phone: $phone,
      userId: $userId
    ){
			success,
			message
		}
	}
`;

export const DELETE_COMPANY = gql`
  mutation dropCompany
  (
    $nit: ID!
  ){
    deleteCompany(
      nit: $nit
    ){
      success,
      message
    }
  }
`;