const Introduction = (props) => {
  return (
    <div className='introduction'>
      <h1 className='h1'>{props.title}</h1>
      <h2 className='h2'>{props.subtitle}</h2>
    </div>
  );
};

export default Introduction;
