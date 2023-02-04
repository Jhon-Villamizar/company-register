"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_COMPANY_BY_USER_ID = exports.GET_COMPANY = exports.GET_ALL_COMPANIES = void 0;
const graphql_1 = require("graphql");
const companies_1 = require("../../entities/companies");
const company_1 = require("../typeDefs/company");
exports.GET_ALL_COMPANIES = {
    type: new graphql_1.GraphQLList(company_1.CompanyType),
    resolve: async () => {
        return await companies_1.Companies.find();
    },
};
exports.GET_COMPANY = {
    type: company_1.CompanyType,
    args: {
        nit: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { nit }) => {
        return await companies_1.Companies.findOneBy({ nit: nit });
    },
};
exports.GET_COMPANY_BY_USER_ID = {
    type: new graphql_1.GraphQLList(company_1.CompanyType),
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id }) => {
        return await companies_1.Companies.find({ where: { userId: id } });
    },
};
//# sourceMappingURL=company.js.map