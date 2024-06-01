import MainItems from "../../container/MainItems";
import PersonalSection from "../../container/PersonalSection";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <div className="home_container">
        <h2 className="home_header">News</h2>
        <div className="home_item_wrapper">
          <MainItems />
          <PersonalSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
