import useChartData from '../../hooks/useChartData';

const Chart = () => {
  const { state } = useChartData();

  console.log(state.datas);

  return <div>차트</div>;
};

export default Chart;
