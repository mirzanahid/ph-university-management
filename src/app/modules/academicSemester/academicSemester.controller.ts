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

const getAcademicSemsters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicSemesterFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semesters are retrieved succesfully',
    data: result,
  });
});

const getSingleAcademicSemster = catchAsync(async (req, res) => {
  const { academicSemesterId } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
      academicSemesterId,
    );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester is retrieved succesfully',
    data: result,
  });
});
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { academicSemesterId } = req.params;
  const updateData = req.body;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    academicSemesterId,
    updateData,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Semester is updated succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemsters,
  getSingleAcademicSemster,
  updateAcademicSemester,
};
