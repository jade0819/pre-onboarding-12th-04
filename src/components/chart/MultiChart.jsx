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
import { getChartFillColors } from '../../utils/chart/getChartFillColors';
import { isEmptyObject } from '../../utils/isEmpty';
import { axisNumberRange } from '../../utils/chart/axisNumberRange';
import { extractedRegionData } from '../../utils/chart/extractedRegionData';

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
  const { regionArray, valueAreaArray, valueBarArray, timeArray } = chartData;

  const [selectedRegion, setSelectedRegion] = useState(null);

  const barColorArray = getChartFillColors('bar', selectedRegion, regionArray);
  const areaColorArray = getChartFillColors('area', selectedRegion, regionArray);

  const chartDataSet = {
    labels: timeArray,
    datasets: [
      {
        label: 'value_bar',
        type: 'bar',
        data: valueBarArray,
        fill: true,
        backgroundColor: barColorArray,
        borderColor: barColorArray,
        yAxisID: 'y-axis-bar',
      },
      {
        label: 'value_area',
        type: 'line',
        data: valueAreaArray,
        fill: true,
        backgroundColor: areaColorArray,
        borderColor: areaColorArray,
        borderWidth: 2,
        yAxisID: 'y-axis-area',
      },
    ],
  };

  const chartOptions = {
    scales: {
      'y-axis-bar': {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        title: {
          display: true,
          text: 'bar_value',
        },
      },
      'y-axis-area': {
        position: 'right',
        beginAtZero: true,
        suggestedMin: axisNumberRange(valueAreaArray).min,
        suggestedMax: axisNumberRange(valueAreaArray).max * 2,
        title: {
          display: true,
          text: 'area_value',
        },
      },
    },
    interaction: {
      intersect: true,
      mode: 'index',
    },
    plugins: {
      tooltip: {
        position: 'average',
        callbacks: {
          title: tooltipItems => extractedRegionData(tooltipItems, regionArray),
        },
      },
    },
  };

  const chartRef = useRef(null);
  const handleClickChart = event => {
    const targetData = getElementsAtEvent(chartRef.current, event);
    if (targetData.length === 0) return;

    const region = extractedRegionData(targetData, regionArray);
    setSelectedRegion(region);
  };

  return (
    <div>
      <FilterButton
        regionArray={regionArray}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />

      {!isEmptyObject(chartData) && (
        <div className="w-full">
          <Chart
            ref={chartRef}
            onClick={handleClickChart}
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
