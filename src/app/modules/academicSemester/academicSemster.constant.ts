import { TAcademicSemesterCode, TAcademicSemesterName, TAcademicSemesterNameCodeMapper, TMonths } from "./academicSemester.interface";

export const months: TMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const academicSemeseterName: TAcademicSemesterName[] = [
    'Autumn',
    'Summer',
    'Fall',
  ];
  export const academicSemeseterCode: TAcademicSemesterCode[] = ['01', '02', '03'];


  export const academicSemeseterCodeMapper : TAcademicSemesterNameCodeMapper ={
    Autumn: '01',
    Summer : '02',
    Fall: '03'
  }