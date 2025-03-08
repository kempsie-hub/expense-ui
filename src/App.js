import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListExpenseTypeComponent from "./component/ListExpenseTypeComponent";
import ExpenseComponent from "./component/ExpenseComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <>
              <BrowserRouter>
                  <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<ListExpenseTypeComponent/>} />
                        <Route path='/add-expense-type' element={<ExpenseComponent/>} />
                        <Route path='/edit-expense-type/:id' element={<ExpenseComponent/>}/>
                    </Routes>
                  <FooterComponent/>
              </BrowserRouter>
            </>
      </header>
    </div>
  );
}

export default App;
