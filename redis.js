import { error } from "console";
import { createClient } from "redis";


let client;

const initClient = async function () {
    if(!client) {
        client = await createClient();
        client.on('error', () => console.log('Error while creating redis client '));

        try {
          await  client.connect();

        } catch (error) {
           console.log('Error while initializing redis client'); 
           throw error;
        }
    }
}


const getValue = async function (key){
    try {
        const value = await  client.json.get(`user:${key}`);
        return value
        
    } catch (error) {
    console.log('Error getting value for key ', + key);
    throw error

        
    }
}

const setValue = async function (key, value){
    try {
        const data = await client.json.set(`user:${key}`, '$', value);
        return data

    } catch (error) {
        console.log('Error while setting value for key: ' + key)
    }
}

export {initClient, getValue, setValue};