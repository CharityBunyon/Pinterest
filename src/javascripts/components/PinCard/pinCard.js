const makePin = (pin) => {
  let domString = '';
  if (pin.id) {
    domString += `
    <div class="card col pinCard"> 
    <h5 class="card-title">${pin.title}</h5>
      <div class="card-body">
      <img src="${pin.imgUrl}" class="card-img-top" alt="...">
        <p class="card-text">${pin.description}</p>
      </div>
    </div>
    `;
  }
  return domString;
};

export default { makePin };
