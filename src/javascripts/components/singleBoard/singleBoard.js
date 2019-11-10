import './singleBoard.scss';
import utilities from '../../helpers/utilities';
import pinsPrint from '../PinCard/pinCard';
import pinsData from '../../helpers/data/pinData';
import 'firebase/auth';


const buildSingleBoard = (boardId) => {
  pinsData.getPinsByBoardId(boardId)
    .then((pins) => {
      console.log('here are the pins', pins);
      let domString = '<div id="boardSection" class="d-flex flex-wrap">';
      domString += '<button class= "btn btn-success close">Close</button>';
      pins.forEach((pin) => {
        domString += pinsPrint.makePin(pin);
      });
      domString += '</div>';
      utilities.printToDom('pins', domString);
    })
    .catch((error) => console.error(error));
  // $('#pins').on('click', '.closeButton', hideBoards);
};


export default { buildSingleBoard };
