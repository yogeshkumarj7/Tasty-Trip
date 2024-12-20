// import React, { useState } from "react";
// import { GITHUB_USER_API } from "../utils/constants";
// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userData: [],
//     };
//   }

//   //   Making the api call

//   async componentDidMount() {
//     const data = await fetch(GITHUB_USER_API);
//     const toJson = await data.json();
//     console.log(toJson);
//     this.setState({
//       userData: toJson,
//     });
//   }

//   componentDidUpdate() {
//     console.log("Component did update called");
//   }

//   componentWillUnmount() {
//     console.log("Component will update called");
//   }

//   // const {name,location}=this.state.userData;

//   render() {
//     const { name, location, avatar_url } = this.state.userData;

//     return (
//       <div className="user-card">
//         <img className="avtar-url" src={avatar_url}></img>
//         <h3>{name}</h3>
//         <p>{location}</p>
//         <p>contact:yogesh@37</p>
//       </div>
//     );
//   }
// }

// export default User;
import React, { useState, useEffect } from "react";
import { GITHUB_USER_API } from "../utils/constants";

const User = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchGithubData();
  }, []);

  const fetchGithubData = async () => {
    try {
      const data = await fetch(GITHUB_USER_API);
      const json = await data.json();
      setUserData(json);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  const { name, location, avatar_url } = userData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {avatar_url && (
        <img
          className="w-20 h-20 mx-auto rounded-full object-cover mb-4 "
          src={avatar_url}
          alt={name}
        />
      )}
      <h3 className="text-xl font-bold text-teal-700 mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{location}</p>
      {/* <p className="text-orange-500">contact: yogesh@37</p> */}
    </div>
  );
};

export default User;
