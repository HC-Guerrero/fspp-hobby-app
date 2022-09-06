import Home from '../Components/Home';
export default function HomePage() {
  return (
    <>
      <h1>Welcome to G x 2</h1>
      <img src={require('../Assets/gg_games.png')} alt='GoodGame logo' />
      <div>
        <Home />
      </div>
    </>
  );
}
