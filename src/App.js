import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {id: 'asfdbtu43a', title: 'Car insurence', amount: 294.65, date: new Date(2021, 2, 1)},
  {id: 'asy6kytjg3', title: 'Food', amount: 404.54, date: new Date(2022, 8, 18)},
  {id: 'aasdagg323', title: 'Party Time', amount: 220, date: new Date(2020, 6, 20)},
  {id: 'a463g3aafq', title: 'Clothes', amount: 150.99, date: new Date(2021, 3, 8)}
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
