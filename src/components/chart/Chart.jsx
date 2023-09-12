import { useEffect } from 'react';
import useChartData from '../../hooks/useChartData';

const Chart = () => {
  const { datas, fetchChartData } = useChartData();

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  return <div>{datas && <div>아니</div>}</div>;
};

export default Chart;
