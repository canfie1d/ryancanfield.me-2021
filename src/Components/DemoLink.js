import Icon from '../Components/Icon';

const DemoLink = (props) => {
  return (
    <a
      className='a demo__link'
      href={`http://www.codepen.io/canfie1d/full/${props.id}`}
    >
      <div className='demo__link__column'>
        <h3 className='h3 demo__title'>{props.title}</h3>
        <div className='demo__heart-container'>
          <Icon icon='heart' size='small' color='secondary' />
          <span className='demo__heart__quantity'>{props.hearts}</span>
        </div>
      </div>
      <div className='demo__link__column'>
        <div className='demo__image__wrapper'>
          <img className='demo__image' src={props.image} alt='' />
        </div>
      </div>
    </a>
  );
};

export default DemoLink;
