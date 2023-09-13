import { chartColors, colors } from '../../constants/colors';

export const getChartColors = (type, selectedRegion, regionArray) => {
  if (!(type && regionArray)) return colors.skyblue;

  return regionArray.map(region => {
    if (selectedRegion.includes(region)) {
      return chartColors[type](true);
    } else {
      return chartColors[type](false);
    }
  });
};
