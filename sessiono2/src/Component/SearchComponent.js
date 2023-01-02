import { useState , useEffect} from "react";
import { datas } from "../utils/data";
import './SearchComponent.style.css'

const filteredData = (searchText) => {
  searchText = searchText.toLowerCase();
  return datas.filter((res) =>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchComponent = ({ setFilterData }) => {
  const [searchText, setSearchText] = useState("");
  const [user,setUser] = useState("");

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${user}`
      );
      setUser(result.data);
    } catch (e) {
      <h1>Error Occuried</h1>;
    }
  };

  return (
    <div className="search-container">
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
