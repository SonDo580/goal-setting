import { FaTrash } from "react-icons/fa";

function GoalItem(props) {
  const { goal } = props;

  return (
    <div className="goal">
      <div className="goal-date">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>

      <h3 className="goal-text">{goal.text}</h3>

      <button className="close">
        <FaTrash />
      </button>
    </div>
  );
}

export default GoalItem;
