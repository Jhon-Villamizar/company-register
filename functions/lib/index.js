"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crud = void 0;
const functions = __importStar(require("firebase-functions"));
const admin = __importStar(require("firebase-admin"));
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
const envConfig_1 = require("./envConfig");
const credentials_json_1 = __importDefault(require("./credentials.json"));
admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(JSON.stringify(credentials_json_1.default))),
});
(() => {
    db_1.connectionDB;
    // app.listen(PORT);
    console.log(`listen on port ${envConfig_1.PORT}`);
})();
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.crud = functions.https.onRequest(app_1.default);
//# sourceMappingURL=index.js.map