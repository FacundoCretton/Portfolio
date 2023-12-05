import React from 'react';
import { LinkNav } from '../Sidebar/SidebarStyles';
import { NavLink } from 'react-router-dom';

const ToolsLink = () => {
  return (
    <LinkNav>
      <NavLink to="/tools" activeClassName="activeLink">
        Herramientas
      </NavLink>
    </LinkNav>
  );
};

export default ToolsLink;