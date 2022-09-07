import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export default function Edit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [games, updateGame] = useState({
    name: ' ',
    type: ' ',
    price: ' ',
    language: ' ',
    Store_Link: ' ',
    publisher: ' ',
    developer: ' ',
    platform: ' ',
  });

  const updateGameForm = (updatedGame) => {
    axios
      .put(`${URL}/games/${id}`, updatedGame)
      .then(() => {
        navigate('/games');
      })
      .catch((error) => console.warn('catch', error));
  };

  useEffect(() => {
    axios.get(`${URL}/games/${id}`).then(
      (response) => updateGame(response.data.payload),
      (error) => navigate('*'),
    );
  }, [id, navigate]);

  const handleTextChange = (event) => {
    updateGame({ ...games, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGameForm(games, id);
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
          <label htmlFor='Description'>Description:</label>
          <input
            id='description'
            type='text'
            value={games.description}
            onChange={handleTextChange}
            placeholder='What is it about?'
          />
          <div>
            <input id='editSubmit' type='submit' />
            <Link to={`/games/${id}`}>
              <button id='editBack'>Back</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
