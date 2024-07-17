import axios from "axios";

export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  params: {
    x_cg_demo_api_key: "CG-YcoqUFHe5txeehZtAMBBQ2V3",
  },
});
