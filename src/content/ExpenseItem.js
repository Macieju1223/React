import './ExpenseItem.css';

function ExpenseItem(propts) {

    return (
        <div className='expense-item'>
            <div>{propts.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{propts.title}</h2>
                <div className='expense-item__price'>${propts.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
