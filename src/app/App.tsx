import {Link} from 'react-router-dom';
import './styles/index.scss';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import { classNames } from 'shared/lib/classNames/classNames';




const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames( 'app', { hovered: true, selected: false}, [theme, 'cls2'])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;