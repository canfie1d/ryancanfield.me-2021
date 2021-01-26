import Header from './Components/Header';
import Routes from './Routes';
import ScrollToTop from './Services/ScrollToTop';
import './App.scss';

const App = (props) => {
  return (
    <div className='app'>
      <ScrollToTop />
      <div className='l'>
        <div className='l--rightColumn'>
          <a className='visually-hidden' href='#content'>
            Skip to content
          </a>
          <Header />
        </div>
        <div className='l--leftColumn'>
          <Routes {...props} />
        </div>
      </div>
    </div>
  );
};

export default App;