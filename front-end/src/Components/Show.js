import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Show.css';

function Show() {
  const URL = process.env.REACT_APP_API_URL;
  const [games, getGame] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${URL}/games/${id}`)
      .then((response) => getGame(response.data.payload))
      .catch((error) => console.warn(error.message));
  }, [URL, id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/games/${id}`)
      .then(() => {
        navigate('/games');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='aGame'>
      <section>
        <table className='showTable'>
          <tr className='showTR'>
            {' '}
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Price </th>
            <th>Language</th>
            <th>Store Link</th>
            <th>Publisher</th>
            <th>Developer</th>
            <th>Platform</th>
          </tr>
          <tbody className='gameData'>
            <td>
              <img
                src={games.thumbnail}
                height='100'
                width='150'
                alt='game image'
              />
            </td>
            <td>{games.name}</td>
            <td>{games.type}</td>
            <td> ${games.price}</td>
            <td>{games.language}</td>
            <td> {games.store_link}</td>

            <td>{games.publisher}</td>
            <td>{games.developer}</td>
            <td>{games.platform}</td>
          </tbody>
          <h1>Screenshots: </h1>
          <div>
            <tbody className='screenshots'>
              <td>
                <img
                  src={games.screenshot1}
                  height='400'
                  width='450'
                  alt='game image1'
                />
              </td>
              <br />
              <td>
                <img
                  src={games.screenshot2}
                  height='400'
                  width='450'
                  alt='game image2'
                />
              </td>
              <br />
              <td>
                <img
                  src={games.screenshot3}
                  height='400'
                  width='450'
                  alt='game image3'
                />
              </td>
            </tbody>
          </div>
          <h1>
            <strong>Gameplay:</strong>
          </h1>
          <div>
            <ReactPlayer url={games.video} />
          </div>
          <h1>Summary:</h1>
          <p>{games.description} </p>
        </table>
        <Link to={`/games/${id}/edit`}>
          <button id='edit'>Edit</button>
        </Link>
        <Link to={'/games'}>
          <button id='back'>Back</button>
        </Link>
        <button id='delete' onClick={handleDelete}>
          Delete
        </button>
      </section>
    </div>
  );
}
export default Show;
