import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "user",
  fields: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
  },
});
