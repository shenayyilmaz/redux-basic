//Action creators
const selectSong = (song) => {
  // Return an action object
  return {
    type: "SONG_SELECTED",
    payload: {
      song: song,
    },
  };
};
