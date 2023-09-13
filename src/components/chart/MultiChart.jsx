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
import FilterButtonList from './FilterButtonList';
import { extractedArrayChartData } from '../../utils/chart/extractedArrayChartData';
import { isEmptyArray, isEmptyObject } from '../../utils/isEmpty';
import { extractedRegionData } from '../../utils/chart/extractedRegionData';
import { getChartDataset } from '../../utils/chart/getChartDataset';
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
  const chartData = extractedArrayChartData(datas);

  const [selectedRegion, setSelectedRegion] = useState([]);
  const chartRef = useRef(null);

  const datasets = getChartDataset(chartData, selectedRegion);
  const chartDataset = { labels: chartData.timeArray, datasets: datasets };
  const chartOptions = getChartOptions(chartData);

  const handleClickChartItem = event => {
    const targetData = getElementsAtEvent(chartRef.current, event);
    if (isEmptyArray(targetData)) return;

    const region = extractedRegionData(targetData, chartData.regionArray);
    setSelectedRegion(prev => [...prev, region]);
  };

  return (
    <div>
      <FilterButtonList
        regionArray={chartData.regionArray}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      {!isEmptyObject(chartData) && (
        <div className="w-full">
          <Chart
            ref={chartRef}
            type="bar"
            data={chartDataset}
            options={chartOptions}
            onClick={handleClickChartItem}
          />
        </div>
      )}
    </div>
  );
};

export default MultiChart;
