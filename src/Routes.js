import React from 'react';
import { Route, Switch } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// PAGES
import About from './Routes/About';
import Writing from './Routes/Writing';
import Contact from './Routes/Contact';
import Work from './Routes/Work';
import NotFound from './Routes/NotFound';

export default class Routes extends React.Component {
  render() {
    return (
      <TransitionGroup id='TransitionGroup'>
        <CSSTransition
          key={this.props.location.key}
          classNames='fade'
          timeout={{ enter: 1000, exit: 300 }}
        >
          <Switch location={this.props.location}>
            <Route exact path="/" component={About} />
            <Route exact path='/writing' component={Writing} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  };
}
