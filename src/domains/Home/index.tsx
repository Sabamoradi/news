import { useEffect } from "react";
import MainItems from "../../container/MainItems";
import PersonalSection from "../../container/PersonalSection";
import "./style.scss";
import { setNewsApiData } from "../../store/newApi/slice";
import { getNewsAPiThunk } from "../../store/newApi/thunks";
import { useDispatch } from "../../store/store";
import { getGuardianDataThunk } from "../../store/guardian/thunks";
import { getTimesDataThunk } from "../../store/times/thunks";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getNewsAPiThunk())
    dispatch(getGuardianDataThunk())
    dispatch(getTimesDataThunk())
  },[])

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
