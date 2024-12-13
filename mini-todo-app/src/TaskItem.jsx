import React from 'react';

const TaskItem = ({ text, id, handlclick }) => {
  return (
    <li
      className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm hover:bg-gray-200 transition duration-200"
    >
      <span>{text}</span>
      <i
        className="ri-delete-bin-fill text-red-500 cursor-pointer hover:text-red-600 transition duration-200"
        onClick={() => handlclick(id)}
      ></i>
    </li>
  );
};

export default TaskItem;
