import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      return navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, user, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goal Dashboard</p>

        <GoalForm />

        <section className="content">
          {goals.length === 0 ? (
            <h3>You haven't set any goal</h3>
          ) : (
            <div className="goals">
              {goals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </div>
          )}
        </section>
      </section>
    </>
  );
}

export default Dashboard;
