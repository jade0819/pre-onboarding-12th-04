import { useEffect } from 'react';
import useChartData from '../../hooks/useChartData';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import MultiChart from './MultiChart';

const Chart = () => {
  const { state, fetchChartData } = useChartData();
  const { error, isLoaidng, datas } = state;

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  return (
    <>
      {error && <Error />}
      {isLoaidng && <Loading />}
      {datas && <MultiChart chartData={datas} />}
    </>
  );
};

export default Chart;
