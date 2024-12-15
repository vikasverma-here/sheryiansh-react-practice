import React, { useState } from 'react';
import Pannel from './Pannel';

const App = () => {
  const [activePanel, setActivePanel] = useState(null); // State to track active panel

  const handlePanelClick = (panelTitle) => {
    setActivePanel((prev) => (prev === panelTitle ? null : panelTitle)); // Toggle logic
  };

  return (
    <div>
      <h1>React Accordion</h1>
      <Pannel
        title="Panel 1"
        isActive={activePanel === "Panel 1"}
        onClick={() => handlePanelClick("Panel 1")}
      >
        This is the content for Panel 1.
      </Pannel>
      <Pannel
        title="Panel 2"
        isActive={activePanel === "Panel 2"}
        onClick={() => handlePanelClick("Panel 2")}
      >
        This is the content for Panel 2.
      </Pannel>
      <Pannel
        title="Panel 3"
        isActive={activePanel === "Panel 3"}
        onClick={() => handlePanelClick("Panel 3")}
      >
        This is the content for Panel 3.
      </Pannel>
    </div>
  );
};

export default App;
