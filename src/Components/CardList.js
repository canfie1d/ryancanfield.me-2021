import Card from '../Components/Card';

const CardList = (props) => {
  const renderCards = () => {
    return props.cards.map((card, i) => (
      <Card
        key={i}
        element={props.element}
        twoWide={props.twoWide}
        clickable={props.clickable}
      >
        {card}
      </Card>
    ));
  };

  return <ul className={'card__list'}>{renderCards()}</ul>;
};

CardList.defaultProps = {
  element: 'li',
};

export default CardList;
