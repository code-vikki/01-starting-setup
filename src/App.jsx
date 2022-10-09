import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 294.65,
      date: new Date(2022, 8, 25),
    },
    {
      id: 2,
      title: "Toilet paper",
      amount: 97.65,
      date: new Date(2022, 6, 25),
    },
    { id: 3, title: "New Desk", amount: 111.65, date: new Date(2021, 7, 24) },
    { id: 4, title: "Tv", amount: 1294.65, date: new Date(2022, 8, 22) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => [newExpense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
