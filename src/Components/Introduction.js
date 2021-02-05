import classNames from 'classnames';

const Introduction = (props) => {
  const classes = [
    'introduction',
    props.hintNeeded && 'introduction--hintNeeded',
  ];

  return (
    <div className={classNames(classes)}>
      {props.super && <p className='p p--white'>{props.super}</p>}
      <h1 className='h1'>{props.title}</h1>
      <h2 className='h2'>{props.subtitle}</h2>
    </div>
  );
};

export default Introduction;
