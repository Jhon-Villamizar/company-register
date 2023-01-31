"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryType = void 0;
const graphql_1 = require("graphql");
exports.InventoryType = new graphql_1.GraphQLObjectType({
    name: "inventory",
    fields: {
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        serial: { type: graphql_1.GraphQLString },
        quantity: { type: graphql_1.GraphQLString },
        companyNit: { type: graphql_1.GraphQLID },
    },
});
//# sourceMappingURL=inventory.js.map