import "./Card.style.css";

const CardBodyComponent = ({ data }) => {
    const { img, name, designation, adress } = data;
    return (
        <div className="card-body">
            <img src={img} alt="profile picture" width="100px" />
            <h2>{name}</h2>
            <h3>{designation}</h3>
            <h4>{adress}</h4>
        </div>
    )
}

export default CardBodyComponent;