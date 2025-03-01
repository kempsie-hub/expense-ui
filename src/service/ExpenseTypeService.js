import axios from "axios";

const EXPENSE_TYPES_BASE_URL = "http://localhost:8080/api/expense-types";

const EMPLOYEE_ID = 2;

export const getExpenseTypes = () =>  axios.get(EXPENSE_TYPES_BASE_URL);