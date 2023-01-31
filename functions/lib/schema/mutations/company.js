"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_COMPANY = exports.UPDATE_COMPANY = exports.CREATE_COMPANY = void 0;
const graphql_1 = require("graphql");
const message_1 = require("../typeDefs/message");
const companies_1 = require("../../entities/companies");
exports.CREATE_COMPANY = {
    type: message_1.MessageType,
    args: {
        nit: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, args) => {
        const { name, address, nit, phone, userId } = args;
        const result = await companies_1.Companies.insert({
            nit: nit,
            name: name,
            address: address,
            phone: phone,
            userId: userId,
        });
        if (result) {
            return {
                success: true,
                message: "Company created successfully",
            };
        }
        return {
            success: false,
            message: "Error creating company",
        };
    },
};
exports.UPDATE_COMPANY = {
    type: message_1.MessageType,
    args: {
        nit: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { nit, name, address, phone, userId }) => {
        const company = await companies_1.Companies.findOneBy({ nit: nit });
        if (company) {
            await companies_1.Companies.update({ nit: nit }, { name: name, address: address, phone: phone, userId: userId });
            return {
                success: true,
                message: "Comapny updated successfully",
            };
        }
        return {
            success: false,
            message: "Error updating comapny, id not found",
        };
    },
};
exports.DELETE_COMPANY = {
    type: message_1.MessageType,
    args: {
        nit: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { nit }) => {
        const result = await companies_1.Companies.delete({ nit: nit });
        if (result.affected === 1) {
            return {
                success: true,
                message: "Company deleted successfully",
            };
        }
        return {
            success: false,
            message: "Error deleting comapny, id not found",
        };
    },
};
//# sourceMappingURL=company.js.map