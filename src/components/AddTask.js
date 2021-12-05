import { useState } from 'react';

const AddTask = ({setTaskList}) => {
  const [taskValue, setTaskValue] = useState('');

  const outputFormData = (e) => {
    e.preventDefault();
    setTaskList((list) => [...list, taskValue]);
    setTaskValue("");
  }

  return (
    <div>
      <form onSubmit={outputFormData}>
        <label for="task">Task</label>
        <input value={taskValue} id="task" name="task" type="text" onChange={(e) => setTaskValue(e.target.value)}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTask
