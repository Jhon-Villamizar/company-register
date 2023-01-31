import {GraphQLID, GraphQLList} from "graphql";
import {Users} from "../../entities/users";
import {UserType} from "../typeDefs/user";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    return await Users.find();
  },
};

export const GET_USER = {
  type: UserType,
  args: {
    id: {type: GraphQLID},
  },
  resolve: async (_: any, {id}: any) =>{
    return await Users.findOneBy({id: id});
  },
};
