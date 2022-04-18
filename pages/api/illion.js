import axios from "axios";

const headers = {
  'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
   
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
    'X-API-KEY':'19e857ab-fcbe-4d6a-903a-e151c37abda1'
  };

  const mainUrl='https://apitest.bankfeeds.com.au/v1'
  //const mainUrl='https://jsonplaceholder.typicode.com'

  export const baseHttp=axios.create({
    baseURL:mainUrl,
    headers:headers
  })

  export const getinstituion=()=>baseHttp.request('/institutions');
  
  //export const getinstituion=()=>fetch(mainUrl+'/institutions',{headers});