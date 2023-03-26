import { IExpenseItem } from "../../../shared/interfaces/expanseItem";
import Card from "../../ui/Card/Card";
import "./Expenses.scss";
import ExpenceItem from "./components/ExpenseItem/ExpenseItem";

function Expenses(props: { expenses: IExpenseItem[] }) {
  const componentClassName = "expenses-component";
  return (
    <div className={componentClassName}>
      <Card className={componentClassName + "__card"}>
        <ExpenceItem expenseItem={props.expenses[0]} />
      </Card>
      <Card className={componentClassName + "__card"}>
        <ExpenceItem expenseItem={props.expenses[1]} />
      </Card>
    </div>
  );
}

export default Expenses;
