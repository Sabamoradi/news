import axios from "axios";

const apiFirstBaseURL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1038e30893ee46d296c0e6e36a8bdbfc'; // newsapi
const apiSecondBaseURL = 'https://content.guardianapis.com/search?page=1&api-key=f00667d7-6940-435f-8d7e-de4d135651ef';  //The Guardian
const apiThird = 'https://bbc-api.vercel.app/latest?lang=english' //BBC

export const httpService = axios.create({
  baseURL: apiFirstBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(async (config: any) => {
  return config;
});

httpService.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    console.log(error);

    return Promise.reject(error);
  }
);
