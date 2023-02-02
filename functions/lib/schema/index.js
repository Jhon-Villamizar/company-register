"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const company_1 = require("./mutations/company");
const inventory_1 = require("./mutations/inventory");
const user_1 = require("./mutations/user");
const company_2 = require("./queries/company");
const inventory_2 = require("./queries/inventory");
const user_2 = require("./queries/user");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: user_2.GET_ALL_USERS,
        getUser: user_2.GET_USER,
        getAllCompanies: company_2.GET_ALL_COMPANIES,
        getCompany: company_2.GET_COMPANY,
        getAllInventories: inventory_2.GET_ALL_INVENTORIES,
        getInventory: inventory_2.GET_INVENTORY,
        getCompanyByUserId: company_2.GET_COMPANY_BY_USER_ID,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: user_1.CREATE_USER,
        updateUser: user_1.UPDATE_USER,
        deleteUser: user_1.DELETE_USER,
        createCompany: company_1.CREATE_COMPANY,
        updateCompany: company_1.UPDATE_COMPANY,
        deleteCompany: company_1.DELETE_COMPANY,
        createInventory: inventory_1.CREATE_INVENTORY,
        updateInventory: inventory_1.UPDATE_INVENTORY,
        deleteInventory: inventory_1.DELETE_INVENTORY,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
//# sourceMappingURL=index.js.map