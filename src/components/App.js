import React, { Component } from "react";
import { connect } from "react-redux";

import TwitchAuthentication from "../util/TwitchAuthentication";
//import Extension from "./Extension/Extension";
import { authenticateUser } from "../modules/app";
import BadgeStatus from "./Badges/BadgeStatus";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.twitch = window.Twitch ? window.Twitch.ext : null;
    this.state = {
      finishedLoading: false,
      theme: "light",
      isVisible: true
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

  render() {

    const tempBadge = {
      "id": "GodlyDagger",
      "img": "dagger",
      "name": "Dagger",
      "imgurl": "https://i.imgur.com/9WtMUFM.png",
      "awarded": true,
      "active": false,
      "eventdate": "2018-03-22",
      "fullname": "Godly Dagger Drop",
      "description": "Obtaining the best dagger in the server on Diablo 3.",
      "clipUrl": "https://clips.twitch.tv/embed?clip=SourAlluringPigBuddhaBar"
    };
    if (this.props.app.authenticated && this.state.isVisible) {
      return (
        <div className="App">
          {/*<BadgeStatus iconUrl={'https://i.imgur.com/pKixFxj.png'} awarded={true} active={true} name={'zakum'}/>*/}
          <VideoPlayer badge={tempBadge}
          />
        </div>
      );
    } else {
      return <div className="App">Loading...</div>;
    }
  }
}

const mapStateToProps = state => ({
  app: state.app
});

export default connect(
  mapStateToProps,
  { authenticateUser }
)(App);
