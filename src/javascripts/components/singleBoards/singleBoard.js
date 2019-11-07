import utilities from '../../helpers/utilities';
// import pin from '../Pin/pin';
import './singleBoard.scss';


const showBoards = () => {
  const domString = `
  <div class = "boardsPage">
  <h2>Boards</h2>
  </div>
  `;
  utilities.printToDom('boards', domString);
};

export default { showBoards };
