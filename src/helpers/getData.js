import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_HOST,
  },
  params: {
    lang: "tr",
    geo: "TR",
  },
};

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

export const getData = async (endpoint) => {
  //burada try catch yerine then catch de kullanılır.
  try {
    const res = await axios.get(endpoint, options);
    return res.data;
  } catch (err) {
    console.log("Verileri çekerken bir sorun oluştu", err);
  }
};
