import callApi from "utils/callApi";

const {
  GET_LIST_SONG_REQUEST,
  GET_LIST_SONG_SUCCESS,
  GET_LIST_SONG_FAIL,
  PLAY_SONG,
} = require("./types");

const actGetListSongRequest = () => ({
  type: GET_LIST_SONG_REQUEST,
});

const actGetListSongSuccess = (listSong) => ({
  type: GET_LIST_SONG_SUCCESS,
  payload: listSong,
});

const actGetListSongFail = (error) => ({
  type: GET_LIST_SONG_FAIL,
  payload: error,
});

const playSong = (songId) => ({
  type: PLAY_SONG,
  payload: songId,
});

export const actPlaySong = (song) => {
  return (dispatch) => dispatch(playSong(song));
};
export const actGetListSong = () => {
  return async (dispatch) => {
    dispatch(actGetListSongRequest());
    try {
      const { data } = await callApi(
        "https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1"
      );
      dispatch(actGetListSongSuccess(data));
    } catch (error) {
      dispatch(actGetListSongFail(error));
    }
  };
};
