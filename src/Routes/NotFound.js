import Introduction from '../Components/Introduction';

const NotFound = (props) => {
  return (
    <main className='page fade'>
      <Introduction
        title='Page Not Found.'
        subtitle='Sorry, but the page you are looking for does not exist.'
      />
    </main>
  );
};

export default NotFound;
