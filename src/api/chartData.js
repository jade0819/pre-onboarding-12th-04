import { HttpClient } from './httpClient';

const httpClient = new HttpClient('');

export const getChartData = async () => {
  const response = await httpClient.get('/mock_data.json');

  return response.data;
};
