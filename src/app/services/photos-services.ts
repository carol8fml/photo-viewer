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
 * Recupera uma lista de fotos da API.
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
 * Retorna uma foto da lista de fotos pelo seu ID.
 * @param id O ID da foto.
 */
export const getPhotoById = (id: number): IPhoto | null => {
  const photo = allPhotos.find((p) => p.id === id);
  return photo || null;
};
