import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim().length === 0) {
      toast.error("Goal must not be empty!");
      return;
    }

    dispatch(createGoal(text));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Goal</label>
          <input type="text" name="text" value={text} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
