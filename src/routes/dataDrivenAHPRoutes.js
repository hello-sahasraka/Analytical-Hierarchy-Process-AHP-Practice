import express from 'express';
import { dataDrivenAHP } from '../controllers/dataDrivenAHPController.js';

const ahpRouter = express.Router();

ahpRouter.post('/ahp', dataDrivenAHP)

export default ahpRouter;