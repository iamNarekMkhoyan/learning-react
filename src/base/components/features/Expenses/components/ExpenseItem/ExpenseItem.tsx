import { IExpenseItem } from "../../../../../shared/interfaces/expanseItem";
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import "./ExpenseItem.scss";

function ExpenceItem(props: { expenseItem: IExpenseItem }) {
  const componentClassName = "expense-item";
  const expenseItem: IExpenseItem = props.expenseItem;

  return (
    <div className={componentClassName}>
      <ExpenseDate date={expenseItem.date} />
      <div className={componentClassName + "__info"}>
        <h2 className={componentClassName + "__info__name"}>{expenseItem.title}</h2>
        <div className={componentClassName + "__info__price"}>${expenseItem.amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
