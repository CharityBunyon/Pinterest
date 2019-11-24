import './pinCard.scss';

const makePin = (pin) => {
  let domString = '';
  if (pin.id) {
    domString += `
    <div class="card d-flex flex-wrap container" id="pinCard">
    <h5 class="card-title">${pin.title}</h5>
      <div class="card-body">
      <img src="${pin.imgUrl}" class="" height="400px" width= "400px" alt="...">
        <p class="card-text">${pin.description}</p>
        <button href="#" class="btn btn-primary deletePinFromBoard" id="${pin.id}" pinDataBoardId="${pin.boardId}">Remove</button>
        <button type="button" id="pin-${pin.id}" class="btn btn-primary updatePinBtn" data-toggle="modal" data-target="#updatePinModal">
        Update Pin
  </button>
      </div>
    </div>

  <!--  Update Pin Modal -->
  <div class="modal" id="updatePinModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Move Pin to Different Board</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
        <p>Type in Board Name</p>
            <div class="form-group" 
            id="updatePinModal">
            <input type="text" class="form-control" id="pinType" placeholder="Enter Name">
            </div>
      </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary updatePinBtn" id="updatePin-${pin.id}">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

`;
  }
  return domString;
};

export default { makePin };
