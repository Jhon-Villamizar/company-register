import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

export const CompanyType = new GraphQLObjectType({
  name: "company",
  fields: {
    nit: {type: GraphQLString},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    phone: {type: GraphQLString},
    userId: {type: GraphQLID},
  },
});
