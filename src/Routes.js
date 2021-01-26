import { useRef } from 'react';
import { Route, Switch } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// PAGES
import About from './Routes/About';
import Writing from './Routes/Writing';
import Contact from './Routes/Contact';
import Work from './Routes/Work';
import NotFound from './Routes/NotFound';

const Routes = (props) => {
  const ref = useRef(null);

  return (
    <TransitionGroup id='TransitionGroup'>
      <CSSTransition
        nodeRef={ref}
        key={props.location.key}
        classNames='fade'
        timeout={{ enter: 0, exit: 0 }}
      >
        <Switch location={props.location}>
          <Route exact path='/' component={About} />
          <Route exact path='/writing' component={Writing} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
