const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-gm7riU9wfuSdmSAn6mucLBUw";
const getCoinList = () =>{
    return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&enx_cg_demo_api_key=${API_KEY}`
}
export {getCoinList}