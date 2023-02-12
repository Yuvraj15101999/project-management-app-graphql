import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutation";
import { GET_CLIENTS } from "../queries/clientQueries";

export default function DeleteProjectButton({ project }) {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
