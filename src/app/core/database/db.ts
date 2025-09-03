import "../../../env/index";

import mysql from "mysql2/promise";

console.log("db host ", process.env.DB_HOST);

const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: "root",
  password: "Rohit1234",
  database: "akap_aapkiawa_next",
});

export default pool;
