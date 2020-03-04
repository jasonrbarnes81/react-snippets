//This is a component that listed the participants in a table format.

import React from "react";
import PropTypes from "prop-types";

const CircleParticipants = props => {
  const mapParticipants = (people, index) => {
    const getInitials = () =>
      `${people.firstName.charAt(0).toUpperCase()}${people.lastName
        .charAt(0)
        .toUpperCase()}`;

    return (
      <tr key={people.sortOrder}>
        <th scope="row">
          <div
            style={{
              borderRadius: "50% ",
              height: "50px",
              width: "50px",
              backgroundColor: props.colors[index],
              backgroundImage: `url('${people.avatarUrl}')`,
              backgroundSize: "contain",
              color: "#fff",
              textAlign: "center",
              paddingTop: "16px"
            }}
          >
            {!people.avatarUrl ? getInitials() : ""}
          </div>
        </th>
        <th>{people.sortOrder}</th>
        <th>{people.firstName + " " + people.mi + " " + people.lastName}</th>
        <th style={{ wordBreak: "break-word" }}>{people.email}</th>
      </tr>
    );
  };

  return (
    <tbody>
      {props.participants && props.participants.map(mapParticipants)}
    </tbody>
  );
};

CircleParticipants.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  participants: PropTypes.arrayOf(PropTypes.shape({}))
};

export default CircleParticipants;
