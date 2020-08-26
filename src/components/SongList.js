import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

const SongList = ({ songs, selectSong }) => {
  const renderList = () => {
    return songs.map((song) => {
      return (
        <div key={song.title}>
          {song.title} <button onClick={() => selectSong(song)}>Select</button>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};
export default connect(mapStateToProps, { selectSong })(SongList);
