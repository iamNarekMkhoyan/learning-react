import "./ExpenseDate.scss";

const ExpenseDate = (props: { date: Date }) => {
  const componntClassName = "expense-date";
  const year: number = props.date.getFullYear();
  const month: string = props.date.toLocaleString("en-US", { month: "long" });
  const day: string = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className={componntClassName}>
      <div className={componntClassName + "__month"}>{month}</div>
      <div className={componntClassName + "__year"}>{year}</div>
      <div className={componntClassName + "__day"}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
