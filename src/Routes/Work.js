import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import OpenSourceList from '../Components/OpenSourceList';
import CardList from '../Components/CardList';
import TagList from '../Components/TagList';
import Card from '../Components/Card';
import DemoLink from '../Components/DemoLink';
import { CLIENTS, DEMOS, OPEN_SOURCE } from '../Services/Data';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

const Work = (props) => {
  // const renderProjectList = () => {
  //   const PROJECTS = [
  //     {
  //       title: "",
  //       url: "",
  //       description: "",
  //       image: ""
  //     },
  //     {
  //       title: "",
  //       url: "",
  //       description: "",
  //       image: ""
  //     }
  //   ];

  //   const projectList = [];

  //   for (let i = 0; i < PROJECTS.length; i++) {
  //     projectList.push(
  //       <Card key={i}>
  //         <div className='project'>
  //           <div className='project__column'>
  //             <h3 className='h3 project__title'>{PROJECTS[i].title}</h3>
  //             <p className='p'>{PROJECTS[i].description}</p>
  //             <a className='button'>Visit Site</a>
  //           </div>
  //           <div className='project__column'>
  //             <div className='project__image__wrapper'>
  //               <img className='project__image' src={PROJECTS[i].image} alt='' />
  //             </div>
  //           </div>
  //         </div>
  //       </Card>
  //     );
  //   }

  //   return projectList;
  // }

  const getDemoList = () => {
    return DEMOS.map((demo, i) => (
      <Card key={`${demo.title}-${i}`}>
        <DemoLink
          id={demo.id}
          title={demo.title}
          image={demo.image}
          hearts={demo.hearts}
        />
      </Card>
    ));
  };

  return (
    <main className='page fade'>
      <Introduction
        title='My Work.'
        subtitle='A selection of projects, demos &amp;&nbsp;clients.'
      />
      <div className='content' id='content'>
        <div className='hr' />
        <h3 className='h3'>Interface Demos</h3>
        <CardList cards={getDemoList()} />
        {/*<div className='hr' />
        <h3 className='h3'>Selected Projects</h3>
        {renderProjectList()}*/}
        <div className='content__split'>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3 client__list__header'>
              Companies I've worked with
            </h3>
            <TagList tags={CLIENTS} />
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Open source projects</h3>
            <OpenSourceList items={OPEN_SOURCE} />
          </AnimatedWaypoint>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Work;
