import express from 'express'
import { getAllJournalist,getJournalistById,createJournalist,updateJournalist,deleteJournalist,getArticlesByJournalist } from '../controllers/journalistController.js'

const journalistsRoutes = express.Router();

journalistsRoutes.get('/', getAllJournalist);
journalistsRoutes.get('/:id', getJournalistById);
journalistsRoutes.post('/', createJournalist);
journalistsRoutes.put('/:id', updateJournalist);
journalistsRoutes.delete('/:id', deleteJournalist);
journalistsRoutes.get('/:catagory', getArticlesByJournalist);


export default journalistsRoutes;