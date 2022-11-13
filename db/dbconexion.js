import { createPool } from "mysql2/promise";


export const pool = createPool({
    connectTimeout: 1000,
    connectionLimit: 1000,
    debug: false,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    port:"3306",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
})

pool.on("connection", function(connection){
    connection.query("SET SESSION auto_increment_increment=1")
})

pool.on("enqueue", function(){
    console.log("Waiting for available connection slot")
})

console.log(pool)

