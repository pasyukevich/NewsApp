import axios from 'axios';
import {API_URL, API_KEY} from '@env';

export const fetchNews = async (country: string = 'us', page: number = 1) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'X-Api-Key': API_KEY,
      },
      params: {
        countries: country,
        page,
        topic: 'food',
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
