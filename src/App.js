import logo from './logo.svg';
import './App.css';
import ExpenseTypeComponent from './component/ExpenseTypeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <ExpenseTypeComponent/>
        </>
      </header>
    </div>
  );
}

export default App;
