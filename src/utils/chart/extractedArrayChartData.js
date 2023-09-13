export const extractedArrayChartData = chartData => {
  if (!chartData) return null;

  const newChartData = {
    timestampArray: [],
    regionArray: [],
    valueAreaArray: [],
    valueBarArray: [],
    dateArray: [],
    timeArray: [],
  };

  chartData.forEach(item => {
    newChartData.timestampArray.push(item.timestamp);
    newChartData.regionArray.push(item.region);
    newChartData.valueAreaArray.push(item.value_area);
    newChartData.valueBarArray.push(item.value_bar);
    newChartData.dateArray.push(item.date);
    newChartData.timeArray.push(item.time);
  });

  return newChartData;
};
