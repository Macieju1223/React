import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem 
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
            <ExpenseItem 
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}
            /> 
            <ExpenseItem 
                date={props.items[2].date}
                title={props.items[2].title}
                amount={props.items[2].amount}
            /> 
            <ExpenseItem 
                date={props.items[3].date}
                title={props.items[3].title}
                amount={props.items[3].amount}
            /> 
            <ExpenseItem 
                date={props.items[4].date}
                title={props.items[4].title}
                amount={props.items[4].amount}
            /> 
            <ExpenseItem 
                date={props.items[5].date}
                title={props.items[5].title}
                amount={props.items[5].amount}
            /> 
            <ExpenseItem 
                date={props.items[6].date}
                title={props.items[6].title}
                amount={props.items[6].amount}
            /> 
            <ExpenseItem 
                date={props.items[7].date}
                title={props.items[7].title}
                amount={props.items[7].amount}
            /> 
            <ExpenseItem 
                date={props.items[8].date}
                title={props.items[8].title}
                amount={props.items[8].amount}
            /> 
        </div>
    );
}
export default Expenses