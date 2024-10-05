import { TravelType } from "../types";

type CardsType = {
  item: TravelType;
};

const Cards = (props: CardsType) => {
  return (
    <div className="card--container">
      <img src={props.item.imageUrl} alt="" className="card--image" />
      <div className="card--details">
        <div className="card--location">
          <img
            src="./images/location.png"
            alt="location"
            className="card--cursor"
          />
          <h4>{props.item.location}</h4>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <h5>
          {props.item.startDate}-{props.item.endDate}
        </h5>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};
export default Cards;
