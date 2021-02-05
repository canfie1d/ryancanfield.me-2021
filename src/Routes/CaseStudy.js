import { Link, useParams } from 'react-router-dom';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import { CASE_STUDIES } from '../Services/Data';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';
import CardList from '../Components/CardList';

const CaseStudy = (props) => {
  const params = useParams();
  const caseStudyId = params.id;

  const caseStudy = CASE_STUDIES.find(
    (caseStudy) => caseStudy.id === caseStudyId
  );

  const renderAdditionalImages = () => {
    return caseStudy.additionalImages.map((image) => (
      <img className='max-width--100' src={image} alt='' />
    ));
  };

  return (
    <main>
      <Introduction
        key={caseStudy.id}
        super='Case Study:'
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
      />
      <div className='content' id='content'>
        <div className='content__split'>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Problem Analysis</h3>
            {caseStudy.problem.content.map((problem) => (
              <p className='p'>{problem}</p>
            ))}
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            {caseStudy.problem.images.map((image) => (
              <img className='max-width--100' src={image} alt='' />
            ))}
          </AnimatedWaypoint>
        </div>
        <div className='content__split content__split--reverse-small'>
          <AnimatedWaypoint className='content__split__column'>
            {caseStudy.solution.images.map((image) => (
              <img className='max-width--100' src={image} alt='' />
            ))}
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Solution</h3>
            {caseStudy.solution.content.map((solution) => (
              <p className='p'>{solution}</p>
            ))}
          </AnimatedWaypoint>
        </div>
        <div className='content__split'>
          <AnimatedWaypoint className='content__split__column'>
            <div className='hr' />
            <h3 className='h3'>Result</h3>
            {caseStudy.result.content.map((result) => (
              <p className='p'>{result}</p>
            ))}
          </AnimatedWaypoint>
          <AnimatedWaypoint className='content__split__column'>
            {caseStudy.result.images.map((image) => (
              <img className='max-width--100' src={image} alt='' />
            ))}
          </AnimatedWaypoint>
          <AnimatedWaypoint>
            <CardList cards={renderAdditionalImages()} />
          </AnimatedWaypoint>
        </div>
      </div>
      <Footer>
        <Link className='a a--large' to='/work'>
          Back
        </Link>
      </Footer>
    </main>
  );
};

export default CaseStudy;
