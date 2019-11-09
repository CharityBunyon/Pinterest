import './boards.scss';

const makeABoard = (boards) => {
  let domString = '';
  if (boards.id) {
    domString += `
    <div class="card boardCard" id="${boards.id}">
    <h5 class="card-title">${boards.name}</h5>
      <img src="${boards.boardImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="#" class="btn btn-primary">Click Me</a>
        </div>
    </div>
    `;
  }
  return domString;
};

export default { makeABoard };
