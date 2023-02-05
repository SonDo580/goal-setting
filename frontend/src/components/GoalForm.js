import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createGoal, reset } from "../features/goals/goalSlice";
import Spinner from "./Spinner";

function GoalForm() {
  const dispatch = useDispatch();

  const { isLoading, isError, message } = useSelector((state) => state.goals);

  const [goal, setGoal] = useState("");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isLoading, isError, message, dispatch]);

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const goalData = goal.trim();
    if (goalData.length === 0) {
      toast.error("Goal must not be empty!");
      return;
    }

    dispatch(createGoal(goalData));
    setGoal("");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Goal</label>
          <input type="text" name="text" value={goal} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
