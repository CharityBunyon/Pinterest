// import './boards.scss';

const makeABoard = (board) => {
  let domString = '';
  if (board.id) {
    domString += `
    <div class="card boardCard">
    <h5 class="card-title">${board.name}</h5>
      <img src="${board.boardImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <button id="${board.id}" class="btn btn-primary">Click Me</button>
        </div>
    </div>
    `;
  }
  return domString;
};

export default { makeABoard };
