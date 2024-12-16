import express from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicFactultyValidation } from './academictFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFactultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

router.get(
  '/:academicFacultyId',
  AcademicFacultyControllers.getSingleAcademicFaculty,
);
router.patch(
  '/:academicFacultyId',validateRequest(AcademicFactultyValidation.updateAcademicFacultyValidationSchema),
  AcademicFacultyControllers.updateAcademicFaculty,
);


export const AcademicFacultyRoutes = router