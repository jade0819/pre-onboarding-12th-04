import { getChartFillColors } from './getChartFillColors';

export const getChartDataSet = (chartData, selectedRegion) => {
  const { regionArray, valueBarArray, valueAreaArray } = chartData;

  const barColorArray = getChartFillColors('bar', selectedRegion, regionArray);
  const areaColorArray = getChartFillColors('area', selectedRegion, regionArray);

  const chartDataSet = {
    labels: regionArray,
    datasets: [
      {
        label: 'value_bar',
        type: 'bar',
        data: valueBarArray,
        fill: true,
        backgroundColor: barColorArray,
        borderColor: barColorArray,
        yAxisID: 'y-axis-bar',
      },
      {
        label: 'value_area',
        type: 'line',
        data: valueAreaArray,
        fill: true,
        backgroundColor: areaColorArray,
        borderColor: areaColorArray,
        borderWidth: 2,
        yAxisID: 'y-axis-area',
      },
    ],
  };
  return chartDataSet;
};
