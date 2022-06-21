import express from 'express';
import MySchema from '../Models/employeeModels.js';
import { getEmployees, postEmployee, deleteEmployee, getEmployee, updateEmployee } from '../RouteFunctions/routeFunctions.js';
const router = express.Router();

router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.patch(':id', updateEmployee);
router.delete(':id', deleteEmployee);
// router.patch('/:id/endorse', endorseEmployee);
router.post('/', postEmployee);




export default router;