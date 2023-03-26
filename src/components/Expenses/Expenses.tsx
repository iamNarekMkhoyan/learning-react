import { IExpenseItem } from "../../shared/interfaces/expanseItem";
import ExpenceItem from "../ExpenseItem/ExpenseItem";

function Expenses(props: { expenses: IExpenseItem[] }) {
  return (
    <div>
      <ExpenceItem expenseItem={props.expenses[0]} />
      <ExpenceItem expenseItem={props.expenses[1]} />
    </div>
  );
}

export default Expenses;
