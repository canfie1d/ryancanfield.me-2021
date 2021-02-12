import Header from './Components/Header';
import './App.scss';

const App = (props) => {
  console.log(
    '\n',
    ' __    __   _______  __       __        ______    __ \n',
    '|  |  |  | |   ____||  |     |  |      /  __  \\  |  | \n',
    '|  |__|  | |  |__   |  |     |  |     |  |  |  | |  | \n',
    '|   __   | |   __|  |  |     |  |     |  |  |  | |  | \n',
    "|  |  |  | |  |____ |  `----.|  `----.|  `--'  | |__| \n",
    '|__|  |__| |_______||_______||_______| \\______/  (__) \n \n',
    'Thanks for checking out my website. You can view the \n',
    'source code here: http://www.github.com/canfie1d/ryancanfield.me-2021 \n',
    'or contact me here ryancanfield@me.com \n \n'
  );

  return (
    <div className='app'>
      <div className='l'>
        <div className='l--rightColumn'>
          <a className='visually-hidden' href='#content'>
            Skip to content
          </a>
          <Header />
        </div>
        <div className='l--leftColumn'>{props.children}</div>
      </div>
    </div>
  );
};

export default App;
