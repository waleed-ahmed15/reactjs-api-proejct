import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID FrnaYn2cjrEftRSX1rk1D_RUD2wPNLPvYBYS86nC114",
  },
});
