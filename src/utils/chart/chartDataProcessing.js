const timestampSplit = timestamp => {
  if (!timestamp) return null;

  const arr = timestamp.split(' ');
  return arr && arr;
};

export const chartDataProcessing = obj => {
  for (const key in obj) {
    const timestampArr = timestampSplit(key);

    obj[key].timestamp = key;
    obj[key].date = timestampArr[0];
    obj[key].time = timestampArr[1];
  }
  return Object.values(obj);
};
