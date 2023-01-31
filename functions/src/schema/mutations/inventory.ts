import {GraphQLID, GraphQLString} from "graphql";
import {MessageType} from "../typeDefs/message";
import {Inventories} from "../../entities/inventories";

export const CREATE_INVENTORY = {
  type: MessageType,
  args: {
    name: {type: GraphQLString},
    serial: {type: GraphQLString},
    quantity: {type: GraphQLString},
    companyNit: {type: GraphQLID},
  },
  resolve: async (_: any, args: any) => {
    const {name, serial, quantity, companyNit} = args;
    const result = await Inventories.insert({
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

export const UPDATE_INVENTORY = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    serial: {type: GraphQLString},
    quantity: {type: GraphQLString},
    companyNit: {type: GraphQLID},
  },
  resolve: async (_: any, {id, name, serial, quantity, companyNit}: any) => {
    const inventory = await Inventories.findOneBy({id: id});
    if (inventory) {
      await Inventories.update({id: id}, {name: name, serial: serial, quantity: quantity, companyNit: companyNit});
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

export const DELETE_INVENTORY = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
  },
  resolve: async (_: any, {id}: any) => {
    const result = await Inventories.delete({id: id});
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
