import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ task, handlclick,searchText }) => {
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
        <h1 className="text-center text-lg text-gray-500">No task pending</h1>
      )}
    </ol>
  );
};

export default TaskList;
