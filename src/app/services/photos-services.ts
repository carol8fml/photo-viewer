import axios from 'axios';

export interface IPhoto {
  url: string;
  user: number;
  title: string;
  id: number;
  description: string;
}

export const getPhotos = async () => {
  try {
    const response = await axios.get(
      'https://api.slingacademy.com/v1/sample-data/photos',
      {
        params: {
          offset: 5,
          limit: 20,
        },
      }
    );

    return response.data.photos as IPhoto[];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
