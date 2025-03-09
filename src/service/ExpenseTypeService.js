import axios from "axios";

const EXPENSE_TYPES_BASE_URL = "http://localhost:8081/api/expense-types";

const REGISTER_USER_API_URL = "http://localhost:8081/v1/auth";

export const getExpenseTypes = () =>  axios.get(EXPENSE_TYPES_BASE_URL);

export const createExpenseType = (expenseType) =>  axios.post(EXPENSE_TYPES_BASE_URL, expenseType);

export const getExpenseType = (expenseTypeId) =>  axios.get(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId);

export const updateExpenseType = (expenseTypeId, employee) =>  axios.put(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId, employee);

export const deleteExpenseType = (expenseTypeId) =>  axios.delete(EXPENSE_TYPES_BASE_URL+'/'+ expenseTypeId);

export const registerUser = (userDTO) => axios.post(REGISTER_USER_API_URL, userDTO,  {
 headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
 }
});