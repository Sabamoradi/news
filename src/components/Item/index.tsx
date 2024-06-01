import "./style.scss";

interface Props {
  title: string;
  author: string;
}

const Item = (props: Props) => {
  const { title, author } = props;
  return (
    <div className="item_wrapper">
      <div className="text_wrapper">
        <p className="title">{title}</p>
        <p className="desc">{author}</p>
      </div>
    </div>
  );
};

export default Item;
