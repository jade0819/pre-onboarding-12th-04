import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
} from 'chart.js';
import { Chart, getElementsAtEvent } from 'react-chartjs-2';
import { useRef, useState } from 'react';
import FilterButton from './FilterButton';
import { extractedArrayChartData } from '../../utils/chart/extractedArrayChartData';
import { isEmptyObject } from '../../utils/isEmpty';
import { extractedRegionData } from '../../utils/chart/extractedRegionData';
import { getChartDataSet } from '../../utils/chart/getChartDataSet';
import { getChartOptions } from '../../utils/chart/getChartOptions';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
);

const MultiChart = ({ datas }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const chartRef = useRef(null);

  const chartData = extractedArrayChartData(datas);
  const chartDataSet = getChartDataSet(chartData, selectedRegion);
  const chartOptions = getChartOptions(chartData);

  const handleClickChartItem = event => {
    const targetData = getElementsAtEvent(chartRef.current, event);
    if (targetData.length === 0) return;

    const region = extractedRegionData(targetData, chartData.regionArray);
    setSelectedRegion(region);
  };

  return (
    <div>
      <FilterButton
        regionArray={chartData.regionArray}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      {!isEmptyObject(chartData) && (
        <div className="w-full">
          <Chart
            ref={chartRef}
            onClick={handleClickChartItem}
            type="area"
            data={chartDataSet}
            options={chartOptions}
            plugins={{}}
          />
        </div>
      )}
    </div>
  );
};

export default MultiChart;
