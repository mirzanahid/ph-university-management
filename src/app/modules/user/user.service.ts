import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  const userData: Partial<TUser> = {};

  //if password is not given, use default password
  userData.password = password || (config.default_pass as string);

  //set student role
  userData.role = 'student';

  //find academic semester info

  const admissionSemesters = await AcademicSemester.findById(
    payLoad.admissionSemester,
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    //set manually generated id
    userData.id = await generateStudentId(admissionSemesters);

    //create a user
    const newUser = await User.create([userData], { session });
    // create a student

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create user');
    }

    //set id, _id as user
    payLoad.id = newUser[0].id;
    payLoad.user = newUser[0]._id;

    const newStudent = await Student.create([payLoad], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession()
    throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create student');
  }
};

export const userServices = {
  createStudentIntoDB,
};
