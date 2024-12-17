import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentServices } from './academicDepartment.service';

// create academic department
const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department is created succesfully',
    data: result,
  });
});

// get all academic department
const getAllAcademicDepartments = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department are retrieved succesfully',
    data: result,
  });
});

// get single academic department
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId,
    );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department is retrieved succesfully',
    data: result,
  });
});

// update academic department
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const deparmentData = req.body;
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(
      departmentId,
      deparmentData,
    );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic Department is update succesfully',
    data: result,
  });
});

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
