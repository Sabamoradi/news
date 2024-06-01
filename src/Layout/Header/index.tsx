import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import "./style.scss";
import { useDispatch } from "../../store/store";
import { setSearchData } from "../../store/general/slice";
import { getNewsAPiSearchThunk } from "../../store/newApi/thunks";
import { getGuardianDataThunk } from "../../store/guardian/thunks";
import { getTimesSearchDataThunk } from "../../store/times/thunks";

const { Search } = Input;

const Header = () => {
  const dispatch = useDispatch();
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    dispatch(setSearchData(value));
    if (value.length > 0) {
      dispatch(getGuardianDataThunk(value));
      dispatch(getNewsAPiSearchThunk(value));
    }
  };

  return (
    <div className="header_container">
      <div className="input_wrapper">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Header;
