import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { SourceConfig, sourcesConfig } from "../../configs/mainConfig";
import { setShowGuardian } from "../../store/guardian/slice";
import { setShowNewsOrg } from "../../store/newApi/slice";
import { useDispatch } from "../../store/store";
import { setShowTimes } from "../../store/times/slice";
import "./style.scss";

const PersonalSection = () => {
  const [source, setSources] = useState(0);
  const disptach = useDispatch();

  useEffect(() => {
    switch (source) {
      case 1:
        disptach(setShowGuardian(false));
        disptach(setShowNewsOrg(true));
        disptach(setShowTimes(false));
        break;
      case 2:
        disptach(setShowGuardian(true));
        disptach(setShowNewsOrg(false));
        disptach(setShowTimes(false));
        break;
      case 3:
        disptach(setShowGuardian(false));
        disptach(setShowNewsOrg(false));
        disptach(setShowTimes(true));
        break;
    }
  }, [source]);

  return (
    <div className="personal_container">
      <h3>Picks for you</h3>
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
          <div className="item_data">
            <span className="select_item"></span>
            <p className="bottom_item_text">News.org</p>
          </div>
          <div className="item_data">
            <span className="select_item"></span>
            <p className="bottom_item_text">Guardian</p>
          </div>
          <div className="item_data">
            <span className="select_item"></span>
            <p className="bottom_item_text">New York Times</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;
