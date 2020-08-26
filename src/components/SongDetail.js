import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return "select something";
  }

  return (
    <div>
      <h1>Title:{song.title}</h1>
      <br />
      {song.duration}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedtSong };
};
export default connect(mapStateToProps)(SongDetail);
