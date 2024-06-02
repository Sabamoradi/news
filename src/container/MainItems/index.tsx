import { useEffect } from "react";
import Item from "../../components/Item";
import { selectShowGuardian } from "../../store/guardian/slice";
import { selectShowNewsOrg } from "../../store/newApi/slice";
import { useSelector } from "../../store/store";
import { selectShowTimes } from "../../store/times/slice";
import "./style.scss";
import { newsApiCategories } from "../../configs/mainConfig";
import { useDispatch } from "react-redux";
import { setAllCategories } from "../../store/general/slice";
import { GuardianData } from "../../store/guardian/types";
import { TimesData } from "../../store/times/types";
import { NewsApiData } from "../../store/newApi/types";

interface Props {
  newsApiItem: NewsApiData[];
  guardianItems: GuardianData[];
  selectorTimesApi: TimesData[];
}

const MainItems = (props: Props) => {
  const { newsApiItem, guardianItems, selectorTimesApi } = props;

  const showGuardian = useSelector(selectShowGuardian);
  const showNewsOrg = useSelector(selectShowNewsOrg);
  const showTimes = useSelector(selectShowTimes);
  const dispatch = useDispatch();

  useEffect(() => {
    const guardianCat:string[]  = guardianItems.map((el: GuardianData) => el.pillarName);
    const timesCat = selectorTimesApi.map((el: TimesData) => el.section);
    let allCategories = newsApiCategories.concat(guardianCat, timesCat);

    allCategories = allCategories?.filter(function (
      item: string,
      index: number,
      inputArray: any
    ) {
      return inputArray.indexOf(item) == index;
    });
    dispatch(setAllCategories(allCategories));
  }, [newsApiItem, guardianItems, selectorTimesApi]);

  return (
    <div className="main_container">
      <div className="main_wrapper">
        {showNewsOrg !== false && (
          <>
            <p className="title_news">news.org</p>
            {newsApiItem?.map((el: NewsApiData, index: number) => {
              return (
                <Item
                  key={`${index}-news`}
                  title={el.title}
                  author={el.author}
                />
              );
            })}
          </>
        )}
      </div>
      <div className="main_wrapper">
        {showGuardian !== false && (
          <>
            <p className="title_news">Guardian</p>
            {guardianItems.map((el: GuardianData, index: number) => {
              return (
                <>
                  <Item
                    key={`${index}-newsG`}
                    title={el.webTitle}
                    author={el.author}
                  />
                </>
              );
            })}
          </>
        )}
      </div>
      <div className="main_wrapper">
        {showTimes !== false && (
          <>
            <p className="title_news">Times</p>
            {selectorTimesApi.map((el: TimesData, index: number) => {
              return (
                <Item
                  key={`${index}-newsT`}
                  title={el.title}
                  author={el.source}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MainItems;
