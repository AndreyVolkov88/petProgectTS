import React, { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        // throw new Error();
    }, []);

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls2'])}>
            <Suspense
                fallback=""
            >
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
