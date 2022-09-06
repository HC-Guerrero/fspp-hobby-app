import { Link } from 'react-router-dom';
import './Home.css';
export default function Home() {
  return (
    <main className='Home'>
      <Link className='indexLink' to='/games'>
        <h1>Click Me For a List of Vidya Games</h1>
      </Link>
    </main>
  );
}
