import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import { academicSemeseterCodeMapper } from './academicSemster.constant';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemeseterCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code!');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
