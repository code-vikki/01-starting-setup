import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  const expense = props.expense;
  const title = expense.title;
  const amount = expense.amount;
  const date = expense.date;

  return (
    <div className="expenses">
      <ExpenseItem title={title} amount={amount} date={date}></ExpenseItem>
    </div>
  );
}

export default Expense;
