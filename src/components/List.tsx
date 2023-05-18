import React from 'react';
import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        return (
          <li className='List' key={person.name}>
            <div className='List-header'>
              <img className="List-img" src={person.url} alt="" />
              <h2>{person.name}</h2>
            </div>
            <p>{person.age} years old</p>
            {person.note && <p className='List-note'>Note: {person.note}</p>}
          </li>
        );
      })}
    </ul>
  );
}

export default List;