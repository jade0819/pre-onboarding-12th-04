import { isEmptyArray } from '../isEmpty';

export const axisNumberRange = valueArray => {
  if (isEmptyArray(valueArray)) return 0;

  const min = Math.min(...valueArray);
  const max = Math.max(...valueArray);

  return { min, max };
};
