import express from 'express';
import MySchema from '../Models/listofevents.js';
import { getAllData, postData } from '../RouteFunctions/routeFunctions.js';
const router = express.Router();

router.get('/', getAllData);

router.post('/', postData);


export default router;