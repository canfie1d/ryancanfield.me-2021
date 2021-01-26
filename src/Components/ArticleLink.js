const ArticleLink = (props) => {
  return (
    <a href={props.url} className='card__link'>
      <div className='card__row'>
        <div className='card__column'>
          <img
            src={props.imageUrl}
            className='card__image'
            alt='presentational card'
            role='presentation'
          />
        </div>
        <div className='card__column'>
          <span className='card__title'>{props.title}</span>
          <div className='card__description-wrapper'>
            <p className='card__description'>{props.description}</p>
          </div>
          <span className='card__length'>{props.length}</span>
        </div>
      </div>
    </a>
  );
};

export default ArticleLink;
