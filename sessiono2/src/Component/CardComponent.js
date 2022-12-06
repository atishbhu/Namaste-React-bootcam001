import CardBodyComponent from "./CardBodyComponent";
import "./Card.style.css";
import SearchComponent from "./SearchComponent";
import { useState } from "react";
import {datas} from './data'

const CardComponent = ({ filterData }) => {
  return (
    <div className="card-container">
      {filterData.map((data) => {
        return <CardBodyComponent data={data} />;
      })}
    </div>
  );
};

const CardBody = () => {
  const [filterData, setFilterData] = useState(datas);
  return (
    <>
      <SearchComponent setFilterData={setFilterData}/>
      <CardComponent filterData={filterData} />
    </>
  );
};

export default CardBody;
