import './App.css';
import ExpenseItem from './content/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Car Insurence', amount: 294, date: new Date(2022,11,1)},
    {title: 'manamana', amount: 1, date: new Date(2022,7,7)},
  ];
  return (
    <div className="App">
      <h2>App example</h2>
        <ExpenseItem 
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
        ></ExpenseItem>
                <ExpenseItem 
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
        ></ExpenseItem>
      </div>
  );
}

export default App;
