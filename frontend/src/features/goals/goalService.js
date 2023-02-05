import axios from "axios";

const API_URL = "/api/goals";

const create = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, { text: goalData }, config);
  return response.data;
};

const goalService = {
  create,
};

export default goalService;
