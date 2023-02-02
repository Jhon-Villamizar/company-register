import {GraphQLSchema, GraphQLObjectType} from "graphql";
import {CREATE_COMPANY, DELETE_COMPANY, UPDATE_COMPANY} from "./mutations/company";
import {CREATE_INVENTORY, DELETE_INVENTORY, UPDATE_INVENTORY} from "./mutations/inventory";
import {CREATE_USER, DELETE_USER, UPDATE_USER} from "./mutations/user";
import {GET_ALL_COMPANIES, GET_COMPANY, GET_COMPANY_BY_USER_ID} from "./queries/company";
import {GET_ALL_INVENTORIES, GET_INVENTORY} from "./queries/inventory";
import {GET_ALL_USERS, GET_USER} from "./queries/user";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    getAllCompanies: GET_ALL_COMPANIES,
    getCompany: GET_COMPANY,
    getAllInventories: GET_ALL_INVENTORIES,
    getInventory: GET_INVENTORY,
    getCompanyByUserId: GET_COMPANY_BY_USER_ID
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    updateUser: UPDATE_USER,
    deleteUser: DELETE_USER,
    createCompany: CREATE_COMPANY,
    updateCompany: UPDATE_COMPANY,
    deleteCompany: DELETE_COMPANY,
    createInventory: CREATE_INVENTORY,
    updateInventory: UPDATE_INVENTORY,
    deleteInventory: DELETE_INVENTORY,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
