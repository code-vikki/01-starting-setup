import React,{useState}from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const[showForm,editShowForm]=useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const showFormHandler=()=>{
    editShowForm(true)
  }

  const cancelHandler=()=>{
    editShowForm(false)
  }



  return (
    <div className="new-expense">
      {!showForm?<button type="text" onClick={showFormHandler}>Add New Expense</button>:
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
      
    </div>
  );
};

export default NewExpense;
