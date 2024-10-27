import React from "react";
import ReactDOM from "react-dom/client";
import TRIP from "./images/TRIP.png";

// HEADER.............
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={TRIP} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// BODY.............

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="card">
      <img
        className="food-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "389205",
      name: "Hotel Sagar Executive",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/15/ec0d138e-eb72-456d-b785-081bb7d4e8d9_389205 SS.jpg",
      locality: "Jalna Road",
      areaName: "Sathe Chowk",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "South Indian",
        "Ice Cream",
        "Pizzas",
        "Biryani",
      ],
      avgRating: 4.4,
      parentId: "101741",
      avgRatingString: "4.4",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/hotel-sagar-executive-jalna-road-sathe-chowk-rest389205",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "131745",
      name: "Anvita Veg Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4fbd3b93-d240-4355-856c-a443811bd961_131745.jpg",
      locality: "Jalna Road",
      areaName: "Vipra Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Desserts",
        "Ice Cream",
        "Fast Food",
      ],
      avgRating: 4.3,
      parentId: "34606",
      avgRatingString: "4.3",
      totalRatingsString: "5.8K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/anvita-veg-restaurant-jalna-road-vipra-nagar-rest131745",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "131755",
      name: "Sai Prasad Family Restaurant",
      cloudinaryImageId: "plchvysb03aenzg90odb",
      locality: "Datta Nagar",
      areaName: "Garden Road",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Punjabi", "Biryani"],
      avgRating: 4.3,
      veg: true,
      parentId: "175350",
      avgRatingString: "4.3",
      totalRatingsString: "696",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "ABOVE ₹799",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/sai-prasad-family-restaurant-datta-nagar-garden-road-rest131755",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "342304",
      name: "Maithili Resto Park",
      cloudinaryImageId: "om3pkaiqepm169r6x7od",
      locality: "Kranti Nagar",
      areaName: "Kranti Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Tandoor",
        "Maharashtrian",
        "Biryani",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "130414",
      avgRatingString: "4.2",
      totalRatingsString: "768",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/maithili-resto-park-kranti-nagar-rest342304",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "133551",
      name: "Hotel Maithili",
      cloudinaryImageId: "y2coccwxbgmtan3wgnrm",
      locality: "Dp Road",
      areaName: "Kranti Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Maharashtrian", "Punjabi"],
      avgRating: 4.3,
      veg: true,
      parentId: "100075",
      avgRatingString: "4.3",
      totalRatingsString: "5.0K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/hotel-maithili-dp-road-kranti-nagar-rest133551",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "660031",
      name: "M/S Hotel New Almas",
      cloudinaryImageId: "7523eede1fdf0941404ca229e86cb105",
      locality: "Katkat Pura Main Rd",
      areaName: "Bashirganj",
      costForTwo: "₹250 for two",
      cuisines: ["Mughlai", "Biryani", "Hyderabadi"],
      avgRating: 4.2,
      parentId: "396368",
      avgRatingString: "4.2",
      totalRatingsString: "424",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/m-s-hotel-new-almas-katkat-pura-main-rd-bashirganj-rest660031",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "132958",
      name: "Bansi Pav bhaji",
      cloudinaryImageId: "dyxs1fouiwsl1q3pdtyu",
      locality: "Shahunagar",
      areaName: "Sathe Chowk",
      costForTwo: "₹150 for two",
      cuisines: ["Fast Food", "Chinese"],
      avgRating: 4.1,
      veg: true,
      parentId: "41580",
      avgRatingString: "4.1",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/bansi-pav-bhaji-shahunagar-sathe-chowk-rest132958",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "770548",
      name: "Anvita Hotel",
      cloudinaryImageId: "8d380b27a1d2572239587beb3bcd6644",
      locality: "Jalna Road",
      areaName: "Shahunagar",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "South Indian", "Beverages", "Indian"],
      avgRating: 4.3,
      parentId: "460150",
      avgRatingString: "4.3",
      totalRatingsString: "230",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 22:56:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/anvita-hotel-jalna-road-shahunagar-rest770548",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "481939",
      name: "Hotel Divya Garden",
      cloudinaryImageId: "rqeijggdlwoupcr9dxpc",
      locality: "Barshi Road",
      areaName: "Shivaji Maharaj Chowk",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Kebabs", "Chinese"],
      avgRating: 4.3,
      parentId: "289888",
      avgRatingString: "4.3",
      totalRatingsString: "201",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/hotel-divya-garden-barshi-road-shivaji-maharaj-chowk-rest481939",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "617653",
      name: "Grand yashoda",
      cloudinaryImageId: "hfi1nqbvsqkqcyrdudl1",
      locality: "Sahara Colony",
      areaName: "Swaraj Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Fast Food", "Pastas"],
      avgRating: 4.1,
      veg: true,
      parentId: "368130",
      avgRatingString: "4.1",
      totalRatingsString: "567",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/grand-yashoda-sahara-colony-swaraj-nagar-rest617653",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "454281",
      name: "Green Court",
      cloudinaryImageId: "uyuibc3funb2j5gbetkf",
      locality: "Jalna Road",
      areaName: "Sathe Chowk",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Juices",
        "Ice Cream",
        "Pizzas",
        "Mughlai",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "273277",
      avgRatingString: "4.3",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/green-court-jalna-road-sathe-chowk-rest454281",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "131744",
      name: "Hotel NeelKamal",
      cloudinaryImageId: "i3wcjq7dmfdn0fvsjtrh",
      locality: "Beed City",
      areaName: "Nagar Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Italian",
        "Desserts",
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "100573",
      avgRatingString: "4.2",
      totalRatingsString: "657",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/hotel-neelkamal-city-nagar-road-rest131744",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "131943",
      name: "Hotel Good Luck",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/28/cb012536-1e98-45a5-9145-6ec37dda7fd8_131943.ss.jpg",
      locality: "Jalna Road",
      areaName: "Shahunagar",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "shawarma", "Tandoor"],
      avgRating: 4.3,
      parentId: "99100",
      avgRatingString: "4.3",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/hotel-good-luck-jalna-road-shahunagar-rest131943",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "221700",
      name: "Testy Chicken Chinese Fast Food and Chicken 65 Cen",
      cloudinaryImageId: "vy9ac2ku22cofavmimsq",
      locality: "Prakash Ambedkar Nagar",
      areaName: "Barshi Naka",
      costForTwo: "₹150 for two",
      cuisines: ["Chinese", "Biryani", "shawarma"],
      avgRating: 4.1,
      parentId: "558591",
      avgRatingString: "4.1",
      totalRatingsString: "512",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹550",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/testy-chicken-chinese-fast-food-and-chicken-65-cen-prakash-ambedkar-nagar-barshi-naka-rest221700",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "389243",
      name: "Sagar Family Restaurant",
      cloudinaryImageId: "tym99yw4cxmf44l0ek48",
      locality: "Jalna Road",
      areaName: "Sathe Chowk",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "South Indian",
        "Punjabi",
        "Pizzas",
        "Biryani",
      ],
      avgRating: 4.3,
      parentId: "174456",
      avgRatingString: "4.3",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/sagar-family-restaurant-jalna-road-sathe-chowk-rest389243",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "431628",
      name: "Shree Foods",
      cloudinaryImageId: "m9amhdkme4b3m5hizqxx",
      locality: "Beed City",
      areaName: "KALIKA NAGAR BEED",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery"],
      avgRating: 4.9,
      veg: true,
      parentId: "184506",
      avgRatingString: "4.9",
      totalRatingsString: "11",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/shree-foods-city-kalika-nagar-beed-rest431628",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "775635",
      name: "Beed Tiffin Services",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/15/7ce632f8-841f-46a9-9387-9e1a16024915_775635.jpg",
      locality: "Azizpura Rd",
      areaName: "Swaraj nagar",
      costForTwo: "₹149 for two",
      cuisines: [
        "Biryani",
        "Rolls & Wraps",
        "Maharashtrian",
        "Snacks",
        "Burgers",
        "Chinese",
      ],
      avgRating: 3.8,
      parentId: "462433",
      avgRatingString: "3.8",
      totalRatingsString: "150",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/beed-tiffin-services-azizpura-rd-swaraj-nagar-rest775635",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "452834",
      name: "Hotel Golden Choice",
      cloudinaryImageId: "uz78bthg0hspmwduxoyn",
      locality: "Barshi Road",
      areaName: "Barshi Naka",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
      avgRating: 4.1,
      veg: true,
      parentId: "272552",
      avgRatingString: "4.1",
      totalRatingsString: "143",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/hotel-golden-choice-barshi-road-barshi-naka-rest452834",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "173564",
      name: "Swaraj Hotel",
      cloudinaryImageId: "bet5i22k4sm8lesksb3m",
      locality: "Datta Nagar",
      areaName: "Mitra Nagar Chowk",
      costForTwo: "₹170 for two",
      cuisines: ["Biryani", "Maharashtrian"],
      avgRating: 4,
      parentId: "199031",
      avgRatingString: "4.0",
      totalRatingsString: "893",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-27 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-31810e86-82f6-4c48-825b-f3acd2559898",
    },
    cta: {
      link: "https://www.swiggy.com/city/beed/swaraj-hotel-datta-nagar-mitra-nagar-chowk-rest173564",
      type: "WEBLINK",
    },
  },
];

// Body...........................
const Body = () => {
  return (
    <div className="body">
      <div className="Search"></div>
      <div className="res-list">
        {resObj.map((Restaurant) => (
          <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  );
};

// APP..............
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
