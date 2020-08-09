import React, { Fragment } from "react";
import YouTube from "react-youtube";
import { Typography } from "@material-ui/core";

class Video extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "720",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <Fragment>
        <YouTube videoId="6d1HBpgQ5Ck" opts={opts} onReady={this._onReady} />
        <Typography variant="h6" align="right">
          Computer History Museum
        </Typography>
        <Typography variant="h5">Pay Discrimination in Tech</Typography>
      </Fragment>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
