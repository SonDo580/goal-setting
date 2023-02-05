import axios from "axios";

const API_URL = "/api/goals";

const create = async (goalData) => {
  const response = await axios.post(API_URL, goalData);
  return response.data;
};

const goalService = {
  create,
};

export default goalService;
