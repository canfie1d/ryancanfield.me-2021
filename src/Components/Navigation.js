import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';

const Navigation = (props) => {
  const location = useLocation();

  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink
            className={classNames(
              'nav__link',
              location.pathname === '/' && 'nav__link--disabled'
            )}
            activeClassName='nav__link--active'
            to='/'
            exact
          >
            <Icon
              className='nav__link__icon'
              name='about'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>About</span>
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={classNames(
              'nav__link',
              location.pathname === '/work' && 'nav__link--disabled'
            )}
            activeClassName='nav__link--active'
            to='/work'
            exact
          >
            <Icon
              className='nav__link__icon'
              name='work'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>Work</span>
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={classNames(
              'nav__link',
              location.pathname === '/writing' && 'nav__link--disabled'
            )}
            activeClassName='nav__link--active'
            to='/writing'
            exact
          >
            <Icon
              className='nav__link__icon'
              name='writing'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>Writing</span>
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={classNames(
              'nav__link',
              location.pathname === '/contact' && 'nav__link--disabled'
            )}
            activeClassName='nav__link--active'
            to='/contact'
            exact
          >
            <Icon
              className='nav__link__icon'
              name='contact'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
