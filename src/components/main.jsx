import { BiLocationPlus } from "react-icons/bi";
function Main(props) {
  return (
    <div className="main">
      <img className="card-img" src={props.imageUrl} alt="mount fuji" />
      <div className="card-content">
        <p className="location">
          {" "}
          <span><BiLocationPlus /></span>{props.title}{" "}
            <a href={props.googleMap} className="location-link">View on Google Maps</a>{" "}
         
        </p>
        <h2 className="location-name">{props.location}</h2>
        <h3 className="date">{props.startDate} {props.endDate}</h3>
        <p className="location-des">
         {props.description}
        </p>
      </div>
    </div>
  );
}

export default Main;
