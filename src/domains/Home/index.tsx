import MainItems from "../../container/MainItems";
import "./style.scss";

const Home = () =>{
  return(
    <div>
      <div className="home_container">
        <h2 className="home_header">
          News
        </h2>
        <MainItems/>
      </div>
    </div>
  )
}

export default Home;