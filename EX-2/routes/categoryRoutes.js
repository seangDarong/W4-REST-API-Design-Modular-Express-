import express from 'express'
import { getAllCategories,getCategoryById,createCategory,updateCategory,deleteCategory,getArticlesByCategory } from '../controllers/categoryController.js'

const categoryRoutes = express.Router();

categoryRoutes.get('/', getAllCategories);
categoryRoutes.get('/:id', getCategoryById);
categoryRoutes.post('/', createCategory);
categoryRoutes.put('/:id', updateCategory);
categoryRoutes.delete('/:id', deleteCategory);
categoryRoutes.get('/:catagory', getArticlesByCategory);


export default categoryRoutes;