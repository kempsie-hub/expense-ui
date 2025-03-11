import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListExpenseTypeComponent from "./component/ListExpenseTypeComponent";
import ExpenseComponent from "./component/ExpenseComponent";
import { RegisterComponent } from './component/RegisterComponent';
import LoginComponent from './component/LoginComponent';
import WelcomePageComponent from './component/WelcomePageComponent';
import { isUserLoggedIn } from './service/ExpenseTypeService';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
          <>
              <BrowserRouter>
                  <HeaderComponent/>
                    <Routes>
                        
                        <Route path='/' element={isUserLoggedIn()?<ListExpenseTypeComponent/>:<LoginComponent/>}/>
                        <Route path='/add-expense-type' element={<ExpenseComponent/>} />
                        <Route path='/edit-expense-type/:id' element={<ExpenseComponent/>}/>
                        <Route path='/register' element={<RegisterComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='/welcome' element={<WelcomePageComponent/>}/>
                    </Routes>
                  <FooterComponent/>
              </BrowserRouter>
            </>
      </header>
    </div>
  );
}

export default App;
