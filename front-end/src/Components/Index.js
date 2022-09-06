import axios from 'axios';
import { useState, useEffect } from 'react';
import Games from './Game';
import './Index.css';

function Index() {
  const URL = process.env.REACT_APP_API_URL;
  const [games, getAllGames] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/games`)
      .then((response) => getAllGames(response.data.payload))
      .catch((error) => console.log(error.message));
  }, [URL]);

  return (
    <div className='gamesTable'>
      <section>
        <table>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Price </th>
            <th>Language</th>
          </tr>

          <tbody>
            {games.map((game) => {
              return <Games key={game.id} game={game} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
export default Index;
