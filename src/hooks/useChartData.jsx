import { useCallback, useReducer } from 'react';
import { reducer, initialState } from '../reducer/chartReducer';
import { getChartData } from '../api/chartData';
import { structuredChartData } from '../utils/chart/structuredChartData';

const useChartData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchChartData = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const chartData = await getChartData();
      dispatch({ type: 'SET_DATA', payload: structuredChartData(chartData.response) });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  return { state, datas: state.datas, dispatch, fetchChartData };
};

export default useChartData;
