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

// const getAllBoardPositionsByMachineId = (uid) => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/boardPositions.json?orderBy="uid"&equalTo="${uid}"`)
//     .then((response) => {
//       const demBoardPositions = response.data;
//       const boardPositions = [];
//       Object.keys(demBoardPositions).forEach((fbId) => {
//         demBoardPositions[fbId].id = fbId;
//         boardPositions.push(demBoardPositions[fbId]);
//       });
//       resolve(boardPositions);
//     })
//     .catch((error) => reject(error));
// });


// const createBoardPosition = (newBoardPosition) => axios.post(`${baseUrl}/boards.json`, newBoardPosition);

const addBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default {
  getBoards,
  deleteBoard,
  addBoard,
  // createBoardPosition,
  // getAllBoardPositionsByMachineId,
};
