import { Link } from 'react-scroll';

const NavItem = (props) => {
  return (
    <li
      className={
        props.isStyle
          ? 'py-6 text-4xl hover:text-red-400'
          : 'hover:text-red-400'
      }
    >
      <Link
        onClick={props.handleClick}
        to={props.name}
        smooth={true}
        duration={500}
      >
        {props.text}
      </Link>
    </li>
  );
};

export default NavItem;
