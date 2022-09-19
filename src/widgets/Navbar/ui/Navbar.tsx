import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  
  return (
    <div className={classNames(cls.navbar , {}, [className])}>
      <div className={cls.links}>
          <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} className={cls['main-link']} >
              Главная
          </AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls['main-link']} >
              О сайте
          </AppLink>
      </div>
    </div>
  );
};

export default Navbar;