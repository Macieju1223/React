import { useState } from 'react';
import './ExpenseForm.css'


function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (event) => {setEnteredTitle(event.target.value);};
    const amountChangeHandler = (event) => {setEnteredAmount(event.target.value);};
    const dataChangeHandler = (event) => {setEnterDate(event.target.value);};

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enterDate)
        };
        console.log(expenseData);

        setEnterDate('');
        setEnteredAmount('');
        setEnteredTitle('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense'>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <labels>Title</labels>
                        <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' on onChange={amountChangeHandler} value={enteredAmount} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date'  min='2019-01-01' max='2026-12-31' onChange={dataChangeHandler} value={enterDate} />
                    </div>
                    <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;