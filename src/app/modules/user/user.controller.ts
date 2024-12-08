import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;


  const result = await userServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
