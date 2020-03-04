//This is the compoonent used to create each circle card

import React from "react";
import PropTypes from "prop-types";
import CircleUIBuilder from "../circlebuilder/CircleUIBuilder";

import { participantConverter } from "../../services/utilityServices";
import { MonthNames } from "../../constants/months";

const CardTemplate = props => {
  let localViewClickHandler = circle => {
    props.onViewClick(circle);
  };

  let { circle } = props;
  let circleStart = new Date(circle.startDate);
  let newDate = `${
    MonthNames[circleStart.getMonth()]
    } ${circleStart.getDate()} ${circleStart.getFullYear()}`;

  const participants = circle.participants && participantConverter(circle.participants);

  return (
    <div className="col-sm-12">
      <div className="card">
        <div className="card-header pb-0">
          <h5 className="text-center pb-1">{circle.name}</h5>
          <div style={{ textAlign: '-webkit-center' }} >
            <CircleUIBuilder size={45} distance={20} participants={participants} />
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              Start: {newDate}
            </div>
            <div className="col-sm-6" style={{ textAlign: "right", marginBottom: "5px" }}>
              Status: {circle.circleStatus}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              Contribution Amount: ${circle.contribution}
            </div>
            <div
              className="col-sm-6"
              style={{ textAlign: "right", marginBottom: "5px" }}
            >
              Number of Participants: {circle.participantsTotal}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={localViewClickHandler.bind(this, circle)}
          >
            View
          </button>
        </div>
      </div>
    </div >
  );
};

CardTemplate.propTypes = {
  circle: PropTypes.objectOf(PropTypes.shape),
  id: PropTypes.number,
  name: PropTypes.string,
  monthNames: PropTypes.arrayOf(PropTypes.string),
  circleStart: PropTypes.instanceOf(Date),
  newDate: PropTypes.string,
  onViewClick: PropTypes.func
};

export default CardTemplate;
