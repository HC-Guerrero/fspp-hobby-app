import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { DarkModeStyles } from './globalDarkModeParams';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './darkModeThemes';

function Navbar() {
  const [theme, setTheme] = useState('light');
  const toggleDarkMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DarkModeStyles></DarkModeStyles>
      <div className='navDiv'>
        <nav>
          <div>
            <h1 className='title'>
              <Link className='active' to='/'>
                G x 2
              </Link>
            </h1>
          </div>
          <div>
            <button onClick={toggleDarkMode}>Enable DarkMode</button>
          </div>
          <div>
            <button id='Create' className='createButton'>
              <Link className='createGameBtn' to='games/new'>
                Create Game Entry
              </Link>{' '}
            </button>
          </div>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;
