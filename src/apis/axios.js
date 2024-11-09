import axios from "axios";
  // If using neeto-cist library

  const snakeToCamel = (str) => {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  };
  
  // Recursively transform all object keys from snake_case to camelCase
  const keysToCamelCase = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(keysToCamelCase);
    } else if (obj !== null && obj && typeof obj === "object") {
      return Object.keys(obj).reduce((acc, key) => {
        const camelKey = snakeToCamel(key);
        acc[camelKey] = keysToCamelCase(obj[key]);
        return acc;
      }, {});
    }
    return obj;
  };

// Function to transform keys of response data from snake_case to camelCase
const transformResponseKeysToCamelCase = response => {
  if (response.data) {
    response.data = keysToCamelCase(response.data);
  }
};



// Response interceptor to automatically apply the transformation
const responseInterceptors = () => {
  axios.interceptors.response.use(response => {
    transformResponseKeysToCamelCase(response);
    return response.data; // Only return the transformed data
  });
};

// Function to set default headers
const setHttpHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

// Function to set the default base URL
const setBaseURL = () => {
  axios.defaults.baseURL = "https://your-api-url.com/";
};

// Combine everything into one function to initialize Axios
export default function initializeAxios() {
  setBaseURL();
  setHttpHeaders();
  responseInterceptors();
}
