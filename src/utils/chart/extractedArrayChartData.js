export const extractedArrayChartData = chartData => {
  if (!chartData) return null;

  const newChartData = {
    timestampArray: [],
    regionArray: [],
    valueBarArray: [],
    valueAreaArray: [],
    dateArray: [],
    timeArray: [],
  };

  chartData.forEach(item => {
    newChartData.timestampArray.push(item.timestamp);
    newChartData.regionArray.push(item.region);
    newChartData.valueBarArray.push(item.value_bar);
    newChartData.valueAreaArray.push(item.value_area);
    newChartData.dateArray.push(item.date);
    newChartData.timeArray.push(item.time);
  });

  return newChartData;
};
