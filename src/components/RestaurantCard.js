import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
          <img 
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId }
          />
          <h3>{resData.info.name}</h3>
          <h4>{resData.infocuisines}</h4>
          <h4>{resData.info.avgRating}</h4>
          <h4>{resData.info.costForTwo}</h4>
          <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;