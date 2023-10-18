import * as Joi from 'joi';

export interface EnvironmentVariables {
  DATABASE: string;
  SALT_CRYPTO: string;
}

export const validationSchemaForEnv = Joi.object<EnvironmentVariables, true>({
  DATABASE: Joi.string().required(),
  SALT_CRYPTO: Joi.string().required(),
});
