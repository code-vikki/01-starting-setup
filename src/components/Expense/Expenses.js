import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

 
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map((expense) => 
           <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
};

export default Expenses;
