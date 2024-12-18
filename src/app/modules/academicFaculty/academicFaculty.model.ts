import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';
import AppError from '../../errors/AppError';

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

academicFacultySchema.pre('save', async function (next) {
  this.name = this.name.replace(/\s+/g, ' ').trim();

  const isDepartmentExist = await AcademicFaculty.findOne({
    name: { $regex: `^${this.name}$`, $options: 'i' },
    // name: this.name,
  });

  if (isDepartmentExist) {
    throw new Error('This Faculty is already exist!');
  }

  next();
});

academicFacultySchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();

  const isDepartmentExist = await AcademicFaculty.findOne(query);

  if (!isDepartmentExist) {
    throw new AppError(404,'This Faculty is not exist!');
  }

  next();
});

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema,
);
