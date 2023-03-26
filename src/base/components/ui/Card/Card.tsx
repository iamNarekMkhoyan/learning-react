import "./Card.scss";

type CardComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = (props: CardComponentProps) => {
  const componentClassName = "card-component " + (props.className ? props.className : "");
  return <div className={componentClassName}>{props.children}</div>;
};

export default Card;
