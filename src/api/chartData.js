import { HttpClient } from './httpClient';

const httpClient = new HttpClient('');

export const getChartData = async () => {
  try {
    const response = await httpClient.get('/mock_data.json');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
