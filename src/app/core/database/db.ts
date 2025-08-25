import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Rohit1234",
  database: "testdb",
});

export default pool;
