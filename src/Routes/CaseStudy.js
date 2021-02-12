import { useState } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import { useModal } from '../Hooks/useModal';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import Icon from '../Components/Icon';
import { CASE_STUDIES } from '../Services/Data';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';
import CardList from '../Components/CardList';
import Video from '../Components/Video';
import ProgressiveImage from '../Components/ProgressiveImage';
import Collection from '../Components/Collection';

const CaseStudy = (props) => {
  const { openModal, closeModal, isOpen, Modal } = useModal();
  const [activeImage, setActiveImage] = useState();

  const params = useParams();
  const caseStudyId = params.id;

  const caseStudy = CASE_STUDIES.find(
    (caseStudy) => caseStudy.id === caseStudyId
  );

  const renderAdditionalImages = () => {
    return caseStudy.additionalImages.map((image, i) => (
      <button
        key={`additional-image-${i}`}
        className='button button--invisible'
        onClick={(e) => {
          setActiveImage(image.src);
          openModal(e);
        }}
      >
        <ProgressiveImage
          className='display--block max-width--100 shadow'
          src={image.src}
          caption={image.caption}
          alt=''
        />
      </button>
    ));
  };

  if (caseStudy || caseStudyId === 'collection') {
    return (
      <main>
        {isOpen && activeImage && (
          <Modal>
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className='button button--invisible'
                  style={{ marginBottom: '16px' }}
                  onClick={(e) => closeModal(e)}
                >
                  <Icon name='close' color='white' size='large' />
                  <span className='visually-hidden'>Close</span>
                </button>
              </div>
              <ProgressiveImage
                style={{
                  width: 'inherit',
                  height: 'auto',
                }}
                src={activeImage}
              />
            </div>
          </Modal>
        )}
        {caseStudyId === 'collection' ? (
          <Collection setActiveImage={setActiveImage} openModal={openModal} />
        ) : (
          <>
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
                  {caseStudy.problem.content.map((problem, i) => (
                    <p key={`problem-${i}`} className='p'>
                      {problem}
                    </p>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className='content__split__column'>
                  {caseStudy.problem.images.map((image, i) => (
                    <button
                      key={`problem-image-${i}`}
                      className='button button--invisible margin-top--large'
                      onClick={(e) => {
                        setActiveImage(image.src);
                        openModal(e);
                      }}
                    >
                      <div>
                        <ProgressiveImage
                          className='shadow display--block max-width--100'
                          src={image.src}
                          caption={image.caption}
                          alt=''
                        />
                      </div>
                    </button>
                  ))}
                </AnimatedWaypoint>
              </div>
              <div className='content__split content__split--reverse-small'>
                <AnimatedWaypoint className='content__split__column'>
                  {caseStudy.solution.images.map((image, i) => (
                    <button
                      key={`solution-image-${i}`}
                      className='button button--invisible margin-top--large'
                      onClick={(e) => {
                        setActiveImage(image.src);
                        openModal(e);
                      }}
                    >
                      <ProgressiveImage
                        className='shadow display--block max-width--100'
                        src={image.src}
                        caption={image.caption}
                        alt=''
                      />
                    </button>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className='content__split__column'>
                  <div className='hr' />
                  <h3 className='h3'>Solution</h3>
                  {caseStudy.solution.content.map((solution, i) => (
                    <p key={`solution-${i}`} className='p'>
                      {solution}
                    </p>
                  ))}
                </AnimatedWaypoint>
              </div>
              <div className='content__split'>
                <AnimatedWaypoint className='content__split__column'>
                  <div className='hr' />
                  <h3 className='h3'>Result</h3>
                  {caseStudy.result.content.map((result, i) => (
                    <p key={`result-${i}`} className='p'>
                      {result}
                    </p>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className='content__split__column'>
                  {caseStudy.result.images.map((image, i) => (
                    <button
                      key={`result-image-${i}`}
                      className='button button--invisible margin-top--large'
                      onClick={(e) => {
                        setActiveImage(image.src);
                        openModal(e);
                      }}
                    >
                      <ProgressiveImage
                        className='browser display--block max-width--100'
                        src={image.src}
                        caption={image.caption}
                        alt=''
                      />
                    </button>
                  ))}
                </AnimatedWaypoint>
                <AnimatedWaypoint className='margin-top--large'>
                  <CardList cards={renderAdditionalImages()} />
                </AnimatedWaypoint>
                {caseStudy.videoUrl && (
                  <AnimatedWaypoint className='margin--auto margin-top--large'>
                    <Video
                      className='browser'
                      poster={caseStudy.videoPoster}
                      src={caseStudy.videoUrl}
                    />
                  </AnimatedWaypoint>
                )}
              </div>
            </div>
          </>
        )}
        <Footer>
          <Link className='a a--large' to='/work'>
            Back
          </Link>
        </Footer>
      </main>
    );
  }
  return <Redirect to='/not-found' />;
};

export default CaseStudy;
