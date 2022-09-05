import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navDiv'>
      <nav>
        <h1 className='title'>
          <Link className='active' to='/'>
            G x 2
          </Link>
        </h1>
        <button id='Create' className='createButton'>
          <Link className='createGameBtn' to='games/new'>
            Create Game Entry
          </Link>{' '}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
