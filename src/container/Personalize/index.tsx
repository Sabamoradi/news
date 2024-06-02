import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { SourceConfig, sourcesConfig } from "../../configs/mainConfig";
import {
  selectGuardianData,
  setGuardianData,
  setShowGuardian,
} from "../../store/guardian/slice";
import { selectNewsApiData, setShowNewsOrg } from "../../store/newApi/slice";
import { useDispatch, useSelector } from "../../store/store";
import { selectTimesData, setShowTimes } from "../../store/times/slice";
import "./style.scss";
import { selectAllCategories } from "../../store/general/slice";
import { getNewsAPiThunk } from "../../store/newApi/thunks";
import { getGuardianDataThunk } from "../../store/guardian/thunks";
import { getTimesDataThunk } from "../../store/times/thunks";
import MainItems from "../MainItems";
import { GuardianData } from "../../store/guardian/types";

const Personalize = () => {
  const [source, setSources] = useState(0);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const allCategories = useSelector(selectAllCategories);

  const selectorNewsApi = useSelector(selectNewsApiData);
  const selectorGuardianApi = useSelector(selectGuardianData);
  const selectorTimesApi = useSelector(selectTimesData);

  useEffect(() => {
    switch (source) {
      case 1:
        dispatch(getNewsAPiThunk());

        break;
      case 2:
        dispatch(getGuardianDataThunk());
        break;
      case 3:
        dispatch(getTimesDataThunk());
        break;
    }
  }, [source]);

  const filterData = (data: string) => {
    setCategory(data);
    const newData = selectorGuardianApi.filter((el: GuardianData) => {
      return el.pillarName === data;
    });

    dispatch(setGuardianData(newData));
  };

  return (
    <div className="personal_container">
      <h3>For You</h3>
      <div className="bottom_Section">
        <p className="item_title">Source</p>
        <div className="bottom_item_wrapper">
          {sourcesConfig.map((el: SourceConfig) => {
            return (
              <div className="item_data" key={el.id}>
                <span
                  className={`select_item ${source === el.id ? "active" : ""}`}
                  onClick={() => setSources(el.id)}
                ></span>
                <p className="bottom_item_text">{el.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom_Section">
        <p className="item_title">Categories</p>

        <div className="bottom_item_wrapper">
          {allCategories.map((el: string, index: number) => {
            return (
              <div className="item_data" key={`${index}-category`}>
                <span
                  className={`select_item ${category === el ? "active" : ""}`}
                  onClick={() => filterData(el)}
                ></span>
                <p className="bottom_item_text">{el}</p>
              </div>
            );
          })}
        </div>
      </div>

      <MainItems newsApiItem={selectorNewsApi} guardianItems={selectorGuardianApi} selectorTimesApi={selectorTimesApi}/>
    </div>
  );
};

export default Personalize;
