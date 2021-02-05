import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Icon from '../Components/Icon';
import { CONTACT_POINTS } from '../Services/Data';
import Recommendations from '../Components/Recommendations';

const Contact = (props) => {
  const renderContactPoints = () => {
    return CONTACT_POINTS.map((contact, i) => {
      if (contact.type === 'button') {
        return (
          <li key={i} className='contact-card__item contact-card__item__email'>
            <a className='button' href={contact.url}>
              {contact.title}
            </a>
          </li>
        );
      } else {
        return (
          <li key={i} className='contact-card__item'>
            <a className='a' href={contact.url}>
              <Icon color='primary' size='x-large' icon={contact.icon} />
              <span className='visually-hidden'>{contact.title}</span>
            </a>
          </li>
        );
      }
    });
  };

  return (
    <main>
      <Introduction
        title='Contact Me.'
        subtitle='You can reach to out me in several ways.'
      />
      <div className='content' id='content'>
        <div className='hr' />
        <h3 className='h3'>I'd love to hear from you</h3>
        <Card>
          <div className='contact-card'>
            <h3 className='h3'>Would you like to work together?</h3>
            <h3 className='h3'>
              I am actively seeking my next opportunity and would be happy to
              chat and/or get a cup of coffee.
            </h3>
            <ul className='contact-card__list'>{renderContactPoints()}</ul>
          </div>
        </Card>
      </div>
      <Recommendations />
      <Footer />
    </main>
  );
};

export default Contact;
