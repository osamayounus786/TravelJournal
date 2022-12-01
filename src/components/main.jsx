import card1 from "../images/card1.png";
function Main() {
  return (
    <div className="main">
      <img className="card-img" src={card1} alt="mount fuji" />
      <div className="card-content">
        <p className="location">
          {" "}
          <span>icon</span> JAPAN{" "}
            <a href="#" className="location-link">View on Google Maps</a>{" "}
         
        </p>
        <h2 className="location-name">Mount Fuji</h2>
        <h3 className="date"> Start date End Date</h3>
        <p className="location-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          voluptate necessitatibus quis inventore asperiores quo quibusdam porro
          quos, perferendis cumque at id provident doloribus qui quas, corporis
          nemo blanditiis nostrum?
        </p>
      </div>
    </div>
  );
}

export default Main;
