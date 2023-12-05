import React from 'react';
import { LinkNav } from '../Sidebar/SidebarStyles';
import { NavLink } from 'react-router-dom';

const AboutLink = () => {
  return (
    <LinkNav>
      <NavLink to="/about" activeClassName="activeLink">
        Sobre mí
      </NavLink>
    </LinkNav>
  );
};

export default AboutLink;