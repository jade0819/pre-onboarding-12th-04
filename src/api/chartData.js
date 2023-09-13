import { HttpClient } from './httpClient';

const httpClient = new HttpClient('');

export const getChartData = async () => {
  const response = await httpClient.get('/data/mock_data.json');
  return response.data;
};
