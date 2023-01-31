"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER = exports.UPDATE_USER = exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_1 = require("../../entities/users");
const message_1 = require("../typeDefs/message");
exports.CREATE_USER = {
    type: message_1.MessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve: async (_, args) => {
        const { name, email, password } = args;
        const encryptPassword = await bcryptjs_1.default.hash(password, 10);
        const result = await users_1.Users.insert({
            name: name,
            email: email,
            password: encryptPassword,
        });
        if (result) {
            return {
                success: true,
                message: "User created successfully",
            };
        }
        return {
            success: false,
            message: "Error creating user, id not found",
        };
    },
};
exports.UPDATE_USER = {
    type: message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve: async (_, { id, name, email, password }) => {
        const user = await users_1.Users.findOneBy({ id: id });
        if (user) {
            const encryptPassword = await bcryptjs_1.default.hash(password, 10);
            await users_1.Users.update({ id: id }, { name: name, email: email, password: encryptPassword });
            return {
                success: true,
                message: "User updated successfully",
            };
        }
        return {
            success: false,
            message: "Error updating user, id not found",
        };
    },
};
exports.DELETE_USER = {
    type: message_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id }) => {
        const result = await users_1.Users.delete({ id: id });
        if (result.affected === 1) {
            return {
                success: true,
                message: "User deleted successfully",
            };
        }
        return {
            success: false,
            message: "Error deleting user, id not found",
        };
    },
};
//# sourceMappingURL=user.js.map