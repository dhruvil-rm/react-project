function Toitem2() {

  let todoname = "Go TO Collage"
  let tododate = "4-10-2023"
  return (
    <div class="container">
      <div class="row RR-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger RR-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default Toitem2;