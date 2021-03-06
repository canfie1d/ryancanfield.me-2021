import { useRef } from 'react';
import { Route } from 'react-router';
import { TransitionSwitch } from 'transition-switch';

// PAGES
import About from './Routes/About';
import Writing from './Routes/Writing';
import Contact from './Routes/Contact';
import Work from './Routes/Work';
import CaseStudy from './Routes/CaseStudy';
import NotFound from './Routes/NotFound';

const Routes = () => {
  const ref = useRef(null);

  return (
    <TransitionSwitch ref={ref} transition='fade-down'>
      <Route exact path='/' component={About} />
      <Route exact path='/writing' component={Writing} />
      <Route exact path='/work' component={Work} />
      <Route exact path='/work/:id' component={CaseStudy} />
      <Route exact path='/contact' component={Contact} />
      <Route component={NotFound} />
    </TransitionSwitch>
  );
};

export default Routes;
