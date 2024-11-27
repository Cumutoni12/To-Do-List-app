import React from "react";

function Addtask({ Addtask }) {
  const [task, setTask] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (task.trim()) {
      Addtask(task);
      setTask("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
    </form>
  );
}

export default Addtask;
