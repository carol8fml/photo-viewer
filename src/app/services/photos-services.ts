import axios from 'axios';

export interface IPhoto {
  url: string;
  user: number;
  title: string;
  id: number;
  description: string;
}

let allPhotos: IPhoto[] = [];

/**
 * Retrieves a list of photos from the API.
 */
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

    allPhotos = response.data.photos;
    return allPhotos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Returns a photo from the list of photos by its ID.
 * @param id The ID of the photo.
 */
export const getPhotoById = (id: number): IPhoto | null => {
  const photo = allPhotos.find((p) => p.id === id);
  return photo || null;
};
