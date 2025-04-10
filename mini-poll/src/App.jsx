import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import PollOption from './PollOption';

const App = () => {
  const [options, setOptions] = useState([
    {option: 'Dog', count: 0},
    {option: 'Cat', count: 0},
    {option: 'Rat', count: 0},
  ]);


  const handleVote = (index) => {
    const newOptions = [...options];
    newOptions[index].count += 1;
    setOptions(newOptions);
  };


  const getLeader = () => {
    return options.reduce((prev, current) => {
      return (prev.count > current.count) ? prev : current;
    });
  };

  const leader = getLeader();

  return (
    <div>
      <h1>Pet Poll System</h1>
        {options.map((option, index) => (
          <PollOption
            key={index}
            label={option.option}
            count={option.count}
            onVote={() => handleVote(index)}
          />
        ))}
          <h2>Current Leader: {leader.option} with {leader.count} votes</h2>
    </div>
  );
};

export default App
