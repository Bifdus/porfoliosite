import { Link } from 'react-scroll';

const NavItem = (props) => {
  return (
    <li className={props.isStyle ? 'nav-list' : 'nav-list-xl'}>
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
