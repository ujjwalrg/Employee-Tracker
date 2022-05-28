import express from 'express';
import MySchema from '../Models/listofevents.js';

const router = express.Router();

router.get('/', getAllData);

router.post('/', postData);


export default router;