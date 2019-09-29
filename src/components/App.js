import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBadges, selectBadge } from "../modules/badges";

import { Typography } from "@material-ui/core";

import TwitchAuthentication from "../util/TwitchAuthentication";
//import Extension from "./Extension/Extension";
import { authenticateUser } from "../modules/app";
import BadgeStatus from "./BadgeInfo/BadgeStatus";
import VideoPlayer from "./BadgeInfo/VideoPlayer";
import BadgeListItem from "./Badges/BadgeListItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.twitch = window.Twitch ? window.Twitch.ext : null;
    this.state = {
      finishedLoading: false,
      theme: "light",
      isVisible: true,
      selectedBadge: null
    };
  }

  contextUpdate(context, delta) {
    if (delta.includes("theme")) {
      this.setState(() => {
        return { theme: context.theme };
      });
    }
  }

  visibilityChanged(isVisible) {
    this.setState(() => {
      return {
        isVisible
      };
    });
  }

  componentDidMount() {
    if (this.twitch) {
      this.twitch.onAuthorized(auth => {
        this.props.authenticateUser(auth.token, auth.userId);
        this.props.fetchBadges();
      });

      this.twitch.onVisibilityChanged((isVisible, _c) => {
        this.visibilityChanged(isVisible);
      });

      this.twitch.onContext((context, delta) => {
        this.contextUpdate(context, delta);
      });
    }
  }

  componentWillUnmount() {
    if (this.twitch) {
      this.twitch.unlisten("broadcast", () =>
        console.log("successfully unlistened")
      );
    }
  }

  handleBadgeClick = badge => {
    this.props.selectBadge(badge);
  };

  // TODO: Prolly replace this with BadgeList component
  renderBadgeList() {
    const { badges } = this.props.badges;
    const overrideUlStyle = {
      paddingLeft: "3%"
    };
    if (badges) {
      return (
        <ul style={overrideUlStyle}>
          {badges.map((item, key) => {
            return (
              <BadgeListItem
                key={key}
                badge={item}
                handleBadgeClick={this.handleBadgeClick}
              />
            );
          })}
        </ul>
      );
    }
  }

  renderCurrentBadge() {
    const { selectedBadge } = this.props.badges;
    if (selectedBadge) {
      return <BadgeStatus badge={selectedBadge} />;
    }
    return <p>No Badge Selected</p>;
  }

  render() {
    if (this.props.app.authenticated && this.state.isVisible) {
      return (
        <div className="App">
          {this.renderCurrentBadge()}
          <Typography component="h2" variant="overline">
            Your Badges
          </Typography>
          {this.renderBadgeList()}
        </div>
      );
    } else {
      return <div className="App">Loading...</div>;
    }
  }
}

const mapStateToProps = state => ({
  app: state.app,
  badges: state.badges
});

export default connect(
  mapStateToProps,
  { authenticateUser, fetchBadges, selectBadge }
)(App);
