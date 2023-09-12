import { useCallback, useEffect, useReducer } from 'react';
import { reducer, initialState } from '../reducer/chartReducer';
import { getChartData } from '../api/chartData';
import { splitTimestamp } from '../utils/timestamp';

const useChartData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const transformChartJsData = obj => {
    for (const key in obj) {
      const timestampArr = splitTimestamp(key);
      obj[key].timestamp = key;
      obj[key].date = timestampArr[0];
      obj[key].time = timestampArr[1];
    }
    return Object.values(obj);
  };

  const fetchChartData = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const chartData = await getChartData();

      dispatch({ type: 'SET_DATA', payload: transformChartJsData(chartData) });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  return { state, dispatch, fetchChartData };
};

export default useChartData;
