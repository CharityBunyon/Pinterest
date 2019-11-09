import './singleBoard.scss';
import utilities from '../../helpers/utilities';
import pinsPrint from '../PinCard/pinCard';
import pinsData from '../../helpers/data/pinData';

const buildSingleBoard = (boardID) => {
  pinsData.getPinsByBoardId(boardID)
    .then((pins) => {
      console.log('here are the pins', pins);
      let domString = '<div id="boardSection" class="d-flex flex-wrap container"><span><button class="closeButton">x</button><span>';
      pins.forEach((pin) => {
        domString += pinsPrint.makePin(pin);
      });
      domString += '</div>';
      utilities.printToDom('pins', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildSingleBoard };
