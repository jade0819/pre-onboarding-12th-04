import { isEmptyArray } from '../isEmpty';

export const extractedRegionData = (tooltipItems, regionArray) => {
  if (isEmptyArray(regionArray)) return '';

  const item = Array.isArray(tooltipItems) ? tooltipItems[0] : tooltipItems;
  const index = 'dataIndex' in item ? item.dataIndex : item.index;

  return regionArray[index];
};
