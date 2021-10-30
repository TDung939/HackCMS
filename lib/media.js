import { getStrapiURL } from "./api";
import axios from 'axios';

// Get Media URL from JSON
export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}

export const uploadStrapiMedia = async( file, refId, ref, source = '', field) => {
  const formData = new FormData();
  formData.append('files', file);
  formData.append('refId', refId);
  formData.append('ref', ref);
  formData.append('source', source),
  formData.append('field', field);

  for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
  }
  await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload`, formData, 
    {
      headers: { 
        'Content-Type': 'multipart/form-data', 
        // 'Authorization': `Bearer ${token}`
      },
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const uploadStrapiMediaPublic = async(file) => {
  const formData = new FormData();
  formData.append('files', file);

  for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
  }
  await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload`, formData, {
      headers: { 
        'Content-Type': 'multipart/form-data', 
      },
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}