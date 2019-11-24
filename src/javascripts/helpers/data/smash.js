import pinData from './pinData';
import boardsData from './boardData';


const getCompleteBoard = () => new Promise((resolve, reject) => {
  pinData.getPinsByBoardId()
    .then((pins) => {
      boardsData.getBoards().then((boards) => {
        const finalPins = [];
        pins.forEach((pin) => {
          const newPin = { ...pin };
          const boardsRecord = boards.find((x) => x.id === pins.boardId);
          newPin.boardsRecord = boardsRecord;
          finalPins.push(newPin);
          console.log(finalPins);
        });
        resolve(finalPins);
      });
    })
    .catch((error) => reject(error));
});

export default { getCompleteBoard };
