import { gql } from "@apollo/client";

export const FIND_INVENTORIES_BY_COMPANY = gql`
	query findInventoryByCompany
	(
		$companyNit: ID!
	){
		getInventoryByCompanyNit
		(
			id: $companyNit
		){
			id
			name
			serial
			quantity
			companyNit
		}
	}
`;

export const CREATE_INVENTORY = gql`
	mutation newInventory
	(
		$name: String!,
		$serial: String!,
		$quantity: String!,
		$companyNit: ID!
	){
		createInventory
		(
			name: $name,
			serial: $serial,
			quantity: $quantity,
			companyNit: $companyNit
		){
			success,
			message
		}
	}
`;

export const UPDATE_INVENTORY = gql`
	mutation changeInventory
	(
		$id: ID!,
		$name: String!,
		$serial: String!,
		$quantity: String!,
		$companyNit: ID!
	){
		updateInventory
		(
			id: $id,
			name: $name,
			serial: $serial,
			quantity: $quantity,
			companyNit: $companyNit
		){
			success,
			message
		}
	}
`;

export const DELETE_INVENTORY = gql`
  mutation dropInventory
  (
    $id: ID!
  ){
    deleteInventory(
      id: $id
    ){
      success,
      message
    }
  }
`;