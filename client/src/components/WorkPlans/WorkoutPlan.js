import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Nav, Container } from "react-bootstrap"; //Jumbotron is not supported?
// import pic from "../../assets/img/banner-bg.jpg";

export class WorkoutPlan extends Component {
  componentDidMount() {
    const apiUrl = 'https://exercisedb.p.rapidapi.com/exercises';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log('Exercises', data));
  }
  render() {
  return <h1>Exercises has been generated please refer to the console</h1>
  }
}

export default WorkoutPlan;
