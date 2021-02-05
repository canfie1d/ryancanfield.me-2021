const Footer = (props) => {
  return (
    <footer className='footer'>
      {props.children && (
        <div className='footer__content'>{props.children}</div>
      )}
      <span>
        View the{' '}
        <a
          className='a'
          href='http://www.github.com/canfie1d/ryancanfield.me-2019'
        >
          Source Code
        </a>
      </span>
    </footer>
  );
};

export default Footer;
