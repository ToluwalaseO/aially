import React from "react";
import "./Destinations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const Destinations = () => {
  return (
    <section className="destinations">
      <h1>Different destinations</h1>
      <div className="destination-content">
        <p1>We explore the diverse ways in which this</p1>
        <p2>technology can revolutionize work across</p2>
        <p3>various industries and fields.</p3>
        <p4>Discover how AI can streamline processes</p4>
        <p5>and elevate your work to new heights.</p5>
        <a href="#applications"> Discover all applications <FontAwesomeIcon icon={faSquareArrowUpRight} /> </a>
      </div>
    </section>
  );
};

export default Destinations;
