import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

// define the peoople type(array of objects) with interface, 
export interface IState {
  people: {
    age: number
    name: string
    url: string
    note?: string
  }[],
}

const App = () => {
  const [people, setPeople] = useState<IState['people']>([{
    name: "Lebron James",
    url: "Allergic",
    age: 32,
    note: "Hey, this is my note"
  }])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
