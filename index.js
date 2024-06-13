import express from 'express';
import * as dotenv from 'dotenv'
import connectTODb from './db/config.js';
import env from './lib/env.js';
import productRouter from './routes/product.js';
import { initClient } from './redis.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/product', productRouter)


const initApp = async function (){
    try {
        
        connectTODb();
        initClient();
    } catch (error) {
        console.log('Error while initializing app', error);
        throw error;
        
    }
}
initApp().then(() => {
    try {
        app.listen(env.PORT, function() {
            console.log('listening on port ' + env.PORT);

        })
    } catch (error) {
        console.log(error);
        
    }
})

//just wantted to commit the changes and test it out once again