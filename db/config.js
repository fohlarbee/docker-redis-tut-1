import { config } from "dotenv";
import { createPool } from "mysql2/promise";
import env from "../lib/env.js";

config();

export const pool = createPool({
    port:env.MYSQL_PORT,
    password: env.MYSQL_PASSWORD,
    user:env.MYSQL_USER,
    host:env.MYSQL_HOST,
    database:env.MYSQL_DATABASE_NAME,

});

 const connectTODb = async () => {
    try {
        await pool.getConnection();
        console.log('DB connection established');

    } catch (error) {
        console.log('Error connecting to database', error);
        throw error;
    }
} 
export default connectTODb;