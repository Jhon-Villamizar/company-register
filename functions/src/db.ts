import {DataSource} from "typeorm";
import {DB_HOST, DB_NAMEDB, DB_PASSWORD, DB_PORT, DB_USERNAME} from "./envConfig";
import {Companies} from "./entities/companies";
import {Inventories} from "./entities/inventories";
import {Users} from "./entities/users";

export const connectionDB = new DataSource({
  type: "mysql",
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: Number(DB_PORT),
  database: DB_NAMEDB,
  entities: [Users, Companies, Inventories],
  synchronize: true,
  ssl: false,
});

connectionDB.initialize()
    .then(() => {
      console.log("data base start");
    })
    .catch((error)=> console.error("ha ocurrido un problema: ", error)
    );
