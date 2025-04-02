import axios from "axios";

axios.interceptors.request.use(
   function(config){
      config.headers['Authorization'] = getToken();
      config.headers['Access-Control-Allow-Origin'] = '*';
      return config;
   },
   function(error){

      return Promise.reject(error);
   }
);

const EXPENSE_TYPES_BASE_URL = "api/expense-types";

const REGISTER_USER_API_URL = "v1/auth";

const LOGIN_URL = "v1/auth/login";

const PUT_EXPENSE_TYPES_BASE_URL = "api/expense-types";

export const getExpenseTypes = () =>  axios.get(EXPENSE_TYPES_BASE_URL);

export const createExpenseType = (expenseType) =>  axios.post(EXPENSE_TYPES_BASE_URL, expenseType);

export const getExpenseType = (expenseTypeId) => axios.get('/api/expense-types/3');
   // axios.get(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId);

export const updateExpenseType = (expenseTypeId, expenseType) =>  axios.put('http://localhost:8081/api/expense-types/3', expenseType);

export const deleteExpenseType = (expenseTypeId) =>  axios.delete(`/api/expense-types/+'/'+ expenseTypeId`);

export const registerUser = (userDTO) => axios.post(REGISTER_USER_API_URL, userDTO);

export const loginAPICall = (username, password) => axios.post(LOGIN_URL, {usernameOrEmail: username, password});

export const storetoken = (token) =>  localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username) => sessionStorage.setItem("authenticatedUser",username);

export const isUserLoggedIn = () => {
   
   const username = sessionStorage.getItem("authenticatedUser");
   console.log('s1...............');
   console.log('username: '+username);
   if(username){
      return true;
   } else {
      return false;
   }
};

export const getLoggedInUser = () => sessionStorage.getItem("authenticatedUser")

export const logout = () => {
   localStorage.clear();
   sessionStorage.clear();
   
};
