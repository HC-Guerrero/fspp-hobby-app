import { Link } from 'react-router-dom';
function Games({ game }) {
  return (
    <tr>
      <td>
        <Link to={`/games/${game.id}`}>{game.name}</Link>
      </td>

      <td>{game.type}</td>
      <td> ${game.price}</td>

      <td>{game.language}</td>
    </tr>
  );
}
export default Games;
