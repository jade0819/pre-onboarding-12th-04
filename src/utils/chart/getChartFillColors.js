import { chartColors, colors } from '../../constants/colors';

export const getChartFillColors = (type, selectedRegion, regionArray) => {
  if (!(type && regionArray)) return colors.skyblue;

  return regionArray.map(region => {
    if (selectedRegion === null) return chartColors[type](false);
    if (selectedRegion === region) return chartColors[type](true);
    else return chartColors[type](false);
  });
};
