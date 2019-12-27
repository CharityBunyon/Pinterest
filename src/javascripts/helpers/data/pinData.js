import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// got this from apiKeys and stuck it in axios.get below

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
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


const addPin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

const deletePin = (pinsId) => axios.delete(`${baseUrl}/pins/${pinsId}.json`);

const updateNewPin = (pinsId, newPinBoard) => axios.put(`${baseUrl}/pins/${pinsId}.json`, newPinBoard);

const getPin = (pinsId, newBoardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${pinsId}.json`)
    .then((result) => {
      const pinObject = result.data;
      pinObject.boardId = newBoardId;
      updateNewPin(pinsId, pinObject);
      resolve();
    })
    .catch((error) => reject(error));
});
// axios call to edit the pin info in firebase


// 1. Function will grab all the pins from the firebase pins.json file.
// 2. Within the .then I want to put the result in variable called pinObject.
// 3. Then I want make a newBoardId by grabbing the pinObject and the boardId
// 4. updatePin will update the pinId and the Object itself in firebase.
// 5. export getPin to call in the boards.js

export default {
  getPinsByBoardId,
  deletePin,
  addPin,
  updateNewPin,
  getPin,
};
