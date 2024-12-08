// import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester is created succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
