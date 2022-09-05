import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Link className='indexLink' to='/games'>
        <h1>Click Me For a List of Vidya Games</h1>
      </Link>
    </main>
  );
}
