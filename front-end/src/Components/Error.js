import { Link } from 'react-router-dom';
export default function Error() {
  return (
    <div>
      <h1>Looks Like There Was An Error With Your Request!</h1>
      <img
        src={require('../Assets/thumbs_up_yamazaki.gif')}
        alt='ManFaceDownOnTheGround'
      />
      <Link to={`/`}>
        <button id='back'>Back</button>
      </Link>
    </div>
  );
}
