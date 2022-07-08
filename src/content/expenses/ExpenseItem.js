import React, {useState} from 'react'

import './ExpenseItem.css';
import Expensedate from './Expensedate';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle('UPdated!!');
        console.log(title);
    };
    //const clickHandler = () => {
        //setTitle('Updated!!');
        //console.log(title)
    //}

    return (
        <div className='expense-item'>
            <Expensedate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}zł</div>
            </div>
            <div className='expense-item__buttom'>
                <buttom onClick={clickHandler}>change value</buttom>
            </div>
        </div>
    );
}

export default ExpenseItem;
