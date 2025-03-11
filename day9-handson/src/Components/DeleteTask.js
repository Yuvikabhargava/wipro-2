import { useDispatch } from "react-redux";
import { deleteTask } from "../Store/taskSlice";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTask = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteTask(id)); // ✅ Ensure ID is passed as string
    navigate("/");
  };

  return (
    <div>
      <h2>Are you sure you want to delete this task?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default DeleteTask;
