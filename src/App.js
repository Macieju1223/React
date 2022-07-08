import './App.css';
import Expenses from './content/expenses/Expenses';
import NewExpenses from './content/newExpense/NewExpense';


function App() {
  const expenses = [
    {title: 'Car Insurence', amount: 294, date: new Date(2022,11,1)},
    {title: 'manamana', amount: 1, date: new Date(2022,7,7)},
    {title: 'mot insurence', amount: 209, date: new Date(2022,7,7)},
    {title: 'hummus', amount: 3.99, date: new Date(2022,7,7)},
    {title: 'baietka czosnnkowa', amount: 4.95, date: new Date(2022,7,7)},
    {title: 'kredki', amount: 1, date: new Date(2022,7,7)},
    {title: 'czynsz', amount: 859, date: new Date(2022,7,7)},
    {title: 'paliwo', amount: 66, date: new Date(2022,7,7)},
    {title: 'przeglad', amount: 68, date: new Date(2022,7,7)},
  ];
  return (
    <div className="App">
      <h2>TODO</h2>
      <NewExpenses />
      <Expenses items={expenses}/>
      </div>
  );
}

export default App;
