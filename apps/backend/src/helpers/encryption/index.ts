import { pbkdf2Sync } from 'crypto';
export const encryptPassword = (password: string): string =>
  pbkdf2Sync(password, process.env.SALT_CRYPTO, 1000, 64, 'sha512').toString('hex');
export const comparePassword = (password: string, hash: string): boolean => encryptPassword(password) === hash;
