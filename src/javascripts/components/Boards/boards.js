import './boards.scss';
// import $ from 'jquery';
// import firebase from 'firebase/app';
import 'firebase/auth';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import boardCard from '../BoardCard/boardCard';

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
    })
    .catch((error) => console.error(error));
};

export default { buildBoards };
