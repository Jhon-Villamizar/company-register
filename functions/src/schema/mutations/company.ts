import {GraphQLID, GraphQLString} from "graphql";
import {MessageType} from "../typeDefs/message";
import {Companies} from "../../entities/companies";

export const CREATE_COMPANY = {
  type: MessageType,
  args: {
    nit: {type: GraphQLString},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    phone: {type: GraphQLString},
    userId: {type: GraphQLID},
  },
  resolve: async (_: any, args: any) => {
    const {name, address, nit, phone, userId} = args;
    const result = await Companies.insert({
      nit: nit,
      name: name,
      address: address,
      phone: phone,
      userId: userId,
    });
    if (result) {
      return {
        success: true,
        message: "Company created successfully",
      };
    }
    return {
      success: false,
      message: "Error creating company",
    };
  },
};

export const UPDATE_COMPANY = {
  type: MessageType,
  args: {
    nit: {type: GraphQLString},
    name: {type: GraphQLString},
    address: {type: GraphQLString},
    phone: {type: GraphQLString},
    userId: {type: GraphQLID},
  },
  resolve: async (_: any, {nit, name, address, phone, userId}: any) => {
    const company = await Companies.findOneBy({nit: nit});
    if (company) {
      await Companies.update({nit: nit}, {name: name, address: address, phone: phone, userId: userId});
      return {
        success: true,
        message: "Comapny updated successfully",
      };
    }
    return {
      success: false,
      message: "Error updating comapny, id not found",
    };
  },
};

export const DELETE_COMPANY = {
  type: MessageType,
  args: {
    nit: {type: GraphQLID},
  },
  resolve: async (_: any, {nit}: any) => {
    const result = await Companies.delete({nit: nit});
    if (result.affected === 1) {
      return {
        success: true,
        message: "Company deleted successfully",
      };
    }
    return {
      success: false,
      message: "Error deleting comapny, id not found",
    };
  },
};
