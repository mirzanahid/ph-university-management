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

const getAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payLoad: Partial<TAcademicSemester>,
): Promise<TAcademicSemester | null> => {
  if (
    payLoad.name &&
    payLoad.code &&
    academicSemeseterCodeMapper[payLoad.name] !== payLoad.code
  ) {
    throw new Error('Ivalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
  });

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAcademicSemesterFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
