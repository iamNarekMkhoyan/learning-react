import "./App.scss";
import Expenses from "./base/components/features/Expenses/Expenses";
import Card from "./base/components/ui/Card/Card";
import { IExpenseItem } from "./base/shared/interfaces/expanseItem";

function App() {
  const componentClassName = "app-component";
  const expenses: IExpenseItem[] = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className={componentClassName}>
      <Card className={componentClassName + "__card"}>
        <Expenses expenses={expenses} />
      </Card>
    </div>
  );
}

export default App;
