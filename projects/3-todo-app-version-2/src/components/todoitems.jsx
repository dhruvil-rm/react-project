import Toitem from "./Toitem";

const Todoitems = ({ todoitems }) => {

  return (<>
    <div className="item">
      {todoitems.map((item) => <Toitem todoname={item.Name} tododate={item.DueDate}></Toitem>)}
    </div>
  </>)
}

export default Todoitems;