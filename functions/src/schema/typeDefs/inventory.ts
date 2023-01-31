import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

export const InventoryType = new GraphQLObjectType({
  name: "inventory",
  fields: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    serial: {type: GraphQLString},
    quantity: {type: GraphQLString},
    companyNit: {type: GraphQLID},
  },
});
