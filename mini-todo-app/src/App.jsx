
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  //task ko local storage se  task variable me la rahe hai taki  use kar paye
  const [text, settext] = useState('');
  const [task, settask] = useState(() => {
    const savedTasks = localStorage.getItem('task');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchText, setSearchText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim() === '') return;

    const data = {
      text: text.trim(),
      id: nanoid(),
    };

    const updatedTaskList = [...task, data];

    //  yha se task bhej jo ki updatedtask hai yani ki pichla task our ane wala taask
    settask(updatedTaskList);
    localStorage.setItem('task', JSON.stringify(updatedTaskList));

    settext('');
  };

  const handlclick = (id) => {
    const updatedTaskList = task.filter((task) => task.id !== id);

    // yh ape jo hum logo ne id se   data ko filter kiya hai o data le rahe hai 
    settask(updatedTaskList);
    localStorage.setItem('task', JSON.stringify(updatedTaskList));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-md shadow-lg max-w-md">
      <TaskForm
        text={text}
        settext={settext}
        submitHandler={submitHandler}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <TaskList task={task} handlclick={handlclick} searchText={searchText} />
    </div>
  );
};

export default App;
