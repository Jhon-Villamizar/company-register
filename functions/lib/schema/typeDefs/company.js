"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyType = void 0;
const graphql_1 = require("graphql");
exports.CompanyType = new graphql_1.GraphQLObjectType({
    name: "company",
    fields: {
        nit: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLID },
    },
});
//# sourceMappingURL=company.js.map