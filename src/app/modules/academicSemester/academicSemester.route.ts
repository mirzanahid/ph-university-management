import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicSemeseterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemeseterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAcademicSemsters);
router.get(
  '/:academicSemesterId',
  AcademicSemesterControllers.getSingleAcademicSemster,
);
router.patch(
  '/:academicSemesterId',
  validateRequest(
    AcademicSemeseterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

export const AcademicSemeseterRoutes = router;
