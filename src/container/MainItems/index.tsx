import Item from "../../components/Item";
import "./style.scss";

interface Props {
  newsApiItem: any;
  guardianItems:any;
  selectorTimesApi:any;
}

const MainItems = (props: Props) => {
  const { newsApiItem,guardianItems,selectorTimesApi } = props;
  return (
    <div className="main_container">
      {newsApiItem.map((el:any,index:number) => {
        return <Item key={`${index}-news`} title={el.title} author={el.author}/>;
      })}
      {guardianItems.map((el:any,index:number) => {
        return <Item key={`${index}-newsG`} title={el.webTitle} author={el.author}/>;
      })}
      {selectorTimesApi.map((el:any,index:number) => {
        return <Item key={`${index}-newsT`} title={el.title} author={el.source}/>;
      })}
    </div>
  );
};

export default MainItems;
