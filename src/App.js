import { useState } from 'react';
import AddTask from "./components/AddTask";

function App() {
  const [taskList, setTaskList] = useState(["one", "two", "three"]);

  return (
    <div className="App">
      <h1>Hello Todo 2022</h1>
      <AddTask setTaskList={setTaskList} />
      <ul>{taskList.map((value) => <li>{value}</li>)}</ul>
    </div>
  );
}

export default App;
