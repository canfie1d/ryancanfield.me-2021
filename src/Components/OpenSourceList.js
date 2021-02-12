import Icon from '../Components/Icon';

const OpenSourceList = (props) => {
  const renderNpmLink = (item) => {
    if (item.npmUrl) {
      return (
        <a className='a' href={item.npmUrl}>
          <Icon color='primary' name='npm' size='x-large' />
          <span className='visually-hidden'>{`View ${item.title} on NPM`}</span>
        </a>
      );
    }
  };

  const renderItems = () => {
    return props.items.map((item, i) => (
      <li key={i} className='open-source__item'>
        <div className='open-source__header'>
          <h4 className='h4'>{item.title}</h4>
        </div>
        <a className='a' href={item.githubUrl}>
          <Icon color='primary' name='github' size='x-large' />
          <span className='visually-hidden'>{`View ${item.title} on Github`}</span>
        </a>
        {renderNpmLink(item)}
      </li>
    ));
  };

  return <ul className='open-source__list'>{renderItems()}</ul>;
};

export default OpenSourceList;
