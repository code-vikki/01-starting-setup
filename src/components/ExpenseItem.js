import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  
  const[title,setTitle]=useState(props.title);
  
  const clickHandler = () => {
    setTitle("Priya I can push to Git Somehow")
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>button</button>
    </Card>
  );
}

export default ExpenseItem;
