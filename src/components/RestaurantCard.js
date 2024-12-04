import { CDN_URL } from "../utils/constants";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRatingString,
  } = resData?.info;
  return (
    <div className="card w-[240px] h-[320px] flex flex-col rounded-lg shadow-xl bg-white p-2.5 m-5 cursor-pointer hover:scale-105 transition-transform">
      <img
        className="w-full h-[150px] object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      ></img>
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <h5 className="font-light whitespace-nowrap overflow-hidden text-ellipsis text-sm text-gray-800">
          {cuisines.join(",")}
        </h5>
        <h5 className="font-light text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          {areaName}
        </h5>

        <div className="flex items-center text-center justify-between mt-auto space-x-1">
          <div className="flex items-center justify-between mt-auto p-2 bg-gray-50 rounded-b-lg shadow-sm">
            {" "}
            <div className="flex items-center space-x-2">
              {" "}
              <div
                className={`
            flex items-center 
            px-3 py-1 
            rounded-full 
            text-sm 
            font-medium 
            ${
              avgRatingString < 4
                ? "bg-red-500/20 text-red-700"
                : "bg-green-500/20 text-green-700"
            }
          `}
              >
                {avgRatingString}
                <FontAwesomeIcon icon={faStar} className="ml-1.5 text-xs" />
              </div>{" "}
              <span className="text-gray-400 text-sm">•</span>{" "}
              <div className="flex items-center space-x-1 text-gray-600">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>{" "}
                <span className="text-sm">
                  {sla?.lastMileTravelString ?? "2.0 km"}
                </span>
              </div>
              <span className="text-gray-400 text-sm">•</span>{" "}
              <div className="flex items-center space-x-1 text-gray-600">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.172-.879-1.172-2.303 0-3.182s3.071-.879 4.243 0l.879.659V6l-3-3-3 3v2.818z"
                  />
                </svg>{" "}
                <span className="text-sm">{costForTwo ?? "₹200 for two"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
