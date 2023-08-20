import axios from 'axios';
import {API_URL, API_KEY} from 'react-native-dotenv';

export const fetchNews = async (page: number = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        'api-key': API_KEY,
        page,
      },
    });

    return response.data.response.docs;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
