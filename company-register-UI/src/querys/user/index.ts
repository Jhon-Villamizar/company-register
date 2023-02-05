import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query{
    getAllUsers {
			id
			name
			email
			password
		}
  }
`;

export const GET_USER_BY_EMAIL = gql`
query findUserByEmail
(
	$email: String!
){
    getUserByEmail
	(
		email: $email
	){
			id
			name
			email
			password
		}
  }
`;

export const CREATE_USER = gql`
	mutation newUser
	(
		$name: String!,
		$email: String!,
		$password: String!
	){
		createUser(
			name: $name
			email: $email
			password: $password
		) {
				success,
				message
			}
  }
`;