import * as Joi from 'joi';

export interface EnvironmentVariables {
  DATABASE: string;
  SALT_CRYPTO: string;
  JWT_SECRET: string;
}

export const validationSchemaForEnv = Joi.object<EnvironmentVariables, true>({
  DATABASE: Joi.string().required(),
  SALT_CRYPTO: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
