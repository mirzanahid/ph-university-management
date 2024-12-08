import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  academicSemeseterCode,
  academicSemeseterName,
  months,
} from './academicSemster.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: academicSemeseterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemeseterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);


academicSemesterSchema.pre('save', async function(next) {
    const isSemesterExits = await AcademicSemester.findOne({
        year: this.year,
        name: this.name
    })

    if(isSemesterExits){
        throw new Error('Semester is already exitsts!')
    }
    next()
})



export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemeseter',
  academicSemesterSchema,
);
