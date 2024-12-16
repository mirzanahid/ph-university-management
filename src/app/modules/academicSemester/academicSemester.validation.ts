import { z } from 'zod';
import {
  academicSemeseterCode,
  academicSemeseterName,
  months,
} from './academicSemster.constant';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemeseterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemeseterCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...academicSemeseterName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...academicSemeseterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...months] as [string, ...string[]]).optional(),
  }),
});

export const AcademicSemeseterValidations = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema
};
