import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  const userData: Partial<TUser> = {};

  //if password is not given, use default password
  userData.password = password || (config.default_pass as string);

  //set student role
  userData.role = 'student';

  //set manually generated id
  userData.id = '2030100003';

  //create a user
  const newUser = await User.create(userData);
  // create a student

  if (Object.keys(newUser).length) {
    //set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};