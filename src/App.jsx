import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.65, date: new Date(2022, 8, 25) },
    { title: "Toilet paper", amount: 97.65, date: new Date(2022, 6, 25) },
    { title: "New Desk", amount: 111.65, date: new Date(2021, 7, 24) },
    { title: "Tv", amount: 1294.65, date: new Date(2022, 8, 22) },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
