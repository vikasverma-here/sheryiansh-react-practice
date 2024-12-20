
import React, { createContext, useState } from 'react';
import { nanoid } from 'nanoid';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


const dataContext = createContext()
const App = () => {

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


    settask(updatedTaskList);
    localStorage.setItem('task', JSON.stringify(updatedTaskList));

    settext('');
  };

  const handlclick = (id) => {
    const updatedTaskList = task.filter((task) => task.id !== id);

  
    settask(updatedTaskList);
    localStorage.setItem('task', JSON.stringify(updatedTaskList));
  };

  return (
    <dataContext.Provider value={{ task,
      settask,
      text,
      settext,
      searchText,
      setSearchText,
      submitHandler,
      handlclick,}}>
 <div className="container mx-auto p-6 bg-gray-50 rounded-md shadow-lg max-w-md bg-zinc-700 ">
      <TaskForm/>
      <TaskList />
    </div>
    </dataContext.Provider>
   
  );
};

export default App;
export {dataContext}
