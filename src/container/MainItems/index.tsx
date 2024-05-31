import Item from "../../components/Item";
import "./style.scss";

const MainItems = () =>{
  return(
    <div>
      <div className="main_container">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  )
}

export default MainItems;