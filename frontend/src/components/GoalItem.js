function GoalItem(props) {
  const { goal } = props;

  return (
    <div className="goal">
      <div className="goal-date">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>

      <h3 className="goal-text">{goal.text}</h3>
    </div>
  );
}

export default GoalItem;
