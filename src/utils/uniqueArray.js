import { isEmptyArray } from './isEmpty';

export const uniqueArray = array => {
  if (isEmptyArray(array)) return null;

  const uniqueArray = [...new Set(array)];
  return uniqueArray;
};
