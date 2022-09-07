import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/home.js';
import IndexPage from './Pages/index.js';
import EditGame from './Pages/edit.js';
import ShowGame from './Pages/show.js';
import NewGame from './Pages/new.js';
import ErrorGameRequest from './Pages/error.js';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='games/' element={<IndexPage />} />
          <Route path='games/new' element={<NewGame />} />
          <Route path='games/:id' element={<ShowGame />} />
          <Route path='games/:id/edit' element={<EditGame />} />
          <Route path='*' element={<ErrorGameRequest />} />
        </Routes>
        <script src='https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js'></script>
        <script src='../Comments.js'></script>
      </main>
    </BrowserRouter>
  );
};

export default App;
