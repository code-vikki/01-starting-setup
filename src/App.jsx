import Expense from "./components/Expense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.65, date: new Date(2022, 8, 25) },
    { title: "Toilet paper", amount: 97.65, date: new Date(2022, 6, 25) },
    { title: "New Desk", amount: 111.65, date: new Date(2021, 7, 24) },
    { title: "Tv", amount: 1294.65, date: new Date(2022, 8, 22) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
