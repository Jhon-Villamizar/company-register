"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_INVENTORY_BY_COMPANY_NIT = exports.GET_INVENTORY = exports.GET_ALL_INVENTORIES = void 0;
const graphql_1 = require("graphql");
const inventories_1 = require("../../entities/inventories");
const inventory_1 = require("../typeDefs/inventory");
exports.GET_ALL_INVENTORIES = {
    type: new graphql_1.GraphQLList(inventory_1.InventoryType),
    resolve: async () => {
        return await inventories_1.Inventories.find();
    },
};
exports.GET_INVENTORY = {
    type: inventory_1.InventoryType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id }) => {
        return await inventories_1.Inventories.findOneBy({ id: id });
    },
};
exports.GET_INVENTORY_BY_COMPANY_NIT = {
    type: new graphql_1.GraphQLList(inventory_1.InventoryType),
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id }) => {
        return await inventories_1.Inventories.find({ where: { companyNit: id } });
    },
};
//# sourceMappingURL=inventory.js.map