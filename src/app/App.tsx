import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
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
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>    
    </div>
  );
};

export default App;