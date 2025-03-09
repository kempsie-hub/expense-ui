import axios from "axios";

axios.interceptors.request.use(
   function(config){
      config.headers['Authorization'] = getToken();
      return config;
   },
   function(error){

      return Promise.reject(error);
   }
);

const EXPENSE_TYPES_BASE_URL = "api/expense-types";

const REGISTER_USER_API_URL = "v1/auth";

const LOGIN_URL = "v1/auth/login";

export const getExpenseTypes = () =>  axios.get(EXPENSE_TYPES_BASE_URL);

export const createExpenseType = (expenseType) =>  axios.post(EXPENSE_TYPES_BASE_URL, expenseType);

export const getExpenseType = (expenseTypeId) =>  axios.get(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId);

export const updateExpenseType = (expenseTypeId, employee) =>  axios.put(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId, employee);

export const deleteExpenseType = (expenseTypeId) =>  axios.delete(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId);

export const registerUser = (userDTO) => axios.post(REGISTER_USER_API_URL, userDTO);

export const loginAPICall = (username, password) => axios.post(LOGIN_URL, {usernameOrEmail: username, password});

export const storetoken = (token) =>  localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");