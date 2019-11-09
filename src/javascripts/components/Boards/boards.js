const makeABoard = (board) => {
  let domString = '';
  if (board.id) {
    domString += `
    <div class="card col-4 boardCard" id="${board.id}">
      <p>${board.boardImg}</p>
    </div>
    `;
  }
  return domString;
};

export default { makeABoard };
