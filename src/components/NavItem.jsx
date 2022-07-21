import React from 'react';
import { Link } from 'react-scroll';

const NavItem = (props) => {
  return (
    <div>
      <li className='py-6 text-4xl'>
        <Link
          onClick={props.handleClick}
          to={props.name}
          smooth={true}
          duration={500}
        >
          {props.text}
        </Link>
      </li>
    </div>
  );
};

export default NavItem;
