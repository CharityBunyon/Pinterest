import utilities from '../../helpers/utilities';
import './singleBoard.scss';
import boardsPrint from '../Boards/boards';
import boardData from '../../helpers/data/boardData';


const showBoards = (uid) => {
  boardData.getBoards(uid)
    .then((boards) => {
      console.log('it worked', boards);
      let domString = '<div id="boardSection" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardsPrint.makeABoard(board);
      });
      domString += '</div>';
      utilities.printToDOM('boards', domString);
    })
    .catch((error) => console.error(error));
};

export default { showBoards };
