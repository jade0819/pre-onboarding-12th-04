const extractedTimestamp = timestamp => {
  if (!timestamp) return null;

  const arr = timestamp.split(' ');
  return arr && arr;
};

export const structuredChartData = obj => {
  const chartData = [];

  for (const timestampKey in obj) {
    const entry = obj[timestampKey];

    const region = entry.id;
    const timestampArr = extractedTimestamp(timestampKey);
    const timestamp = timestampKey;
    const date = timestampArr[0];
    const time = timestampArr[1];

    chartData.push({
      region,
      value_area: entry.value_area,
      value_bar: entry.value_bar,
      timestamp,
      date,
      time,
    });
  }
  return chartData;
};
