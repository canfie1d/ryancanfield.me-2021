import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { RECOMMENDATIONS } from '../Services/Data';
import Icon from './Icon';

const Recommendations = (props) => {
  const [recommendation, setRecommendation] = useState();
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const randomNumber = Math.floor(
      Math.random() * Math.floor(RECOMMENDATIONS.length)
    );
    const randomRecc = {
      ...RECOMMENDATIONS[randomNumber],
      ...{ index: randomNumber },
    };
    setRecommendation(randomRecc);
  }, []); // eslint-disable-line

  const updateRecomendation = (direction) => {
    if (direction === 'prev') {
      if (recommendation.index === 0) {
        setRecommendation({
          ...RECOMMENDATIONS[RECOMMENDATIONS.length - 1],
          ...{ index: RECOMMENDATIONS.length - 1 },
        });
      } else {
        setRecommendation({
          ...RECOMMENDATIONS[recommendation.index - 1],
          ...{ index: recommendation.index - 1 },
        });
      }
    } else {
      if (recommendation.index === RECOMMENDATIONS.length - 1) {
        setRecommendation({ ...RECOMMENDATIONS[0], ...{ index: 0 } });
      } else {
        setRecommendation({
          ...RECOMMENDATIONS[recommendation.index + 1],
          ...{ index: recommendation.index + 1 },
        });
      }
    }
  };

  const classes = ['recommendation', readMore && 'recommendation--auto'];

  if (recommendation) {
    return (
      <div key={recommendation.name} className={classNames(classes)}>
        <div className='recommendation__content'>
          <div className='recommendation__header'>
            <div className='recommendation__header-column'>
              <span className='tag__item tag__item--secondary'>NEW!</span>
              <p className='p p--small'>Recommended By:</p>
              <h3 className='h3'>{recommendation.name}</h3>
              <h4 className='h4'>
                {recommendation.position} at {recommendation.company}
              </h4>
            </div>
            <div className='recommendation__header-column'>
              <button
                onClick={() => updateRecomendation('prev')}
                className='button button--transparent button--inline button--small'
              >
                <Icon name='caret-left' />
                <span className='visually-hidden'>Previous recommedation</span>
              </button>
              <button
                onClick={() => updateRecomendation('next')}
                className='button button--transparent button--inline button--small'
              >
                <Icon name='caret-right' />
                <span className='visually-hidden'>Next recommedation</span>
              </button>
            </div>
          </div>
          {readMore ? (
            recommendation.message.map((message) => (
              <p className={'p'}>{message}</p>
            ))
          ) : (
            <p className={'p p--clamped'}>{recommendation.message[0]}</p>
          )}
          <button
            className='button button--small'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Hide' : 'Continue Reading'}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Recommendations;
