import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const URL = process.env.REACT_APP_API_URL;

export default function New() {
  let navigate = useNavigate();

  const [games, createGame] = useState({
    editing_rights: false,
    name: '',
    type: '',
    price: '',
    language: '',
    Store_Link: '',
    publisher: '',
    developer: '',
    platform: '',
  });

  const newGame = (games) => {
    axios
      .post(`${URL}/games`, games)
      .then(() => {
        navigate('/games');
      })
      .catch((error) => console.warn('catch', error));
  };

  const handleTextChange = (event) => {
    createGame({ ...games, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newGame(games);
  };

  return (
    <>
      <div className='EditForm'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            value={games.name}
            onChange={handleTextChange}
            placeholder='Game Name'
            required
          />
          <label htmlFor='type'>Genre:</label>
          <input
            id='type'
            type='text'
            value={games.type}
            onChange={handleTextChange}
            placeholder='Game Genre'
          />
          <label htmlFor='price'>Price:</label>
          <input
            id='price'
            type='number'
            value={games.price}
            onChange={handleTextChange}
            placeholder='Price in $'
          />
          <label htmlFor='language'>Language:</label>
          <input
            id='language'
            type='text'
            value={games.language}
            onChange={handleTextChange}
            placeholder='Game UI and Dialog Language'
            required
          />
          <label htmlFor='store_link'>Store Link:</label>
          <input
            id='store_link'
            type='text'
            value={games.Store_Link}
            onChange={handleTextChange}
            placeholder='Where can it be bought?'
          />
          <label htmlFor='publisher'>Publisher:</label>
          <input
            id='publisher'
            type='text'
            value={games.publisher}
            onChange={handleTextChange}
            placeholder='Company that handled distribution?'
            required
          />
          <label htmlFor='developer'>Developer:</label>
          <input
            id='developer'
            type='text'
            value={games.developer}
            onChange={handleTextChange}
            placeholder='Company that made the game?'
            required
          />
          <label htmlFor='platform'>Platform:</label>
          <input
            id='platform'
            type='text'
            value={games.platform}
            onChange={handleTextChange}
            placeholder='What hardware can run the game?'
            required
          />
          <div>
            <input id='submit' type='submit' />
            <Link to={`/games`}>
              <button id='backNew'>Back</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
