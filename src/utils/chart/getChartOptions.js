import { getAxisNumberRange } from './getAxisNumberRange';
import { extractedRegionData } from './extractedRegionData';

export const getChartOptions = chartData => {
  const { valueAreaArray, regionArray } = chartData;

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
        suggestedMin: getAxisNumberRange(valueAreaArray).min,
        suggestedMax: getAxisNumberRange(valueAreaArray).max * 2,
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

  return chartOptions;
};
