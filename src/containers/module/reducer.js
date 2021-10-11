import {
  GET_LIST_SONG_FAIL,
  GET_LIST_SONG_REQUEST,
  GET_LIST_SONG_SUCCESS,
  PLAY_SONG,
} from "./types";

const initialState = {
  listSong: null,
  loading: false,
  error: null,
  activeSong: null,
};

const listSongReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_SONG_REQUEST:
      return { ...state, loading: true };
    case GET_LIST_SONG_SUCCESS:
      return { ...state, loading: false, listSong: payload.data.song };
    case GET_LIST_SONG_FAIL:
      return { ...state, loading: false, error: payload };
    case PLAY_SONG:
      return { ...state, activeSong : payload };
    default:
      return state;
  }
};

export default listSongReducer;
