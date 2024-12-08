import express from 'express';
import { UserController } from './user.controller';
import { studentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequests';

const router = express.Router();



router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
