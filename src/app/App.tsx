import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames( 'app', { hovered: true, selected: false}, [theme, 'cls2'])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;