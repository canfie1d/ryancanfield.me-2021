const TagList = (props) => {
  const renderList = () => {
    return props.tags.map((tag) => {
      if (tag.url) {
        return (
          <li key={tag.title} className='tag__item tag__item--hasLink'>
            <a href={tag.url} className='a tag__link'>
              {tag.title}
            </a>
          </li>
        );
      } else {
        return (
          <li key={tag.title} className='tag__item'>
            {tag.title}
          </li>
        );
      }
    });
  };

  return <ul className='tag__list'>{renderList()}</ul>;
};

export default TagList;
