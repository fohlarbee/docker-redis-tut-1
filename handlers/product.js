import { find , createProduct, findById, updateProduct, deleteProduct} from "../db/queries.js"
import { getValue, setValue } from "../redis.js";

export const getAllProducts = async(req, res) => {
    try {
        const value = await getValue('all');
        if(value){
            console.log('all value from redis',value)
            return res.status(200).json({producs:value})
        }


        const products = await find();
        await setValue('all', products[0])
        res.status(200).json({products});   
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

}
export const create = async(req, res) => {
    try {
        const { title, description, price } = req.body;

        const product = await createProduct(title, description, price);
        const value = await setValue(product.id, product[0])

        res.status(201).json({product});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
}

export const getById = async(req, res) => {
    try {
        const {id} = req.params;
        const value = await getValue(id);
        if(value){
            console.log('Value already exist in cache', value)
            return res.status(200).json(value);
        }
        const product = await findById(id);

        await setValue(id, product[0])
        res.status(200).json({product});   
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

};
export const update = async(req, res) => {
    
    try {
        const { title, description, price } = req.body;
        const {id} = req.params

       const updatedProduct = await updateProduct(title, description, price, id);
       return res.status(200).json({updatedProduct});

    } catch (error) {
        console.log('unable to update product', error)
        
    }
};
export const deleteRecord = async(req, res) => {
    
    try {
        const {id} = req.params

       const deletedProduct = await deleteProduct( id);
       return res.status(200).json({deletedProduct});

    } catch (error) {
        console.log('unable to delete product', error)
        
    }
}