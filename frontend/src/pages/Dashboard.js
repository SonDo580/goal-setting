import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";
import { getGoals } from "../features/goals/goalSlice";

function Dashboard() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { goals } = useSelector((state) => state.goals);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getGoals());
    }
  }, [dispatch, navigate, user, goals]);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goal Dashboard</p>

        <GoalForm />
      </section>
    </>
  );
}

export default Dashboard;
