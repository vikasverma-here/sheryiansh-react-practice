import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { dataContext } from './App';
const TaskList = () => {
  const {task,handlclick,searchText}=useContext(dataContext)
    const filteredTasks = task.filter((t) =>
        t.text.toLowerCase().includes(searchText.toLowerCase()) 
      );
  return (
    <ol className="space-y-3">
      {filteredTasks.length > 0 ? (
        filteredTasks.map(({ text, id }) => (
          <TaskItem key={id} text={text} id={id} handlclick={handlclick} />
        ))
      ) : (
        <h1 className="text-center text-lg text-green-500">No task pending</h1>
      )}
    </ol>
  );
};

export default TaskList;
