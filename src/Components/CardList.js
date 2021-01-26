import Card from '../Components/Card';

const CardList = (props) => {
  const renderCards = () => {
    return props.cards.map((card, i) => (
      <Card key={i} element={props.element} inList>
        {card}
      </Card>
    ));
  };

  return <ul className='card__list'>{renderCards()}</ul>;
};

export default CardList;
