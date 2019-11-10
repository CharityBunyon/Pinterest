import './pinCard.scss';

const makePin = (pin) => {
  let domString = '';
  if (pin.id) {
    domString += `
    <div class="card  d-flex flex-wrap container" id="pinCard">
    <h5 class="card-title">${pin.title}</h5>
      <div class="card-body">
      <img src="${pin.imgUrl}" class="" height="400px" width= "400px" alt="...">
        <p class="card-text">${pin.description}</p>
        <button href="#" class="btn btn-primary deletePin" id="${pin.id}" databoardid="${pin.boardID}">Delete</button>
      </div>
    </div>
    `;
  }
  return domString;
};

export default { makePin };
