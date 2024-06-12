import { Router } from "express";
import { create, deleteRecord, getAllProducts, getById, update } from "../handlers/product.js";

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.post('/', create);
productRouter.get('/:id', getById);
productRouter.put('/:id', update);
productRouter.delete('/:id', deleteRecord);
export default productRouter;







