import axios from "axios";

export const getTopAlbumList = async () => {
     try {
          const URL = "https://qtify-backend-labs.crio.do/albums/top";
          const response = await axios.get(URL);
          const list = response.data;
          //   console.log("topAlbumList", list);
          return list;
     } catch (error) {
          console("topAlbumList", error);
     }
};

export const getNewAlbumList = async () => {
     try {
          const URL = "https://qtify-backend-labs.crio.do/albums/new";
          const response = await axios.get(URL);
          const list = response.data;
          //   console.log("topAlbumList", list);
          return list;
     } catch (error) {
          console("topAlbumList", error);
     }
};

export const getSongList = async () => {
     try {
          const URL = "https://qtify-backend-labs.crio.do/songs";
          const response = await axios.get(URL);
          const list = response.data;
          //   console.log("topAlbumList", list);
          return list;
     } catch (error) {
          console("topAlbumList", error);
     }
};
export const getGenreList = async () => {
     try {
          const URL = "https://qtify-backend-labs.crio.do/genres";
          const response = await axios.get(URL);
          const list = response.data;
          //   console.log("topAlbumList", list);
          return list;
     } catch (error) {
          console("topAlbumList", error);
     }
};
