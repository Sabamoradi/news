import axios from "axios";

const apiFirstBaseURL = 'https://newsapi.org/v2'; // newsapi
const apiSecondBaseURL = 'https://content.guardianapis.com';  //The Guardian
const apiThird = 'https://api.nytimes.com' //times

export const httpNewsApiService = axios.create({
  baseURL: apiFirstBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpGuardianService = axios.create({
  baseURL: apiSecondBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpTimesService = axios.create({
  baseURL: apiThird,
  headers: {
    "Content-Type": "application/json",
  },
});

httpNewsApiService.interceptors.request.use(async (config: any) => {
  return config;
});
httpGuardianService.interceptors.request.use(async (config: any) => {
  return config;
});
httpTimesService.interceptors.request.use(async (config: any) => {
  return config;
});

httpNewsApiService.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    console.log(error);

    return Promise.reject(error);
  }
);
httpGuardianService.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    console.log(error);

    return Promise.reject(error);
  }
);
httpTimesService.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    console.log(error);

    return Promise.reject(error);
  }
);
