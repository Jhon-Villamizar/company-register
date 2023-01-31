import {GraphQLID, GraphQLString} from "graphql";
import bcrypt from "bcryptjs";
import {Users} from "../../entities/users";
import {MessageType} from "../typeDefs/message";

export const CREATE_USER = {
  type: MessageType,
  args: {
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  resolve: async (_: any, args: any) => {
    const {name, email, password} = args;
    const encryptPassword = await bcrypt.hash(password, 10);
    const result = await Users.insert({
      name: name,
      email: email,
      password: encryptPassword,
    });
    if (result) {
      return {
        success: true,
        message: "User created successfully",
      };
    }
    return {
      success: false,
      message: "Error creating user, id not found",
    };
  },
};

export const UPDATE_USER = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
  },
  resolve: async (_: any, {id, name, email, password}: any) => {
    const user = await Users.findOneBy({id: id});
    if (user) {
      const encryptPassword = await bcrypt.hash(password, 10);
      await Users.update({id: id}, {name: name, email: email, password: encryptPassword});
      return {
        success: true,
        message: "User updated successfully",
      };
    }
    return {
      success: false,
      message: "Error updating user, id not found",
    };
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: {type: GraphQLID},
  },
  resolve: async (_: any, {id}: any) => {
    const result = await Users.delete({id: id});
    if (result.affected === 1) {
      return {
        success: true,
        message: "User deleted successfully",
      };
    }
    return {
      success: false,
      message: "Error deleting user, id not found",
    };
  },
};
