import classNames from 'classnames';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

const Card = (props) => {
  const classes = [
    'card__item',
    props.twoWide && 'card__item--two-wide',
    props.clickable && 'card__item--clickable',
    props.className && props.className,
  ];

  if (props.element === 'li') {
    return (
      <AnimatedWaypoint element={props.element} className={classNames(classes)}>
        {props.children}
      </AnimatedWaypoint>
    );
  }

  return (
    <AnimatedWaypoint element={props.element}>
      <div className={classNames(classes)}>{props.children}</div>
    </AnimatedWaypoint>
  );
};

Card.defaultProps = {
  element: 'div',
};

export default Card;
