import { useEffect } from 'react';
import useChartData from '../../hooks/useChartData';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import MultiChart from './MultiChart';

const Chart = () => {
  const { state, fetchChartData } = useChartData();
  const { error, isLoading, datas } = state;

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  return (
    <>
      {error && <Error />}
      {isLoading && <Loading />}
      {!(isLoading || error) && <MultiChart datas={datas} />}
    </>
  );
};

export default Chart;
