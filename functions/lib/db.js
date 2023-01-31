"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDB = void 0;
const typeorm_1 = require("typeorm");
const envConfig_1 = require("./envConfig");
const companies_1 = require("./entities/companies");
const inventories_1 = require("./entities/inventories");
const users_1 = require("./entities/users");
exports.connectionDB = new typeorm_1.DataSource({
    type: "mysql",
    host: envConfig_1.DB_HOST,
    username: envConfig_1.DB_USERNAME,
    password: envConfig_1.DB_PASSWORD,
    port: Number(envConfig_1.DB_PORT),
    database: envConfig_1.DB_NAMEDB,
    entities: [users_1.Users, companies_1.Companies, inventories_1.Inventories],
    synchronize: true,
    ssl: false,
});
exports.connectionDB.initialize()
    .then(() => {
    console.log("data base start");
})
    .catch((error) => console.error("ha ocurrido un problema: ", error));
//# sourceMappingURL=db.js.map