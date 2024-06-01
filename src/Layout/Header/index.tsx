import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import "./style.scss";

const { Search } = Input;

const Header = () => {
  return (
    <div className="header_container">
      <div className="input_wrapper">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
    </div>
  );
};

export default Header;
