import React, { useState } from "react";
import { GITHUB_USER_API } from "../utils/constants";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  //   Making the api call

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API);
    const toJson = await data.json();
    console.log(toJson);
    this.setState({
      userData: toJson,
    });
  }

  componentDidUpdate() {
    console.log("Component did update called");
  }

  componentWillUnmount() {
    console.log("Component will update called");
  }

  // const {name,location}=this.state.userData;

  render() {
    const { name, location, avatar_url } = this.state.userData;

    return (
      <div className="user-card">
        <img className="avtar-url" src={avatar_url}></img>
        <h3>{name}</h3>
        <p>{location}</p>
        <p>contact:yogesh@37</p>
      </div>
    );
  }
}

export default User;
