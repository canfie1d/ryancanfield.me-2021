import Introduction from '../Components/Introduction';
import Recommendations from '../Components/Recommendations';

const NotFound = (props) => {
  return (
    <main>
      <Introduction
        title='Page Not Found.'
        subtitle='Sorry, but the page you are looking for does not exist.'
      />
      <Recommendations />
    </main>
  );
};

export default NotFound;
