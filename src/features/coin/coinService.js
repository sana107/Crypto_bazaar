import axios from "axios";

const fetchTrendingcoins = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return response.data.coins;
};

const fetchCoin = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
//   console.log(response.data.market_data);
  return response.data;
};

const coinService = { fetchTrendingcoins, fetchCoin };

export default coinService;
