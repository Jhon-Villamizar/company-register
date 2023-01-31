import {GraphQLID, GraphQLList} from "graphql";
import {Inventories} from "../../entities/inventories";
import {InventoryType} from "../typeDefs/inventory";

export const GET_ALL_INVENTORIES = {
  type: new GraphQLList(InventoryType),
  resolve: async () => {
    return await Inventories.find();
  },
};

export const GET_INVENTORY = {
  type: InventoryType,
  args: {
    id: {type: GraphQLID},
  },
  resolve: async (_: any, {id}: any) =>{
    return await Inventories.findOneBy({id: id});
  },
};
