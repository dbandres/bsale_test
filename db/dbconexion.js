import { createPool } from "mysql2/promise";
import { DATABASE, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER } from "../src/config.js";

export const pool = createPool({
    connectTimeout: 1000,
    connectionLimit: 1000,
    debug: false,
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DATABASE
})

pool.on("connection", function(connection){
    connection.query("SET SESSION auto_increment_increment=1")
})

pool.on("enqueue", function(){
    console.log("Waiting for available connection slot")
})

console.log(pool)

