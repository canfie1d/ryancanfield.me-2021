import { NavLink } from 'react-router-dom';
import Icon from './Icon';

const Navigation = (props) => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink
            className='nav__link'
            activeClassName='nav__link--active'
            to='/'
            exact
          >
            <Icon
              className='nav__link__icon'
              icon='about'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>About</span>
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className='nav__link'
            activeClassName='nav__link--active'
            to='/writing'
            exact
          >
            <Icon
              className='nav__link__icon'
              icon='writing'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>Writing</span>
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className='nav__link'
            activeClassName='nav__link--active'
            to='/work'
            exact
          >
            <Icon
              className='nav__link__icon'
              icon='work'
              color='white'
              size='large'
            />
            <span className='nav__link__title'>Work</span>
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className='nav__link'
            activeClassName='nav__link--active'
            to='/contact'
            exact
          >
            <Icon
              className='nav__link__icon'
              icon='contact'
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
