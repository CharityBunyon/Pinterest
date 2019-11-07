import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// got this from apiKeys and stuck it in axios.get below

const getAllPinsId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
  // this is called a query string
    .then((response) => {
      const demPins = response.data;
      const pins = [];
      Object.keys(demPins).forEach((fbId) => {
        demPins[fbId].id = fbId;
        pins.push(demPins[fbId]);
      });
      // order positions A1, A2, A3, B1 ETC, always sort before resolve
      const sortedPins = pins.sort((a, b) => a.pin.localeCompare(b.pin, 'en', { numeric: true }));
      resolve(sortedPins); // hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});


export default { getAllPinsId };
