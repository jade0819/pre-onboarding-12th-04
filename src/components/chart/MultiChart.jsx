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
import { Chart } from 'react-chartjs-2';
import Filter from './Filter';
import { extractedArrayChartData } from '../../utils/chart/extractedArrayChartData';
import { isEmptyObject } from '../../utils/isEmpty';
import { useState } from 'react';

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
  // if (!isEmptyObject(chartData)) return;
  const { labelArray, regionArray, valueAreaArray, valueBarArray, dateArray } = chartData;

  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleTypeFilter = region => {
    setSelectedRegion(region);
  };

  const getFillColor = type => {
    const colors = [];
    regionArray.map(region => {
      if (selectedRegion === null || region === selectedRegion) {
        colors.push(type === 'bar' ? '#8884d8' : 'rgba(255, 0, 0, 0.6)');
      } else {
        colors.push(type === 'bar' ? '#413ea0' : '#82ca9d');
      }
    });
    return colors;
  };

  const barColors = getFillColor('bar');
  const areaColors = getFillColor('area');

  const chartDataSet = {
    labels: labelArray,
    datasets: [
      {
        label: 'Value Bar',
        type: 'bar',
        data: valueBarArray,
        fill: true,
        backgroundColor: barColors,
        borderColor: barColors,
        yAxisID: 'y-axis-left',
      },
      {
        label: 'Value Area',
        type: 'line',
        data: valueAreaArray,
        fill: true,
        // backgroundColor: "rgba(255,99,132,0.2)",
        // borderColor: "rgba(255,99,132,1)",
        backgroundColor: areaColors,
        borderColor: areaColors,
        borderWidth: 2,
        yAxisID: 'y-axis-right',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          callback: function (_, index) {
            return index % 10 === 0 ? dateArray[index].split(' ')[1] : null;
          },
        },
      },
      'y-axis-left': {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        title: {
          display: true,
          text: 'bar_value',
        },
      },
      'y-axis-right': {
        position: 'right',
        beginAtZero: true,
        title: {
          display: true,
          text: 'bar_value',
        },
      },
    },
  };

  return (
    <>
      <Filter regionArray={regionArray} handleTypeFilter={handleTypeFilter} />

      {!isEmptyObject(chartData) && (
        <div className="w-4/5">
          <Chart
            type="bar"
            data={chartDataSet}
            options={chartOptions}
            plugins={{
              legend: {
                display: true,
                position: 'top',
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default MultiChart;
