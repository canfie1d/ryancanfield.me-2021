import CardList from '../Components/CardList';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import ArticleLink from '../Components/ArticleLink';
import { ARTICLE_LINKS } from '../Services/Data';

const Writing = (props) => {
  const getCardLinks = () => {
    return ARTICLE_LINKS.map((link, i) => (
      <ArticleLink
        key={i}
        url={link.url}
        imageUrl={link.imageUrl}
        title={link.title}
        description={link.description}
        length={link.length}
      />
    ));
  };

  return (
    <main className='page fade'>
      <Introduction
        title='My Writing.'
        subtitle='Organized thoughts on front-end design &amp; development.'
      />
      <div className='content' id='content'>
        <div className='hr' />
        <h3 className='h3'>Selected Medium Articles</h3>
        <CardList cards={getCardLinks()} />
      </div>
      <Footer />
    </main>
  );
};

export default Writing;
