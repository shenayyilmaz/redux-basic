export const songsReducer = () => {
  return [
    { title: "Title Soong 1", duration: "2:20" },
    { title: "Title Soong 2", duration: "3:40" },
    { title: "Title Soong 3", duration: "5:25" },
    { title: "Title Soong 4", duration: "6:40" },
    { title: "Title Soong 5", duration: "9:20" },
    { title: "Title Soong 6", duration: "19:20" },
  ];
};

// selectedSong = is current state

export const SelecetSongReducer = (selectedSong = "null", action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return song;
  }
};
