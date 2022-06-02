import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QsIcds-mDuc_0D_i0_xoJad68DVfu1EZZnS2Z0j7k5Y' 
      },
})
