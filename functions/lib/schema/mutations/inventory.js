"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_INVENTORY = exports.UPDATE_INVENTORY = exports.CREATE_INVENTORY = void 0;
const graphql_1 = require("graphql");
const message_1 = require("../typeDefs/message");
const inventories_1 = require("../../entities/inventories");
exports.CREATE_INVENTORY = {
    type: message_1.MessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        serial: { type: graphql_1.GraphQLString },
        quantity: { type: graphql_1.GraphQLString },
        companyNit: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, args) => {
        const { name, serial, quantity, companyNit } = args;
        const result = await inventories_1.Inventories.insert({
            name: name,
            serial: serial,
            quantity: quantity,
            companyNit: companyNit,
        });
        if (result) {
            return {
                success: true,
                message: "Inventory created successfully",
            };
        }
        return {
            success: false,
            message: "Error creating inventory",
        };
    },
};
exports.UPDATE_INVENTORY = {
    type: message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        serial: { type: graphql_1.GraphQLString },
        quantity: { type: graphql_1.GraphQLString },
        companyNit: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id, name, serial, quantity, companyNit }) => {
        const inventory = await inventories_1.Inventories.findOneBy({ id: id });
        if (inventory) {
            await inventories_1.Inventories.update({ id: id }, { name: name, serial: serial, quantity: quantity, companyNit: companyNit });
            return {
                success: true,
                message: "Inventory updated successfully",
            };
        }
        return {
            success: false,
            message: "Error updating inventory, id not found",
        };
    },
};
exports.DELETE_INVENTORY = {
    type: message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id }) => {
        const result = await inventories_1.Inventories.delete({ id: id });
        if (result.affected === 1) {
            return {
                success: true,
                message: "Inventory deleted successfully",
            };
        }
        return {
            success: false,
            message: "Error deleting inventory, id not found",
        };
    },
};
//# sourceMappingURL=inventory.js.map