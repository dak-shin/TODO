import React, { useState } from 'react';
import IPfield from './components/ipfield';
import './App.css';

const App: React.FC = () => {

  const [task, settask] = useState<string>("");

  console.log(task)
  return (
    <div className="App">
      <div className="heading">Taskify</div>
      <IPfield task={task} settask={settask} />
    </div>
  );
}

export default App;
