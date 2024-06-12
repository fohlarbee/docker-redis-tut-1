import { title } from "process";
import { pool } from "./config.js";

export const find = async() => {
    try {
        const query ="SELECT * FROM products";
        const client = await pool.getConnection();
        const result = client.query(query);
        return result;
    } catch (error) {
        console.log('Error getting all products');
        throw error;
        
    }
}


export const findById = async(id) => {
    try {
        const query ="SELECT * FROM products WHERE id = ?";
        const client = await pool.getConnection();
        const result = client.query(query, [id]);
        return result;
    } catch (error) {
        console.log('Error getting all products');
        throw error;
        
    }
};
export const createProduct = async(title, description, price) => {
    try {
        const query =`INSERT INTO products(title, description,price)
            VALUES (?, ?, ?);
        `;
        const client = await pool.getConnection();
        const result = client.query(query, [title, description, price]);
        return result;
    } catch (error) {
        console.log('Error getting all products');
        throw error;
        
    }
};
export const updateProduct = async(title, description, price, id) => {
    try {
        const query =`UPDATE products
        SET title = ?, description = ?, price = ?  
        WHERE id =?`;
        const client = await pool.getConnection();
        const result = client.query(query, [title, description, price, id]);
        return result;
    } catch (error) {
        console.log('Error getting all products');
        throw error;
        
    }
};

export const deleteProduct = async(id) => {
    try {
        const query =`DELETE FROM products
        WHERE id = ?`;
        const client = await pool.getConnection();
        const result = client.query(query, [ id]);
        return result;
    } catch (error) {
        console.log('Error getting all products');
        throw error;
        
    }
};
