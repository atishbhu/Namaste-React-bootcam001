import { useState } from "react";
import { datas } from "./data";

const filteredData = (searchText) => {
  searchText = searchText.toLowerCase();
  return datas.filter((res) =>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchComponent = ({ setFilterData }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const seachResult = filteredData(searchText);
          setFilterData(seachResult);
        }}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchComponent;
