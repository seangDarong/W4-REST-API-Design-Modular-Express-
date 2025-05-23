import express from 'express'
import { getAllArticle,getArticleById,createArticle,updateArticle,deleteArticle} from '../controllers/articleController.js'

const articleRoutes = express.Router();

articleRoutes.get('/', getAllArticle);
articleRoutes.get('/:id', getArticleById);
articleRoutes.post('/', createArticle);
articleRoutes.put('/:id', updateArticle);
articleRoutes.delete('/:id', deleteArticle);


export default articleRoutes;