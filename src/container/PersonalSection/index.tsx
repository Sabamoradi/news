import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { SourceConfig, sourcesConfig } from "../../configs/mainConfig";
import { selectGuardianData, setGuardianData, setShowGuardian } from "../../store/guardian/slice";
import { selectNewsApiData, setShowNewsOrg } from "../../store/newApi/slice";
import { useDispatch, useSelector } from "../../store/store";
import { selectTimesData, setShowTimes } from "../../store/times/slice";
import "./style.scss";
import { selectAllCategories } from "../../store/general/slice";

const PersonalSection = () => {
  const [source, setSources] = useState(0);
  const [category, setCategory] = useState("");
  const disptach = useDispatch();
  const allCategories = useSelector(selectAllCategories);

  const selectorNewsApi = useSelector(selectNewsApiData);
  const selectorGuardianApi = useSelector(selectGuardianData);
  const selectorTimesApi = useSelector(selectTimesData);

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


  const filterData = (data:string) =>{
    console.log(allCategories);
    setCategory(data)
    const newData = selectorGuardianApi.filter((el:any)=>{
      return el.pillarName === data
    })
    console.log(newData,allCategories);
    
    disptach(setGuardianData(newData))
  }

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
          {allCategories.map((el: string, index: number) => {
            return (
              <div className="item_data" key={`${index}-category`}>
                <span className={`select_item ${category === el ? "active" : ""}`} onClick={()=>filterData(el)}></span>
                <p className="bottom_item_text">{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;
