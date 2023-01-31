"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_USER = exports.GET_ALL_USERS = void 0;
const graphql_1 = require("graphql");
const users_1 = require("../../entities/users");
const user_1 = require("../typeDefs/user");
exports.GET_ALL_USERS = {
    type: new graphql_1.GraphQLList(user_1.UserType),
    resolve: async () => {
        return await users_1.Users.find();
    },
};
exports.GET_USER = {
    type: user_1.UserType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve: async (_, { id }) => {
        return await users_1.Users.findOneBy({ id: id });
    },
};
//# sourceMappingURL=user.js.map