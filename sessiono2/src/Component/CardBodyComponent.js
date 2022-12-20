import "./Card.style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CardBodyComponent = ({ data }) => {
  const { userName } = data;
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, [userName]);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      setUser(result.data);
    } catch (e) {
      <h1>Error Occuried</h1>;
    }
  };

  return (
    <div className="card-body">
      <img src={user.avatar_url} alt="pic" width="100px" />
      <h1>{user.bio}</h1>
      <h2>{user.name}</h2>
      <h3>{user.location}</h3>
    </div>
  );
};

export default CardBodyComponent;
