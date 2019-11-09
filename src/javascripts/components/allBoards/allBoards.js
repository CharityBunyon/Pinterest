import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import './allBoards.scss';
import utilities from '../../helpers/utilities';
import boardsPrint from '../Boards/boards';
import boardsData from '../../helpers/data/boardData';
import pinsData from '../../helpers/data/pinData';
import pinsPrint from '../Pin/pin';

const close = () => {
  const { uid } = firebase.auth().currentUser;
  $(document).click((e) => {
    const buttonName = e.target.className;
    if (buttonName === 'closeButton') {
      // eslint-disable-next-line no-use-before-define
      buildAllBoard(uid);
    }
  });
};

const showSingleBoard = (e) => {
  const boardID = e.target.id;
  pinsData.getPinsByBoardId(boardID)
    .then((pins) => {
      // console.log('here are the pins', pins);
      let domString = '<div id="boardSection" class="d-flex flex-wrap container"><span><button class="closeButton">x</button><span>';
      pins.forEach((pin) => {
        domString += pinsPrint.makeAPin(pin);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('#boards').on('click', '.closeButton', close);
    })
    .catch((error) => console.error(error));
};

const buildAllBoard = (uid) => {
  boardsData.getBoards(uid)
    .then((boards) => {
      console.log('the boards', boards);
      let domString = '<div id="boardSection" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += boardsPrint.makeABoard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('#boards').on('click', '.boardCard', showSingleBoard);
    })
    .catch((error) => console.error(error));
};

export default { buildAllBoard };
