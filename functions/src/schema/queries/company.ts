import {GraphQLID, GraphQLList} from "graphql";
import {Companies} from "../../entities/companies";
import {CompanyType} from "../typeDefs/company";

export const GET_ALL_COMPANIES = {
  type: new GraphQLList(CompanyType),
  resolve: async () => {
    return await Companies.find();
  },
};

export const GET_COMPANY = {
  type: CompanyType,
  args: {
    nit: {type: GraphQLID},
  },
  resolve: async (_: any, {nit}: any) =>{
    return await Companies.findOneBy({nit: nit});
  },
};

export const GET_COMPANY_BY_USER_ID = {
  type: new GraphQLList(CompanyType),
  args: {
    id: {type: GraphQLID},
  },
  resolve: async (_: any, {id}: any) =>{
    return await Companies.find({where: {userId: id}});
  },
};
