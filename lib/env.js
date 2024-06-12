import * as dotenv from 'dotenv'
import { cleanEnv,str } from "envalid";


dotenv.config();

const env = cleanEnv(process.env, {
    MYSQL_PORT:str(),
    MYSQL_HOST:str(),
    MYSQL_PASSWORD:str(),
    MYSQL_USER:str(),
    MYSQL_DATABASE_NAME:str(),
    PORT:str(),
});
export default env;
