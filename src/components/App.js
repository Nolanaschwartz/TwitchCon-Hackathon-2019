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
      "id": "FirstZakumClear",
      "img": "zakum",
      "name": "Zakum",
      "imgUrl": "https://i.imgur.com/pKixFxj.png",
      "awarded": false,
      "active": true,
      "eventDate": "2018-07-23",
      "fullName": "First Zakum Clear",
      "description": "The first time I managed to clear Zakum as a level 137 dark night, along with my guildmates.",
      "clipUrl": "https://clips.twitch.tv/embed?clip=BlueHandsomeFerretCurseLit"
    };
    if (this.props.app.authenticated && this.state.isVisible) {
      return (
        <div className="App">
          {/*<BadgeStatus iconUrl={'https://i.imgur.com/pKixFxj.png'} awarded={true} active={true} name={'zakum'}/>*/}
          <BadgeStatus badge={tempBadge}
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
