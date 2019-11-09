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
      resolve(pins);
    })
    .catch((error) => reject(error));
});


export default { getAllPinsId };
