import React from 'react';

const TaskForm = ({ text, settext, submitHandler, searchText, setSearchText }) => {
  return (
  <>
  
    <form
      className="flex flex-col gap-4 mb-6"
      onSubmit={submitHandler}
    >
         <input
        type="text"
        placeholder="Search tasks"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => settext(e.target.value)}
        value={text}
        placeholder="Enter task"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        type="submit"
      >
        Add Task
      </button>
    </form>
    </>
  );
};

export default TaskForm;
