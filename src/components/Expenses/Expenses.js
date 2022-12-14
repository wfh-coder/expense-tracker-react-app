import React, { useState } from 'react';

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020')
    const selectYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onSelectYear={selectYearHandler} />
                <ExpensesList items={filteredExpenses}/>
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date} />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date} />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date} />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date} /> */}
            </Card>
        </div>
    );
}

export default Expenses;