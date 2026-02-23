import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

authFetch.interceptors.request.use(
  (request) => {
    console.log("request sent");
    // request.headers.common["Accept"] = "application/json";   doesn't exist eny more
    request.headers = {
      ...request.headers,
      Accept: "application/json",
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);
authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log("Full error:", error);
    console.log("Response:", error.response);
    console.log("Request:", error.request);
    console.log("Message:", error.message);
    if (error.request.status === 404) {
      // do something
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  },
);
export default authFetch;
