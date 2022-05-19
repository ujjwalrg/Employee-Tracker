import express from 'express';
import mongoose from 'mongoose';
import getRoutes from './RouteFunctions/routeFunctions.js';
const server = express();
const PORT = 3001;

server.use('/', getRoutes);
const db_URL = 'mongodb+srv://ujjwalrg:ujjwalrg123@life-recap.42fgm.mongodb.net/test?retryWrites=true&w=majority';
const connection = async() => await  mongoose.connect(db_URL);

connection().then(server.listen(PORT, () => console.log(`Life-Recap server running on http://localhost:${PORT}`)))
.catch(err => console.log(err));

