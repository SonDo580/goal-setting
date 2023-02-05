import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem(props) {
  const { goal } = props;

  const dispatch = useDispatch();

  const handleDeleteGoal = (goalID) => {
    dispatch(deleteGoal(goalID));
  };

  return (
    <div className="goal">
      <div className="goal-date">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>

      <h3 className="goal-text">{goal.text}</h3>

      <button className="close" onClick={() => handleDeleteGoal(goal._id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default GoalItem;
