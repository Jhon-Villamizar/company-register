import express from "express";
import {graphqlHTTP} from "express-graphql";
import cors from "cors";
import {schema} from "./schema";

const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({
  graphiql: true,
  schema,
}));


export default app;
