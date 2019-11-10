import './boards.scss';
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import boardCard from '../BoardCard/boardCard';
// import singleBoard from '../singleBoard/singleBoard';
import pinsData from '../../helpers/data/pinData';
import pinsPrint from '../PinCard/pinCard';

const close = () => {
  const { uid } = firebase.auth().currentUser;
  $(document).click((e) => {
    const buttonName = e.target.className;
    // console.log(e.target.className);
    if (buttonName === 'closeBtn') {
      // eslint-disable-next-line no-use-before-define
      buildBoards(uid);
    }
  });
};

const showSingleBoard = (boardId) => {
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      // console.log('here are the pins', pins);
      let domString = '<div id="boardSection" class="d-flex flex-wrap"><span><button class="closeBtn">Close</button><span>';
      pins.forEach((pin) => {
        domString += pinsPrint.makePin(pin);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('#boardSection').on('click', '.closeBtn', close);
    })
    .catch((error) => console.error(error));
};

const deleteAPin = (e) => {
  e.preventDefault();
  pinsData.deletePin(e.target.id)
    .then(() => {
      const boardId = e.target.getAttribute('pinDataBoardId');
      showSingleBoard(boardId);
      // eslint-disable-next-line no-use-before-define
    })
    .catch((error) => console.error(error));
};

const createSingleBoard = (e) => {
  const boardId = e.target.id;
  showSingleBoard(boardId);
};

const buildBoards = (uid) => {
  boardData.getBoards(uid)
    .then((boards) => {
      // console.log('the boards', boards);
      let domString = '<div id="boardSection" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardCard.makeABoard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('#boards').on('click', '.chosen-board', createSingleBoard);
      $('#boards').on('click', '.deletePinFromBoard', deleteAPin);

      // boardsDiv.addClass('hide');
    })
    .catch((error) => console.error(error));
};


export default { buildBoards };
