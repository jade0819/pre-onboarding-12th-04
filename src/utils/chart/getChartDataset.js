import { getChartColors } from './getChartColors';

export const getChartDataset = (chartData, selectedRegion) => {
  const { regionArray, valueBarArray, valueAreaArray } = chartData;

  const barColorArray = getChartColors('bar', selectedRegion, regionArray);
  const areaColorArray = getChartColors('area', selectedRegion, regionArray);

  const varDataSet = {
    label: 'value_bar',
    type: 'bar',
    data: valueBarArray,
    fill: true,
    backgroundColor: barColorArray,
    borderColor: barColorArray,
    yAxisID: 'y-axis-bar',
  };

  const areaDataSet = {
    label: 'value_area',
    type: 'line',
    data: valueAreaArray,
    fill: true,
    backgroundColor: areaColorArray,
    borderColor: areaColorArray,
    borderWidth: 2,
    yAxisID: 'y-axis-area',
  };

  return [varDataSet, areaDataSet];
};
