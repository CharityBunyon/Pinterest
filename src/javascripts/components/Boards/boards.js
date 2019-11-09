import './boards.scss';
import $ from 'jquery';
// import firebase from 'firebase/app';
import 'firebase/auth';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import boardCard from '../BoardCard/boardCard';
import singleBoard from '../singleBoard/singleBoard';
// import pinsData from '../../helpers/data/pinsData';
// import pinsPrint from '../pins/pins';

const createSingleBoard = (e) => {
  const boardId = e.target.id;
  singleBoard.buildSingleBoard(boardId);
};

const buildBoards = (uid) => {
  boardData.getBoards(uid)
    .then((boards) => {
      console.log('the boards', boards);
      let domString = '<div id="boardSection" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardCard.makeABoard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('#boards').on('click', '.chosen-board', createSingleBoard);
    })
    .catch((error) => console.error(error));
};


export default { buildBoards };
