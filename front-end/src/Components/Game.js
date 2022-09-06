import { Link } from 'react-router-dom';
import './Game.css';

const URL = process.env.REACT_APP_API_URL;
function Games({ game }) {
  return (
    <tr className='gameData'>
      <td>
        <img src={game.thumbnail} height='100' width='200' alt='game image' />
      </td>
      <td className='gameLinks'>
        <Link to={`/games/${game.id}`}>{game.name}</Link>
      </td>
      <td>{game.type}</td>
      <td> ${game.price}</td>
      <td>{game.language}</td>
    </tr>
  );
}
export default Games;
