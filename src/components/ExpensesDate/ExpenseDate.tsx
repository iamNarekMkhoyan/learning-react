function ExpenseDate(props: { date: Date }) {
  const year: number = props.date.getFullYear();
  const month: string = props.date.toLocaleString("en-US", { month: "long" });
  const day: string = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item__date">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
