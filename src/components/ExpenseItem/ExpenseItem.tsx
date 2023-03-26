import { IExpenseItem } from "../../shared/interfaces/expanseItem";
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import "./ExpenseItem.scss";

function ExpenceItem(props: { expenseItem: IExpenseItem }) {
  const expenseItem: IExpenseItem = props.expenseItem;

  return (
    <div className="expense-item">
      <ExpenseDate date={expenseItem.date} />
      <div className="expense-item__info">
        <h2 className="expense-item__info__name">{expenseItem.title}</h2>
        <div className="expense-item__info__price">${expenseItem.amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
