import React, { Component } from "react";
import { connect } from "react-redux";

class Badges extends Component {
  render() {
    if (this.props.badges) {
      return (
        <div>
          Badges
          <ul>
            {Object.values(this.props.badges).map((value, index) => {
              return <li key={index}>{value.id}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  app: state.app,
  badges: state.badges
});

export default connect(mapStateToProps)(Badges);
