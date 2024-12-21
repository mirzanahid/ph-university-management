import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSource = Object.values(err.errors).map(
    (vaL: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: vaL?.path,
        message: vaL.message,
      };
    },
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
