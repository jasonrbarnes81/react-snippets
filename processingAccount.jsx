//This created called the axios call to create the stripe account based on the token taht was returned when compleating to stripe OAuth
//steps. Once created it returned you to dashboard with all of the account information in state for use.

import React from "react";
import { Progress } from "reactstrap";
import PropTypes from "prop-types";
import * as Payment from "../../services/paymentService";


class Processing extends React.Component {
  componentDidMount() {
    let account = this.props.location.search;
    let firstSplit = account.split("=");
    let newAccount = firstSplit[1].split("&");
    let userAccount = newAccount[0];

    Payment.getAccountInfo(userAccount)
      .then(this.onAccountInfoSuccess)
      .catch(this.onAccountInfoError);
  }

  onAccountInfoError = errResponse => {
    _logger("Error Message", errResponse.response);
  };

  onAccountInfoSuccess = response => {
    _logger("success", response.item);
    this.props.history.push({
      pathname: `/dashboard`,
      state: { detail: response.item }
    });
  };

  render() {
    return (
      <div className="card mh-100">
        <div className="row mx-auto">
          <div className="col sm-9">
            <div className="card-body">
              Please wait while we process your account.....
              <Progress animated color="info" value="100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Processing.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape),
  history: PropTypes.objectOf(PropTypes.shape)
};

export default Processing;
