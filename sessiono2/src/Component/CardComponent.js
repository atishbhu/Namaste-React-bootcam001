import CardBodyComponent from "./CardBodyComponent";
import "./Card.style.css";
import SearchComponent from "./SearchComponent";
import { useState, useEffect } from "react";
import { datas } from "../utils/data";
import { Link } from "react-router-dom";

const CardComponent = ({ filterData }) => {
  return (
    <div className="card-container">
      {filterData.map((data) => (
        <Link to={`/user/${data.userName}`}>
          <CardBodyComponent data={data} />
        </Link>
      ))}
    </div>
  );
};

const CardBody = () => {
  const [filterData, setFilterData] = useState(datas);
  return (
    <>
      <SearchComponent setFilterData={setFilterData} />
      <CardComponent filterData={filterData} />
    </>
  );
};

export default CardBody;
