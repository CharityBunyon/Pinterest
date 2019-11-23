import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
// got this from apiKeys and stuck it in axios.get below

const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((fbId) => {
        demBoards[fbId].id = fbId;
        boards.push(demBoards[fbId]);
      });
      resolve(boards); // hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});


const addBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

// const updateBoard = (snackId, updatedSnack) => axios.put(`${baseUrl}/snacks/${snackId}.json`, updatedSnack);

export default {
  getBoards,
  deleteBoard,
  addBoard,
};
