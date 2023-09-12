export const extractedArrayChartData = chartData => {
  if (!chartData) return null;

  const newChartData = {
    labelArray: [],
    regionArray: [],
    valueAreaArray: [],
    valueBarArray: [],
    dateArray: [],
  };

  chartData.forEach(item => {
    newChartData.labelArray.push(item.timestamp);
    newChartData.regionArray.push(item.region);
    newChartData.valueAreaArray.push(item.value_area);
    newChartData.valueBarArray.push(item.value_bar);
    newChartData.dateArray.push(item.date);
  });

  return newChartData;
};
