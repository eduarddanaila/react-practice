/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import AddGamers from './AddGamers.jsx';
import GameRoom from './GameRoom.jsx';

const Game = () => {
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState([]);

  const newPlayer = ({ target }) => {
    setPlayerName(target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
  };
  const handleAdd = () => {
    setPlayers((players) => [...players, playerName]);
  };
  return (
    <>
    <AddGamers submitHandler={submitForm} newPlayer={newPlayer} handleAdd={handleAdd}/>
    <GameRoom players={players}/>
    </>
  );
};
export default Game;
