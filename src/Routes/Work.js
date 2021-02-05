// import { Link } from 'react-router-dom';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import OpenSourceList from '../Components/OpenSourceList';
import CardList from '../Components/CardList';
import TagList from '../Components/TagList';
import DemoLink from '../Components/DemoLink';
import {
  CLIENTS,
  DEMOS,
  OPEN_SOURCE,
  // PROJECTS
} from '../Services/Data';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';
import Recommendations from '../Components/Recommendations';

const Work = (props) => {
  // const renderProjectList = () => {
  //   return PROJECTS.map((project, i) => (
  //     <div className='card_row' key={i}>
  //       <div className='card__column card__column--auto'>
  //         <img
  //           className='card__image project__image'
  //           src={project.image}
  //           alt=''
  //         />
  //       </div>
  //       <div className='card__column card__column--auto'>
  //         <h3 className='h3 card__title project__title'>
  //           {project.title}
  //           <a href={project.link} target='_blank' rel='noopener noreferrer'>
  //             Visit
  //           </a>
  //         </h3>
  //         <div className='card__description-wrapper'>
  //           <p className='card__description'>{project.description}</p>
  //         </div>
  //         <Link to={project.url} className='button project__link'>
  //           Case Study
  //         </Link>
  //       </div>
  //     </div>
  //   ));
  // };

  const renderDemoList = () => {
    return DEMOS.map((demo, i) => (
      <DemoLink
        key={`${demo.title}-${i}`}
        id={demo.id}
        title={demo.title}
        image={demo.image}
        hearts={demo.hearts}
      />
    ));
  };

  return (
    <main>
      <Introduction
        title='My Work.'
        subtitle='A selection of projects, demos &amp;&nbsp;clients.'
      />
      <div className='content' id='content'>
        <div className='hr' />
        {/* <h3 className='h3'>
          <span className='tag__item tag__item--secondary'>NEW!</span> Case
          Studies
        </h3>
        <CardList twoWide cards={renderProjectList()} />
        <div className='hr hr--extra-margin' /> */}
        <h3 className='h3'>UI Experiments</h3>
        <CardList cards={renderDemoList()} clickable />
        <div className='content__split'>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr hr--extra-margin' />
            <h3 className='h3'>Open Source Projects</h3>
            <OpenSourceList items={OPEN_SOURCE} />
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr hr--extra-margin' />
            <h3 className='h3 client__list__header'>
              Companies I've Worked With
            </h3>
            <TagList tags={CLIENTS} />
          </AnimatedWaypoint>
        </div>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
};

export default Work;
