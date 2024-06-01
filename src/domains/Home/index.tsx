import { useEffect } from "react";
import MainItems from "../../container/MainItems";
import PersonalSection from "../../container/PersonalSection";
import "./style.scss";
import { setNewsApiData } from "../../store/newApi/slice";
import { getNewsAPiThunk } from "../../store/newApi/thunks";
import { useDispatch, useSelector } from "../../store/store";
import { getGuardianDataThunk } from "../../store/guardian/thunks";
import { getTimesDataThunk } from "../../store/times/thunks";
import { selectGuardianData } from "../../store/guardian/slice";
import { selectNewsApiData } from "../../store/newApi/slice";
import { selectTimesData } from "../../store/times/slice";

const Home = () => {
  const dispatch = useDispatch();
  const selectorNewsApi = useSelector(selectNewsApiData);
  const selectorGuardianApi = useSelector(selectGuardianData);
  const selectorTimesApi = useSelector(selectTimesData);
  
  useEffect(() => {
    dispatch(getNewsAPiThunk());
    dispatch(getGuardianDataThunk());
    dispatch(getTimesDataThunk());
  }, []);

  return (
    <div>
      <div className="home_container">
        <h2 className="home_header">News</h2>
        <div className="home_item_wrapper">
          <PersonalSection />
          <MainItems newsApiItem={selectorNewsApi} guardianItems={selectorGuardianApi} selectorTimesApi={selectorTimesApi}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
